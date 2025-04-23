# Social Network API

## Description

This is a back-end API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The application uses **Express.js** for routing, a **MongoDB** database, and the **Mongoose** ODM. It is designed to handle large amounts of unstructured data, making it ideal for social media platforms.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
  - [Friends](#friends)
- [Technologies Used](#technologies-used)
- [Walkthrough Video](#walkthrough-video)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/social-network-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-network-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB connection string in a `.env` file:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
   ```

---

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Use **Insomnia** or any API testing tool to interact with the API.

---

## API Routes

### **Users**
- **GET /api/users**: Get all users.
- **GET /api/users/:userId**: Get a single user by ID.
- **POST /api/users**: Create a new user.
  - 
    ```
- **PUT /api/users/:userId**: Update a user by ID.
- **DELETE /api/users/:userId**: Delete a user by ID.
- **POST /api/users/:userId/friends/:friendId**: Add a friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user's friend list.

### **Thoughts**
- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:thoughtId**: Get a single thought by ID.
- **POST /api/thoughts**: Create a new thought.
  -
---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JavaScript**
-**Insomnia**

---

## Walkthrough Video Link 

https://app.screencastify.com/v3/watch/dNhXZZJThs919tFy464u

---

## Questions

If you have any questions, feel free to reach out:

- GitHub: [AmnaEjaz488](https://github.com/AmnaEjaz488)

