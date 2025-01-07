# Login Application (MERN Stack)
###
![ScreenShot Tool -20250107043508](https://github.com/user-attachments/assets/c1cfddea-af89-4f62-8d39-bd8baf882cf1)
###

## Project Overview

This is a simple Login and Registration system built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** templating engine. It allows users to register, log in, and access a dashboard page after successfully logging in. This project demonstrates how to create a secure authentication system with password hashing and user data management using MongoDB.

<div align="center">
  <h3> Contributed Using These Languages </h3>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="JavaScript" />
    <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="HTML5" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="CSS3" />
    <img width="12" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/express/express-original.svg" height="30" alt="Express" />
  <img width="12" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/docker/docker-original.svg" height="30" alt="Docker" />
  <img width="12" />
    <img width="12" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/nodejs/nodejs-plain-wordmark.svg" height="30" alt="NodeJS" />
    <img width="12" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/mongodb/mongodb-plain-wordmark.svg" height="30" alt="mongodb" />
  
</div>

<br> </br>

The project covers essential aspects of web development, such as user authentication, data validation, form handling, and error handling. It follows common practices for building secure, scalable web applications with JavaScript.

## Features

- **User Registration**: Allows users to create an account by entering a unique username and a secure password.
- **User Login**: Authenticates users by checking their credentials and comparing the hashed password stored in MongoDB.
- **Dashboard**: After logging in, users are redirected to a welcome dashboard where they can see their username and confirm their login.
- **Password Hashing**: Passwords are hashed using **bcryptjs** before being stored in the database for better security.
- **Error Handling**: Displays helpful error messages for invalid input (e.g., short username or password), non-registered users, or existing usernames.
- **User Experience Enhancements**: User-friendly error messages and feedback, such as redirection to the registration page if the user is not found in the login process.

## Technologies Used

- **Node.js**: A JavaScript runtime used to build the backend of the application.
- **Express.js**: A minimal web application framework for Node.js, used to build the backend routes and handle HTTP requests.
- **MongoDB**: A NoSQL database for storing user data, including usernames and hashed passwords.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js that simplifies working with the database.
- **bcryptjs**: A library for hashing passwords before storing them securely.
- **EJS**: A templating engine that allows rendering dynamic HTML views in the backend.

## Process Followed

### Step 1: Initial Setup

The project was initialized with **Node.js** and **Express.js** as the core backend technologies. These technologies provide an efficient platform for building web applications and handling HTTP requests.

MongoDB was chosen as the database to store user information because of its flexibility and scalability. **Mongoose**, a library that makes working with MongoDB more efficient, was used for creating the schema and querying the database.
###

![ScreenShot Tool -20250104005845](https://github.com/user-attachments/assets/1d5e2c5e-4dd2-48f3-9cde-af72bb8397e8)

###

### Step 2: User Registration

On the **/register** route, users can create an account by entering a valid **username** and **password**. The system performs the following checks:

1. **Username Validation**: Ensures the username is unique and not already taken.
2. **Password Validation**: Ensures the password is at least 6 characters long.
###
###
If the username is unique and the password is valid, the password is hashed using **bcryptjs** and saved in the MongoDB database along with the username.
###
![Screenshot from 2025-01-05 09-39-25](https://github.com/user-attachments/assets/76150c31-93fb-4606-aeff-deb9d8debbdb)
###

### Step 3: User Login

When a user tries to log in, the system:

1. Checks if the entered **username** exists in the database.
2. Compares the entered password with the stored hashed password using **bcryptjs**.
3. If the login is successful, the user is redirected to the **dashboard** page.
![ScreenShot Tool -20250105095123](https://github.com/user-attachments/assets/d4c0b7e6-79f1-44a7-a44f-8c2632c29bc9)

### Step 4: Error Handling and Validation

- Invalid inputs, such as short usernames or passwords, are detected at the registration and login stages.
- If a user tries to log in with an incorrect username or password, they are redirected to the registration page with a helpful error message: "User not registered. Please create an account."
###
![ScreenShot Tool -20250105104619 (2)](https://github.com/user-attachments/assets/cee77559-d617-4b3d-bd57-7b7ef60ba7f6)
###
![ScreenShot Tool -20250105104946](https://github.com/user-attachments/assets/db93de66-53df-49d3-8d4e-7d44f7884bc3)

###

### Step 5: User Feedback

To improve user experience, helpful error messages are shown whenever there is a problem with the input or login. For example, if a user tries to register with a username that already exists, they are shown the error message: "Username already exists. Please choose another."


### Step 6: Dashboard

Once a user successfully logs in, they are redirected to a **dashboard** page that welcomes them by their username. It provides a sense of completion, letting the user know they have logged in successfully.
###
![ScreenShot Tool -20250105095123](https://github.com/user-attachments/assets/492b9ca7-34bb-4e09-9aa2-a5d28667429b)

###

## Importance of This Project

This project emphasizes **secure password handling** using hashing techniques. Instead of storing plaintext passwords, which are vulnerable to data breaches, this application stores **hashed passwords**. By using **bcryptjs**, we ensure that passwords are stored securely, making it difficult for hackers to retrieve them even if they gain access to the database.

In addition to password security, the project demonstrates important web development practices, such as:
- **Input validation** and sanitization to prevent potential security vulnerabilities.
- **User-friendly feedback** that enhances the user experience.
- **Seamless routing** for login and registration flows.
  
## Detailed Explanation of Routes and Actions

### `/register` Route

- **GET** request renders the registration page (`register.ejs`).
- **POST** request processes the form submission:
  - Validates the username and password.
  - Hashes the password using bcrypt.
  - Saves the user to MongoDB if the username is unique.

### `/login` Route

- **GET** request renders the login page (`login.ejs`).
- **POST** request processes the form submission:
  - Validates the user credentials.
  - Compares the entered password with the hashed password in the database.
  - Redirects to the dashboard if the login is successful or to the registration page if the user is not registered.

### `/dashboard` Route

- After successful login, the user is redirected to a dashboard page, showing their username.

## Project Structure

```
. ├── config.js # Configuration file for MongoDB connection URI 
  ├── index.js # Main entry point of the application 
  ├── package.json # Project metadata and dependencies 
  ├── package-lock.json # Dependency tree lock file 
  ├── node_modules # Directory containing installed dependencies 
  ├── public # Static files (CSS, JS) 
  │ └── styles.css # Custom styles for the application 
  └── views # EJS templates for rendering HTML 
    ├── login.ejs # Login form view 
    ├── register.ejs # Registration form view 
    └── dashboard.ejs # Dashboard view after successful login
```

### Explanation of Key Files

- **index.js**: The entry point of the application, containing the server setup, middleware, routes for login and registration, and error handling.
- **config.js**: Configuration file for MongoDB connection details.
- **views/login.ejs**: The EJS template for the login page. It includes the login form and error handling for invalid inputs.
- **views/register.ejs**: The EJS template for the registration page. It includes the registration form and validation for username availability.
- **views/dashboard.ejs**: The EJS template for the dashboard page, displayed after a successful login.
- **public/styles.css**: Contains the styling for the login and registration pages, including error messages and success feedback.

## How to Run the Project

### Prerequisites

- **Node.js**: Install from [nodejs.org](https://nodejs.org/)
- **MongoDB**: Install MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.

### Steps to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/r0han01/Express-Authentication-System-with-MongoDB.git
   cd Express-Authentication-System-with-MongoDB

2. Install the required dependencies:

```bash
npm install
```
3. Set up your MongoDB database by updating the connection string in the config.js file.

4. Run the application:

```bash
npm start
```
## Visit http://localhost:8081 in your browser to access the login page.

### Verifying Data Using MongoDB Shell

To ensure that the application is correctly interacting with the database, you can use the MongoDB shell to verify the data stored in the `Credentials` database. Here are the steps:

1. **Start MongoDB Shell**:
   - For local MongoDB: Run `mongo` in your terminal.
   - For MongoDB Atlas: Use the connection string provided by Atlas (e.g., `mongo "mongodb+srv://<your-atlas-uri>"`).

2. **Verify Database and Collections**:
   - Run `show databases` to check if `Credentials` exists.
   - Switch to the `Credentials` database using `use Credentials`.
   - Run `show collections` to confirm the `users` collection is available.

3. **Check Data in `users` Collection**:
   - Run `db.users.find().pretty()` to view the list of users.
   - To search for a specific user, use: `db.users.find({ username: "johndoe" }).pretty()`.

4. **Delete Test Data (Optional)**:
   - To delete a specific user, run: `db.users.deleteOne({ username: "johndoe" })`.
   - To delete all users, run: `db.users.deleteMany({})`.

5. **Exit MongoDB Shell**:
   - Run `exit` to leave the shell.

This ensures that the application is correctly handling and storing user data.

#### How Much Time Spent On This ?
- This project is a result of 6 Straight hours of dedicated effort. I spent this time carefully crafting and refining each aspect of the application to ensure it is secure, efficient, and easy to use. Every step, from setting up the MongoDB connection to implementing the login and registration features, was designed with attention to detail. Your feedback and contributions are highly appreciated!

