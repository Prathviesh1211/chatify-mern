# Chatly 💬

> A full-stack real-time chat application with an integrated AI assistant, built with the MERN stack and Socket.IO.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-chatly--mern.vercel.app-06b6d4?style=for-the-badge&logo=vercel)](https://chatly-mern.vercel.app)

---

## Screenshots

![Login](https://github.com/user-attachments/assets/453726a1-2da0-45d8-a1ff-36114e6e4608)
*Login — Secure JWT-based authentication*

![Signup](https://github.com/user-attachments/assets/7c6224a6-6e57-47ec-8bb7-148e9d921d5f)
*Sign Up — Create an account and get a welcome email*

![Chat](https://github.com/user-attachments/assets/45fc0338-f2f1-4831-a097-b743a8beda6f)
*Chat — Real-time messaging with image sharing*

![AI Assistant](https://github.com/user-attachments/assets/f9eb407c-577d-452d-8c6a-2d109f65959f)
*AI Assistant — Powered by Google Gemini*

---

## Features

- 🔐 **JWT Authentication** — Custom auth with secure HTTP-only cookies, no third-party services
- ⚡ **Real-time Messaging** — Instant message delivery powered by Socket.IO
- 🤖 **AI Assistant** — Built-in chatbot powered by Google Gemini, always pinned at the top
- 🟢 **Online Presence** — Live online/offline indicators for all users
- 🔔 **Notification Sounds** — Audio alerts for new messages with a mute toggle
- 📨 **Welcome Emails** — Automated onboarding emails via Resend
- 🖼️ **Image Sharing** — Send and receive images via Cloudinary
- 🚦 **Rate Limiting** — API protection powered by Arcjet
- 📱 **Responsive UI** — Clean, modern interface built with Tailwind CSS and DaisyUI

---

## Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

### Services
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Resend account
- Google Gemini API key — [aistudio.google.com](https://aistudio.google.com)
- Arcjet account — [arcjet.com](https://arcjet.com)

### Installation

```bash
git clone https://github.com/Prathviesh1211/chatly-mern.git
cd chatly-mern
```

**Backend**

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RESEND_API_KEY=your_resend_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=Your Name
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
GEMINI_API_KEY=your_gemini_api_key
```

Create the AI bot user (run only once):

```bash
node src/scripts/createBotUser.js
```

Start the backend:

```bash
npm run dev
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## Project Structure

```
chatly-mern/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   │   ├── gemini.js        # Google Gemini AI integration
│   │   │   ├── socket.js        # Socket.IO server setup
│   │   │   ├── cloudinary.js
│   │   │   └── db.js
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── scripts/
│   │   │   └── createBotUser.js # Run once to seed the AI bot
│   │   └── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── store/
    │   └── lib/
    └── package.json
```

---

## Deployment

| Layer | Platform |
|-------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## License

MIT © [Prathviesh Naik](https://github.com/Prathviesh1211)
