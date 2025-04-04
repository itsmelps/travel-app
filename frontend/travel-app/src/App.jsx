import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Components/Layout";
import CommunityForm from "./pages/communityform";
import "./css/App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<Layout />} />
      <Route path="/communityregister" element={<CommunityForm />} />
    </Routes>
  );
};

export default App;
