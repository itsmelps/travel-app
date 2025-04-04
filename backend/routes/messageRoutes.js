const express = require("express");
const Message = require("../models/message");

const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

router.post("/", async (req, res) => {
  const { sender, message } = req.body;
  const newMessage = await Message.create({ sender, message });
  res.status(201).json(newMessage);
});

module.exports = router;
