# 🎨 Collaborative Whiteboard - Real-Time Drawing & Collaboration Platform

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-13AA52?style=for-the-badge&logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=for-the-badge&logo=socket.io)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=for-the-badge&logo=tailwind-css)

**A powerful, real-time collaborative whiteboard application enabling seamless team communication and visual brainstorming.**

[Live Demo](#) • [Documentation](#) • [Report Bug](https://github.com/yourusername/whiteboard-main/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Features
- ✅ **Real-Time Collaboration** - Draw simultaneously with multiple users
- ✅ **Live Cursor Tracking** - See where your teammates are drawing
- ✅ **Drawing Tools** - Pencil, shapes, text, and more
- ✅ **User Authentication** - Secure JWT-based login/register
- ✅ **Persistent Storage** - Save & load drawings with MongoDB
- ✅ **Undo/Redo** - Complete history management

</td>
<td width="50%">

### 🚀 Technical Highlights
- ⚡ **WebSocket Communication** - Ultra-fast real-time updates
- 🔐 **Security** - bcrypt password hashing, JWT tokens
- 🎨 **Modern UI** - Tailwind CSS with responsive design
- 📱 **Mobile Optimized** - Works on all devices
- 🔄 **Scalable Architecture** - Microservices-ready backend
- 💾 **Database Persistence** - MongoDB with Mongoose ODM

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
```
React 18          → UI Framework
Socket.IO Client  → Real-time Communication
Tailwind CSS      → Styling
Rough.js          → Sketching Effects
Perfect-freehand  → Advanced Drawing
React Router      → Navigation
Axios             → HTTP Client
```

### Backend
```
Node.js + Express → Server Framework
MongoDB           → Database
Mongoose          → ODM
Socket.IO         → WebSocket Server
JWT               → Authentication
Bcrypt            → Password Hashing
```

---

## 📦 Project Structure

```
whiteboard-main/
├── backend/                    # Express.js REST API + WebSockets
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/           # Business logic
│   │   ├── canvasController.js
│   │   └── userController.js
│   ├── models/                # MongoDB schemas
│   │   ├── canvasModel.js
│   │   └── userModel.js
│   ├── middlewares/           # Authentication middleware
│   ├── routes/                # API endpoints
│   └── server.js              # Main server file
│
└── whiteboard/                # React frontend
    ├── public/                # Static assets
    ├── src/
    │   ├── components/        # Reusable React components
    │   │   ├── Board/        # Main drawing area
    │   │   ├── Toolbar/      # Drawing tools
    │   │   ├── Toolbox/      # Tool options
    │   │   ├── Sidebar/      # Navigation
    │   │   ├── Login/        # Authentication
    │   │   └── Register/     # Sign up
    │   ├── store/            # Context API state management
    │   ├── utils/            # Helper functions
    │   └── App.js            # Main app component
    └── tailwind.config.js    # Tailwind configuration
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/whiteboard-main.git
cd whiteboard-main
```

**2. Backend Setup**
```bash
cd backend
npm install

# Create .env file
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "JWT_SECRET=your_jwt_secret" >> .env
echo "PORT=5000" >> .env

npm start
# Server runs on http://localhost:5000
```

**3. Frontend Setup**
```bash
cd ../whiteboard
npm install

# Create .env file (optional)
echo "REACT_APP_API_URL=http://localhost:5000" > .env

npm start
# App runs on http://localhost:3000
```

---

## 🎮 How to Use

1. **Sign Up** → Create an account with email and password
2. **Login** → Access your dashboard
3. **Create/Join Board** → Start a new whiteboard or join existing one
4. **Draw Collaboratively** → Use drawing tools to create content in real-time
5. **Invite Others** → Share board link with teammates
6. **Save** → Drawings are auto-saved to database

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/users/register      - Create new user account
POST   /api/users/login         - User login
```

### Canvas Operations
```
GET    /api/canvas              - Fetch all canvases
POST   /api/canvas              - Create new canvas
GET    /api/canvas/:id          - Get specific canvas
PUT    /api/canvas/:id          - Update canvas
DELETE /api/canvas/:id          - Delete canvas
```

### WebSocket Events
```
join-room          - Join collaborative session
draw              - Broadcast drawing action
cursor-move       - Share cursor position
user-joined       - New user notification
user-left         - User disconnection
```

---

## 🔐 Authentication

The app uses **JWT (JSON Web Tokens)** for secure authentication:
- Passwords are hashed with **bcrypt** (12 salt rounds)
- Tokens expire after 24 hours
- Protected routes require valid JWT in Authorization header

---

## 📊 Performance & Scalability

- **Real-time Updates**: WebSocket for instant synchronization (< 100ms latency)
- **Database Indexing**: Optimized MongoDB queries
- **Connection Pooling**: Efficient database connection management
- **Horizontal Scaling**: Stateless backend allows load balancing

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Connection Refused | Ensure MongoDB is running and `.env` is configured |
| CORS Error | Check backend CORS settings in `server.js` |
| Socket.IO Timeout | Verify backend is running on correct port |
| Port Already in Use | Change `PORT` in `.env` or kill process on port 5000 |

---

## 📝 Available Scripts

### Frontend
```bash
npm start       # Run development server
npm build       # Build for production
npm test        # Run test suite
```

### Backend
```bash
npm start       # Start Express server
npm run dev     # Run with nodemon (auto-reload)
```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**[Yash Patil]**
- GitHub: [@YashPatil](https://github.com/yashpatil7017)
- LinkedIn: [Yash-Patil](https://linkedin.com/in/yash-patil-606bb32a9)
  
---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an [Issue](https://github.com/yourusername/whiteboard-main/issues)
- Reach out via email
- Check the [Wiki](https://github.com/yourusername/whiteboard-main/wiki)

---

<div align="center">

**Built with ❤️ for seamless collaboration**

⭐ If you found this useful, please consider giving it a star!

</div>
