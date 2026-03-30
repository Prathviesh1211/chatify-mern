// lib/socket.js — only exports, no app.listen here
import { Server } from "socket.io";
import express from "express";
import http from "http";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [ENV.CLIENT_URL],
    credentials: true,
  },
});

io.use(socketAuthMiddleware);

const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.userId;
  console.log("A user connected:", socket.user.fullName);

  userSocketMap[userId] = socket.id;
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.user.fullName);
    if (userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export const getReceiverSocketId = (userId) => userSocketMap[userId];
export { io, server, app };