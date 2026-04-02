import mongoose from "mongoose";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

// await mongoose.connect(ENV.MONGO_URI);
await mongoose.connect(process.env.MONGODB_URI);

const existing = await User.findOne({ email: "ai@bot.internal" });
if (existing) {
  console.log("Bot user already exists:", existing._id);
} else {
  const bot = await User.create({
    fullName: "AI Assistant",
    email: "ai@bot.internal",
    password: "not-used-at-all",
    profilePic: "https://ui-avatars.com/api/?name=AI&background=6366f1&color=fff",
    isBot: true,
  });
  console.log("Bot user created:", bot._id);
}

await mongoose.disconnect();
process.exit();