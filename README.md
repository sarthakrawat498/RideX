<p align="center">
<img width="500" height="500" alt="Logo_RideX" src="Logo_RideX.png" />
</p>
<h1 align="center">🚖 RideX – Real-Time Ride Booking Platform</h1>

<p align="center">

  A full-stack ride booking solution enabling users to book rides in real-time and captains to manage and fulfill them using live location tracking and OTP-based verification.
</p>
---

## 🧭 User Flow Diagram

> Visual overview of interaction between users, captains, and the real-time engine:

<p align="center">
 <img width="611" height="511" alt="userflow" src="https://github.com/user-attachments/assets/fb7fb993-068d-4bb8-be9c-ec0b151bc486" />
</p>
---

## 🚀 Features

- 👤 Dual Role System – User & Captain
- 🔐 Secure Authentication with JWT
- 📍 Google Maps API for geolocation & routing
- ⚡ Real-time communication with Socket.IO
- ✅ OTP verification before ride start
- 📱 Responsive design for dashboard experience
- 🧾 Ride fare calculation
- 📦 Modular code structure for scalability

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React.js (Vite)
- TailwindCSS
- Google Maps JavaScript API
- Socket.IO Client

### 🛠 Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- Socket.IO
- JWT Authentication

---
🗃️ **Folder Structure**

```
Backend/
├── controllers/
├── db/
├── middlewares/
├── models/
├── routes/
├── app.js
└── server.js

Frontend/
├── public/
├── src/
│   ├── context/
│   ├── pages/
│   └── App.jsx
└── index.html
```

## 🧪 Local Development

> Add `.env` files in both frontend and backend folders.

### Backend `.env`
```env
PORT=4000
DB_CONNECT=mongodb+srv://<user>:<pass>@cluster.mongodb.net/...
JWT_SECRET=your_secret
```
### Frontend `.env`
```
VITE_BASE_URL=https://your-backend-url.onrender.com
VITE_GOOGLE_MAPS_API=your_api_key
```
# Run Locally
## Start Backend
```
cd Backend
npm install
npm run dev
```
## Start Frontend
```
cd Frontend
npm install
npm run dev
```





