# 📋 Smart Task Manager

A modern, intelligent task management application built with React, Node.js, and MongoDB. Stay organized and productive with features like deadline tracking, task categorization, and smart filtering.

## ✨ Features

### Core Functionality
- ✅ **Add, Edit, Delete Tasks** - Complete CRUD operations
- ✅ **Deadline Management** - Set deadlines with visual indicators for overdue and approaching tasks
- ✅ **Task Categorization** - Organize tasks by Work, Personal, or Learning categories
- ✅ **Priority Levels** - High, Medium, Low priority with color coding
- ✅ **Completion Tracking** - Mark tasks as complete with visual feedback
- ✅ **Smart Filtering** - Filter by category, completion status, and search
- ✅ **Sorting Options** - Sort by deadline, priority, title, or category

### Advanced Features
- 🔔 **Deadline Alerts** - Visual indicators for tasks due within 24 hours
- 📊 **Task Statistics** - Real-time counts of total, completed, and pending tasks
- 🎨 **Modern UI** - Beautiful, responsive design with smooth animations
- 📱 **Mobile Responsive** - Works perfectly on all device sizes

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Axios** for API communication
- **CSS3** with modern styling and animations

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **CORS** for cross-origin requests

### Database
- **MongoDB** for flexible document storage
- **Mongoose** for schema validation and middleware

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-task-manager
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

5. **Start MongoDB**
   - If using local MongoDB: `mongod`
   - If using MongoDB Atlas: Update the connection string in `.env`

6. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```

7. **Start the frontend application**
   ```bash
   cd client
   npm start
   ```

8. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
smart-task-manager/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript interfaces
│   │   └── App.tsx         # Main app component
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks with optional filters
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion
- `DELETE /api/tasks/:id` - Delete task

### Special Endpoints
- `GET /api/tasks/deadlines/approaching` - Get tasks due within 24 hours
- `GET /api/tasks/deadlines/overdue` - Get overdue tasks

### Query Parameters
- `category` - Filter by category (Work, Personal, Learning)
- `isCompleted` - Filter by completion status (true/false)
- `sortBy` - Sort by (deadline, priority, title, category)
- `search` - Search in title and description

## 🎯 Usage Guide

### Adding a Task
1. Click "Add New Task" button
2. Fill in the required fields (title and deadline)
3. Select category and priority
4. Add optional description
5. Click "Add Task"

### Managing Tasks
- **Complete a task**: Check the checkbox next to the task title
- **Edit a task**: Click the edit (✏️) button
- **Delete a task**: Click the delete (🗑️) button
- **Filter tasks**: Use the filter panel to narrow down tasks
- **Search tasks**: Use the search box to find specific tasks

### Visual Indicators
- 🔴 **Red border**: Overdue tasks
- 🟡 **Yellow border**: Tasks due within 24 hours
- ✅ **Strikethrough**: Completed tasks
- 🏷️ **Color-coded tags**: Category and priority indicators

## 🧪 Testing

### Backend Testing
```bash
cd server
npm test
```

### Frontend Testing
```bash
cd client
npm test
```

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables for production
2. Use a process manager like PM2
3. Deploy to platforms like Heroku, Railway, or AWS

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or AWS S3

## 🔮 Future Enhancements

### Planned Features
- 🔐 **User Authentication** - Login/logout system
- 📱 **Real-time Sync** - WebSocket integration for live updates
- 📅 **Calendar View** - Monthly/weekly task calendar
- 🔔 **Push Notifications** - Browser notifications for deadlines
- 📊 **Analytics Dashboard** - Task completion analytics
- 🎨 **Dark Mode** - Toggle between light and dark themes
- 📱 **Mobile App** - React Native version

### Technical Improvements
- 🧪 **Unit Tests** - Comprehensive test coverage
- 🔒 **Security** - Input validation and sanitization
- ⚡ **Performance** - Caching and optimization
- 📦 **Docker** - Containerization for easy deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ for the Tech Pioneer Program 2025

---

**Note**: This is a prototype application. For production use, consider implementing additional security measures, comprehensive testing, and proper error handling. 
