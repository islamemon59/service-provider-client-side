# 🏠 HelpNest – Service Provider Platform

HelpNest is a full-stack, role-based service provider web application designed to connect **customers** with **service providers**. It enables users to browse, book, and manage various services with real-time booking status updates. The system ensures secure access and tailored experiences based on user roles.

---

## 🔗 Live Project

🌐 [Visit HelpNest Live](https://help-nest-service-provider.netlify.app/)

---

## 🛠️ Technologies Used

### Frontend:

* React
* React Router
* Tailwind CSS
* DaisyUI

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

### Authentication & Security:

* Firebase Authentication
* JWT (JSON Web Token)

### Communication & Tools:

* Axios
* dotenv
* cors
* nodemon

---

## ✨ Core Features

* 🔐 **Role-Based Authentication:** Firebase authentication with protected routes for customers and providers.
* 🛠️ **Service Provider Dashboard:** Providers can add, edit, and delete services.
* 📦 **Customer Booking System:** Customers can explore services and make bookings easily.
* 🔄 **Booking Status Tracking:** Providers can update booking status (Pending → Working → Complete).
* 📁 **Data Security:** Bookings are only visible to the respective user (customer or provider).

---

## 📦 Key Dependencies

```json
"dependencies": {
  "axios": "^latest",
  "cors": "^latest",
  "dotenv": "^latest",
  "express": "^latest",
  "firebase": "^latest",
  "jsonwebtoken": "^latest",
  "mongodb": "^latest",
  "nodemon": "^latest",
  "react": "^latest",
  "react-dom": "^latest",
  "react-router-dom": "^latest",
  "tailwindcss": "^latest",
  "daisyui": "^latest"
}
```

---

## 🧑‍💻 Run the Project Locally

### Prerequisites:

* Node.js & npm installed
* MongoDB URI (MongoDB Atlas or local instance)
* Firebase project setup

---

### 🔧 Backend Setup:

```bash
git clone [https://github.com/your-username/helpnest-server](https://github.com/islamemon59/service-provider-server-side.git)
cd helpnest-server
npm install
```

➡️ Create a `.env` file in the root and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

```bash
npm run dev
```

---

### 💻 Frontend Setup:

```bash
git clone https://github.com/islamemon59/service-provider-client-side.git
cd helpnest-client
npm install
npm run dev
```

---

## 📁 Folder Structure

```
helpnest/
👤 client/               # React Frontend
👤 server/               # Node + Express Backend
```

---

## 🔗 Additional Resources

* 🔗 [Client Repository](https://github.com/islamemon59/service-provider-client-side)
* 🔗 [Server Repository](https://github.com/islamemon59/service-provider-server-side)
* 📘 Firebase Docs: [https://firebase.google.com/docs](https://firebase.google.com/docs)
* 📘 MongoDB Docs: [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)

---

## 📣 Author

**Emon Hossain**
📧 [islamemon59@gmail.com](mailto:islamemon59@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/emonislam59) • [GitHub](https://github.com/islamemon59)

---

⭐ If you like this project, consider giving it a star!
