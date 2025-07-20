# 🍔 FoodVila - React Food Delivery UI App

**FoodVila** is a dynamic and modern food ordering front-end application built with **React.js** and bundled using **Parcel**. It fetches real restaurant data from **Swiggy's public API endpoints**, simulating a real-world food delivery interface.

---

## 🔧 Tech Stack

- **React.js**
- **Parcel** (zero-config bundler)
- **JavaScript (ES6+)**
- **React Router DOM**
- **HTML5 & CSS3**

---

## 🚀 Features

- 🔍 Search Restaurants by name
- 🏬 Dynamic Restaurant Cards from Swiggy's API
- 📋 View Restaurant Menus by clicking on any restaurant
- 🌐 Routing using `react-router-dom`
- 💡 Shimmer Loading UI for smooth user experience
- 🧭 Pages: Home, About, Contact, Error, Restaurant Details
- 🔄 Login/Logout Toggle Button (UI simulation)

---

## 📁 Folder Structure

FoodVila/
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── Body.js
│ │ ├── RestaurantMenu.js
│ │ ├── RestraurentCard.js
│ │ ├── Shimmer.js
│ │ ├── Error.js
│ │ ├── About.js
│ │ ├── Contact.js
│ ├── config.js
│ ├── App.js
│ ├── index.js
│ └── style.css
├── package.json
├── index.html
└── README.md




2️⃣ Install dependencies

npm install
3️⃣ Start the development server

npm start
Parcel will open your app at http://localhost:1234



Learnings
How to structure a real-world React application

API fetching using fetch

Building reusable components

Error boundaries with useRouteError

Dynamic routing with URL parameters

Working with asynchronous state updates





Future Enhancements
Add cart functionality with context or Redux

Improve shimmer UI with animations

Responsive design for mobile view

Lazy loading & code-splitting

Error boundary for broken API requests

