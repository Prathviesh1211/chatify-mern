import React from "react";
import { Routes, Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-zinc-900">
      {/* subtle premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
      {/* glow */}
      <div className="absolute top-0 -left-4 size-96 bg-fuchsia-600 opacity-20 blur-[120px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-400 opacity-20 blur-[120px]" />
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
