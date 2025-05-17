# RideX Backend

## Overview
RideX is a backend service designed to handle user registration and authentication. This project provides a RESTful API for managing user data and includes features such as password hashing and token generation for secure user sessions.

## Project Structure
```
RideX-Backend
├── backend
│   ├── controllers
│   │   └── user.controller.js
│   ├── models
│   │   └── user.model.js
│   ├── routes
│   │   └── index.js
│   ├── services
│   │   └── user.service.js
│   └── README.md
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the backend server, run:
```
npm start
```
The server will run on the specified port (default is 3000).

## API Endpoints
### User Registration
- **Endpoint:** `POST /api/register`
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "token": "your-auth-token",
      "user": {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com"
      }
    }
    ```

### User Login
- **Endpoint:** `POST /api/login`
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "your-auth-token",
      "user": {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com"
      }
    }
    ```
  - **400 Bad Request** (if validation fails)
    ```json
    {
      "errors": [
        { "msg": "Password must be at least 6 characters long", "param": "password", ... }
      ]
    }
    ```
  - **401 Unauthorized** (if credentials are invalid)
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

### User Profile
- **Endpoint:** `GET /users/profile`
- **Headers:**
  - **Authorization:** Not required if the token is sent via cookies.
- **Cookies:**
  - **token:** The authentication token must be sent as a cookie.
- **Response:**
  - **200 OK**
    ```json
    {
      "_id": "user-id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "createdAt": "2025-05-01T12:00:00.000Z",
      "updatedAt": "2025-05-10T12:00:00.000Z"
    }
    ```
  - **401 Unauthorized** (if the token is missing, invalid, or blacklisted)
    ```json
    {
      "message": "Unauthorized - Token not provided"
    }
    ```

### User Logout
- **Endpoint:** `GET /users/logout`
- **Headers:**
  - **Authorization:** Not required if the token is sent via cookies.
- **Cookies:**
  - **token:** The authentication token must be sent as a cookie.
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
  - **401 Unauthorized** (if the token is missing, invalid, or blacklisted)
    ```json
    {
      "message": "Unauthorized - Token not provided"
    }
    ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.