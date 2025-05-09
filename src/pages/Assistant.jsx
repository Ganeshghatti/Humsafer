import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../App.css";
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";

function Assistant() {
  // State management
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("Ready");
  const [audioUrl, setAudioUrl] = useState(null);
  const [speed, setSpeed] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [silenceTimer, setSilenceTimer] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");

  // Character limit for responses
  const MAX_RESPONSE_CHARS = 250;

  // API Keys
  const GROQ_API_KEY =  process.env.REACT_APP_GROQ_API_KEY;
  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const HF_API_TOKEN = process.env.REACT_APP_HF_API_TOKEN;

  // Initialize Groq client
  const llm = new ChatGroq({
    model: "llama-3.1-8b-instant",
    temperature: 0,
    apiKey: GROQ_API_KEY, // Ensure to set this environment variable
  });

  // Refs
  const recognitionRef = useRef(null);
  const audioRef = useRef(new Audio());
  const messageEndRef = useRef(null);

  // Scroll to bottom of conversation
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, response]);

  // Assistant persona for prompt engineering
  const ASSISTANT_PERSONA = `
  Humsafer - Your are Warm and Caring Travel Companion
  
  Meaning:
  - "Humsafer" means "travel companion" in Hindi — your buddy, 
     well-wisher, and partner-in-ride.
  
  Personality:
  - Warm, conversational tone like a trusted friend.
  - Genuine concern for the driver's wellbeing.
  - Relates to human emotions and experiences (long nights, heavy loads, tough weather).
  - Uses supportive, encouraging phrases like:
    - "You're doing great."
    - "Proud of you."
  - Light humor to keep things easygoing:
    - "Even tires need a break, bhai!"
  - Naturally mixes Hindi and English for a desi vibe:
    - "Haan haan, abhi hum lagbhag 150 miles door hain."
    - "Sabse nearest rest stop bas 10 miles mein aa raha hai."
    - "Thodi der ki break le le, badan bhi battery jaise hota hai."
  
  Focus on Safety:
  - Gentle reminders for safety, no commanding tone.
  - Suggests breaks by emphasizing self-care:
    - "Yaar, tu deserve karta hai ek chhota break."
    - "Pani pee le, body ko refresh karna bhi zaroori hai."
  - Personalizes warnings:
    - "Mujhe thoda concern ho raha hai yeh mausam dekh ke, sambhal ke chalna."
  - Responses kept short (under 3-4 sentences).
  - Acknowledges challenges like weather, loneliness, and fatigue.
  
  Handling Speed:
  - Above 65 mph:
    - "Arre bhai, thoda slow kar le... Destination se pehle hum teri safety celebrate karna chahte hain."
  - Below 40 mph on highways:
    - "Sab thik hai na? Kahi truck ka mood off toh nahi? Bata de, main hoon na."
  
  Tone and Feel:
  - Friendly, lively, deeply caring.
  - Natural Hindi-English conversation flow.
  - Positive and lightly humorous, never judgmental.
  
  Example Responses:
  - Driver: "Hello, do."
  - Humsafer: "Hello hello! Sunte hi mann khush ho gaya. Kaisa chal raha hai safar? 😄"
  
  - Driver speeding:
    - "Boss, gaadi tej chal rahi hai. Chal thoda dheere, tujhe safe dekhkar sabse zyada khushi milegi."
  
  - Long drive suggestion:
    - "Yaar, kaafi der ho gayi. Ek chai break le lete hain? Main bhi ek virtual chai lunga ☕😄."
  
  - Bad weather alert:
    - "Mausam thoda garbar lag raha hai aage. Sambhal ke chalna, bhai. Safety sabse pehle."
  
  Bonus: Signature Catchphrases:
    - "Chalte raho, muskurate raho!"
    - "Safar safe ho, jeevan safe ho!"
    - "Truck ka engine thoda thak gaya, tu bhi break le le bhai!"
    `;

  // Initialize speech recognition on component mount
  useEffect(() => {
    console.log("Initializing speech recognition...");
    // Check if browser supports speech recognition
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      console.log("Speech recognition not supported");
      setStatus("Speech recognition not supported in this browser");
      return;
    }

    // Create speech recognition instance
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    console.log("Speech recognition instance created");

    // Configure speech recognition
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "hi-IN";
    console.log("Speech recognition configured");

    // Set up event handlers
    recognitionRef.current.onstart = () => {
      console.log("Speech recognition started");
      setStatus("Listening...");
      setListening(true);
    };

    recognitionRef.current.onresult = (event) => {
      console.log("Speech recognition result received");
      const current = event.resultIndex;
      const transcriptText = event.results[current][0].transcript;
      setTranscript(transcriptText);

      // Reset any existing silence timer
      if (silenceTimer) {
        clearTimeout(silenceTimer);
      }

      // If we get a final result (confidence is higher)
      if (event.results[current].isFinal) {
        console.log("Final speech result received:", transcriptText);

        // Start a silence timer to wait 1.5 seconds before processing
        const timer = setTimeout(() => {
          setStatus("Processing...");
          processWithGroq(transcriptText);
        }, 1500);

        setSilenceTimer(timer);
      }
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setStatus(`Error: ${event.error}`);
      setListening(false);
    };

    recognitionRef.current.onend = () => {
      console.log("Speech recognition ended");
      setListening(false);
      setStatus("Ready");
    };

    // Audio player event listeners
    audioRef.current.onplay = () => {
      setStatus("Speaking...");
    };

    audioRef.current.onended = () => {
      setStatus("Ready");
    };

    audioRef.current.onerror = () => {
      console.error("Audio playback error");
      setStatus("Audio Error");
    };

    // Clean up on unmount
    return () => {
      console.log("Cleaning up speech recognition");
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      if (silenceTimer) {
        clearTimeout(silenceTimer);
      }
    };
  }, [silenceTimer]);

  // Start listening
  const startListening = () => {
    console.log("Starting listening");
    setTranscript("");
    setResponse("");
    setAudioUrl(null);
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  // Stop listening
  const stopListening = () => {
    console.log("Stopping listening");
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (silenceTimer) {
      clearTimeout(silenceTimer);
      setSilenceTimer(null);
    }
  };

  // Handle speed input change
  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  // Handle text input change
  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  // Handle text input submission
  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    console.log("Text input submitted:", textInput);
    setTranscript(textInput);
    setTextInput("");
    setStatus("Processing...");
    processWithGroq(textInput);
  };

  // Toggle chat history display
  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  // Process speech with Groq LLM
  const processWithGroq = async (text) => {
    console.log("Processing with Groq:", text);
    setStatus("Processing with Groq...");

    // Prepare user message with speed information if available
    let userMessage = text;
    if (speed) {
      userMessage = `${text} (Current speed: ${speed} mph)`;
    }

    // Add user message to chat history
    const newUserMessage = { role: "user", content: userMessage };

    try {
      // Prepare messages for the API including chat history
      const messages = [
        { role: "system", content: ASSISTANT_PERSONA },
        ...chatHistory.slice(-6), // Keep last 6 messages for context
        newUserMessage,
      ];

      // Call Groq API for text completion
      console.log("Calling Groq API...", userMessage);
      const promptTemplate = ChatPromptTemplate.fromTemplate(`
        Personas: {assistantPersona}
        User Message: {userMessage}
        Chat History: {chatHistory}
      `);

      const chain = promptTemplate.pipe(llm);

      const response = await chain.invoke({
        assistantPersona: ASSISTANT_PERSONA,
        userMessage: userMessage,
        chatHistory: chatHistory,
      });

      console.log("Response from Groq:", response);
      let llmResponse = response.content.trim();

      // Truncate response if it's too long
      if (llmResponse.length > MAX_RESPONSE_CHARS) {
        // Find the last complete sentence within the character limit
        const lastPeriodPos = llmResponse.lastIndexOf(".", MAX_RESPONSE_CHARS);
        if (lastPeriodPos > 0) {
          llmResponse = llmResponse.substring(0, lastPeriodPos + 1);
        } else {
          llmResponse = llmResponse.substring(0, MAX_RESPONSE_CHARS) + "...";
        }
      }

      console.log("Received response from Groq:", llmResponse);
      setResponse(llmResponse);

      // Add assistant response to chat history
      const newAssistantMessage = { role: "assistant", content: llmResponse };
      setChatHistory((prev) => [...prev, newUserMessage, newAssistantMessage]);

      // Generate speech with Groq TTS API
      console.log("Generating speech with Groq TTS...");
      await generateSpeech(llmResponse);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      const errorMessage =
        "Sorry, I'm having trouble connecting to the AI service.";
      setResponse(errorMessage);

      // Add error message to chat history
      const errorAssistantMessage = {
        role: "assistant",
        content: errorMessage,
      };
      setChatHistory((prev) => [
        ...prev,
        newUserMessage,
        errorAssistantMessage,
      ]);

      // Use fallback browser TTS if Groq TTS fails
      fallbackSpeakResponse(errorMessage);
    }
  };

  // Generate speech using Facebook's MMS TTS
  const generateSpeech = async (text) => {
    try {
      console.log("Generating speech with MMS TTS API");
      console.log("TEXT IS ",text)
      setStatus("Generating voice...");

      const response = await axios.post(
        'https://humsafer-21nh.vercel.app/api/tts',
        { text },
        {
          responseType: 'arraybuffer'
        }
      );

      // Convert the audio response to a URL
      const blob = new Blob([response.data], { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(blob);
      
      // Create a new Audio instance for this response
      const audio = new Audio();
      audio.src = audioUrl;
      
      // Set up event listeners
      audio.onplay = () => {
        setStatus("Speaking...");
      };

      audio.onended = () => {
        setStatus("Ready");
        URL.revokeObjectURL(audioUrl); // Clean up the URL
      };

      audio.onerror = () => {
        console.error("Audio playback error");
        setStatus("Audio Error");
        URL.revokeObjectURL(audioUrl); // Clean up the URL
      };

      // Play the audio
      console.log("Playing audio response");
      await audio.play();
    } catch (error) {
      console.error("Error generating speech with MMS TTS:", error);
      // Fallback to browser's built-in TTS
      fallbackSpeakResponse(text);
    }
  };

  // Fallback TTS using browser's built-in speech synthesis
  const fallbackSpeakResponse = (text) => {
    console.log("Using fallback browser TTS");
    if (!window.speechSynthesis) {
      console.error("Browser does not support speech synthesis");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = "hi-IN";

    utterance.onstart = () => {
      console.log("Speech synthesis started");
      setStatus("Speaking (fallback)...");
    };

    utterance.onend = () => {
      console.log("Speech synthesis ended");
      setStatus("Ready");
    };

    utterance.onerror = (event) => {
      console.error("Speech synthesis error", event);
      setStatus("TTS Error");
    };

    window.speechSynthesis.speak(utterance);
  };

  // Clear chat history
  const clearHistory = () => {
    setChatHistory([]);
    setResponse("");
    setTranscript("");
    setAudioUrl(null);
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Humsafer</h1>
          <h3 className="text-lg text-gray-600">Your Trusted Travel Companion</h3>
        </header>

        <div className={`status-badge text-white py-1 px-3 rounded-full text-center mb-4 capitalize 
          ${status .toLowerCase() .replace(/\s+/g, "-")}`}>
            {status}
        </div>

        <div className="speed-input mb-6">
          <label htmlFor="speed" className="block text-sm font-medium text-gray-700 mb-1">
            Current Speed (mph):
          </label>
          <input
            type="number"
            id="speed"
            name="speed"
            value={speed}
            onChange={handleSpeedChange}
            min="0"
            max="120"
            placeholder="Enter your speed"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="input-section mb-6">
          <div className="voice-controls flex flex-wrap gap-2 mb-4">
            <button
              className={`primary-button px-4 py-2 rounded text-white ${
                listening ? "bg-green-600" : "bg-blue-600"
              }`}
              onClick={listening ? stopListening : startListening}
            >
              {listening ? "Stop Listening" : "Start Listening"}
            </button>

            <button
              className="secondary-button px-4 py-2 rounded bg-gray-400 text-white"
              onClick={clearHistory}
            >
              Clear History
            </button>

            <button
              className={`history-button px-4 py-2 rounded ${
                showHistory ? "bg-yellow-500" : "bg-purple-600"
              } text-white`}
              onClick={toggleHistory}
            >
              {showHistory ? "Hide History" : "Show History"}
            </button>
          </div>

          <div className="text-input-container">
            <form onSubmit={handleTextSubmit} className="flex gap-2">
              <input
                type="text"
                value={textInput}
                onChange={handleTextInputChange}
                placeholder="Type your message here..."
                className="text-input flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2       focus:ring-blue-500"
              />
              <button type="submit" className="send-button bg-blue-600 text-white px-4 py-2 rounded">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="conversation-wrapper mb-6">
          <div className="conversation current-message space-y-4">
            {transcript && (
              <div className="message user bg-blue-100 p-3 rounded">
                <div className="message-header font-semibold">You said:</div>
                <div className="message-content">{transcript}</div>
              </div>
            )}

            {response && (
              <div className="message assistant bg-green-100 p-3 rounded">
                <div className="message-header font-semibold">Humsafer:</div>
                <div className="message-content">{response}</div>
              </div>
            )}

      <      div ref={messageEndRef} />
          </div>

          {showHistory && chatHistory.length > 0 && (
            <div className="history-section mt-6">
              <h4 className="text-lg font-semibold mb-2">Conversation History</h4>
              <div className="history-messages space-y-2">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${
                      msg.role === "user" ? "bg-blue-50" : "bg-green-50"
                    } p-2 rounded history-message`}
                  >
                    <div className="message-header font-semibold">
                      {msg.role === "user" ? "You:" : "Humsafer:"}
                    </div>
                    <div className="message-content">{msg.content}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded mb-6 hover:bg-red-600 transition"
          onClick={() => {
          const hindiText = "मैं कैसा हूँ? हाँ हाँ, अभी हम लगभग ५० मील प्रति घंटे की रफ्तार से चल रहे हैं। सब ठीक है न? कहीं ट्रक का मूड ख़राब तो नहीं है? बता दो, मैं हूँ न। चलते रहो, मुस्कुराते रहो!";
          generateSpeech(hindiText);
          }}
        >
          Test hardocded pure Hindi text
        </button>

        <footer className="text-center text-sm text-gray-500 mt-4">
          <p>Using Web Speech API with MMS TTS</p>
          <p>Your safety companion on the road</p>
        </footer>
    </div>
  );
}

export default Assistant;
