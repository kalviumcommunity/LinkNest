
# 🔗 LinkNest – Smart Resource & Link Organizer

![MERN](https://img.shields.io/badge/MERN-Stack-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Active-success)

**LinkNest** is a MERN Stack web application that helps users **organize, manage, and share useful resources** such as tutorials, articles, GitHub repositories, and videos.

Instead of cluttered browser bookmarks, LinkNest allows users to **structure their resources using collections, tags, and notes**, making it easy to **search, filter, and retrieve knowledge anytime**.

---

# ✨ Key Features

## 🔐 User Authentication

Secure authentication ensures every user’s resources remain private.

* User **Signup & Login**
* **Password hashing** with bcrypt
* **JWT based authentication**
* **Protected routes** for user-specific data
* Session validation middleware

---

## 📚 Resource Management

Users can store and manage all their important links in one place.

Capabilities include:

* ➕ Add new resources
* ✏️ Edit saved links
* ❌ Delete resources
* 📝 Attach personal notes to links
* 🔗 Store GitHub repos, articles, videos, docs etc.

---

## 🗂 Collections / Folders

Resources can be grouped into meaningful collections.

Examples:

* Frontend Resources
* Backend Tutorials
* System Design
* DSA Practice
* UI/UX Inspiration

This structure makes navigation **clean and efficient**.

---

## 🏷 Tag System

Each resource can include multiple tags for advanced organization.

Example Tags:

```
React
Node.js
MongoDB
Interview
System Design
UI/UX
```

Users can easily **filter resources by tags**.

---

## 🔎 Smart Search & Filtering

Quickly locate resources using:

* Title search
* Tag filtering
* Collection filtering
* Instant UI filtering

This ensures **fast access to saved knowledge**.

---

## 🌐 Resource Preview

When a link is added, the application automatically fetches metadata:

* Title
* Description
* Preview image
* Website name

This provides **clean preview cards for every resource**.

---

## 🔗 Public Sharing

Users can make collections **publicly accessible**.

Example public link:

```
linknest.com/collection/react-resources
```

This allows users to:

* Share curated learning paths
* Share interview preparation resources
* Share developer knowledge bases

---

# 🛠 Tech Stack

## Frontend

* React.js
* Axios
* Tailwind CSS / Material UI
* React Router

## Backend

* Node.js
* Express.js
* REST API architecture

## Database

* MongoDB
* Mongoose ODM

## Authentication

* JSON Web Token (JWT)
* bcrypt password hashing

---

# 🧠 System Architecture

```
Client (React)
       │
       │ HTTP Requests (Axios)
       ▼
Express API (Node.js)
       │
       │ Authentication Middleware (JWT)
       ▼
Controllers
       │
       ▼
MongoDB Database
```

---

# 📁 Project Structure

```
linknest
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   ├── context
│   └── App.js
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── utils
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/linknest.git
```

---

## 2️⃣ Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

## 3️⃣ Environment Variables

Create a `.env` file inside the **server folder**.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 4️⃣ Run Application

### Start Backend

```bash
npm run server
```

### Start Frontend

```bash
npm start
```

Application will run on:

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

---

## Resources

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/api/resources`     | Get all resources   |
| POST   | `/api/resources`     | Create new resource |
| PUT    | `/api/resources/:id` | Update resource     |
| DELETE | `/api/resources/:id` | Delete resource     |

---

## Collections

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | `/api/collections`     | Get user collections |
| POST   | `/api/collections`     | Create collection    |
| PUT    | `/api/collections/:id` | Update collection    |
| DELETE | `/api/collections/:id` | Delete collection    |

---

# 🚀 Future Improvements

* 📌 Drag & Drop resource organization
* 🤖 AI-based link summarization
* 🌍 Browser extension for quick saving
* 👥 Collaborative collections
* 🌙 Dark mode support
* 📊 Analytics for learning resources

---

# 📷 Screenshots (Optional)

You can add UI screenshots here later.

```
/screenshots
    dashboard.png
    resource-card.png
    collections.png
```

---

# 👩‍💻 Author

**Janhavi Chauhan**

GitHub
[https://github.com/janhavichauhan](https://github.com/janhavichauhan)

---

# 📄 License

This project is licensed under the **MIT License**.


