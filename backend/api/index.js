const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = process.env.API_KEY;
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // sarah

app.post("/tts", async (req, res) => {
  const { text } = req.body;

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
    console.error("TTS Error:", error.response?.data || error.message);
    res.status(500).send("TTS failed");
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
