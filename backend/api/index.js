const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "sk_3de030fdc58c29957b889da185d45df5a099cac457a4edaa";
const VOICE_ID = "yoZ06aMxZJJ28mfd3POQ"; // sam

app.post("/api/tts", async (req, res) => {
  const { text } = req.body;
  console.log("api ",API_KEY)
  console.log("TEXT ",text)

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      },
      {
        headers: {
          "xi-api-key": API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    res.set("Content-Type", "audio/mpeg");
    res.send(response.data);
    console.log("Success in converting")
  } catch (error) {
   console.error("TTS Error:", {
  message: error.message,
  status: error.response?.status,
  data: error.response?.data?.toString('utf8'),
  headers: error.response?.headers
});
    res.status(500).send("TTS failed");
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
