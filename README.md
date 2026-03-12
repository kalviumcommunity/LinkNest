# LinkNest – Smart Resource & Link Organizer

LinkNest is a MERN stack web application that helps users organize and manage useful links such as tutorials, articles, GitHub repositories, and videos in a structured way.

Instead of messy browser bookmarks, LinkNest allows users to store links with categories, tags, and notes so they can easily search, filter, and access them anytime.

---

## Features

### User Authentication

* Secure user signup and login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes for user-specific data

### Resource Management

Users can manage their saved resources easily.

* Add new resources
* Edit existing resources
* Delete resources
* Add notes to saved links

### Collections / Folders

Organize links into collections such as:

* Frontend Resources
* Backend Tutorials
* System Design
* DSA Practice

This makes the platform easier to navigate and manage.

### Tag System

Each resource can include tags for better organization.

Examples:

* React
* Node.js
* MongoDB
* Interview
* UI/UX

Users can filter resources using these tags.

### Search & Filtering

Users can quickly find resources using:

* title search
* tag filtering
* category filtering

### Resource Preview

The application fetches metadata from saved links to display:

* title
* description
* preview image

### Public Sharing

Users can make collections public and share them with others using a public link.

Example:

`linknest.com/collection/react-resources`

---

## Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS / Material UI

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### Authentication

* JSON Web Token (JWT)
* bcrypt

---

## Project Structure

```
linknest
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   └── App.js
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── server.js
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/linknest.git
```

### 2. Install dependencies

Backend:

```
cd server
npm install
```

Frontend:

```
cd client
npm install
```

### 3. Setup environment variables

Create a `.env` file in the server directory.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the application

Start backend:

```
npm run server
```

Start frontend:

```
npm start
```

---

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Resources

```
GET /api/resources
POST /api/resources
PUT /api/resources/:id
DELETE /api/resources/:id
```

### Collections

```
GET /api/collections
POST /api/collections
PUT /api/collections/:id
DELETE /api/collections/:id
```

---

## Future Improvements

* Drag and drop resource organization
* AI-based link summarization
* Bookmark browser extension
* Collaborative collections
* Dark mode support

---

## Author

Developed by **Janhavi Chauhan**

GitHub: https://github.com/janhavichauhan

---

## License

This project is licensed under the MIT License.

