import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper, Avatar, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "../css/Chat.css";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]); // ✅ Messages now only come from the server
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", { message, isUser: true }); // ✅ Send to server but DO NOT update state manually
      setMessage(""); // ✅ Clear input field
    }
  };

  return (
    <Box className="chat-container">
      <Typography variant="h4" className="chat-title">
        Chat
      </Typography>
      <Paper className="chat-box">
        {messages.map((msg, index) => (
          <Stack
            key={index}
            direction={msg.isUser ? "row-reverse" : "row"} // ✅ Sender (Right), Receiver (Left)
            spacing={1}
            className="chat-message"
          >
            <Avatar sx={{ bgcolor: msg.isUser ? deepOrange[500] : deepPurple[500] }}>
              {msg.isUser ? "U" : "R"}
            </Avatar>
            <Box className={`message-bubble ${msg.isUser ? "sender-bubble" : "receiver-bubble"}`}>
              {msg.message}
            </Box>
          </Stack>
        ))}
      </Paper>
      <Box className="chat-input-box">
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          fullWidth
          variant="outlined"
          className="chat-input"
        />
        <Button variant="contained" onClick={sendMessage} className="send-button">
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
