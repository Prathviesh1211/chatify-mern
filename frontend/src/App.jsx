import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  console.log(authUser);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  if (isCheckingAuth) return <PageLoader />;
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
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
