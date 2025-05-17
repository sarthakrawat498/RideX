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

### Captain Registration
- **Endpoint:** `POST /captains/register`
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "Jane", // required, min 3 chars
      "lastname": "Smith"  // required, min 3 chars
    },
    "email": "jane.smith@example.com", // required, must be valid & unique
    "password": "yourpassword", // required, min 6 chars
    "vehicle": {
      "color": "Red", // required, min 3 chars
      "plate": "ABC123", // required, min 3 chars, unique
      "capacity": 4, // required, number >= 1
      "vehicleType": "car" // required, one of: "car", "motorcycle", "auto"
    }
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "token": "your-auth-token",
      "captain": {
        "_id": "captain-id",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Smith"
        },
        "email": "jane.smith@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        },
        "status": "inactive"
      }
    }
    ```
  - **400 Bad Request** (if validation fails or captain already exists)
    ```json
    {
      "message": "Captain already exists"
    }
    ```
    or
    ```json
    {
      "errors": [
        { "msg": "First name must be atleast 3 charcaters long", "param": "fullname.firstname" }
        // ...other validation errors
      ]
    }
    ```

### Captain Login
- **Endpoint:** `POST /captains/login`
- **Request Body:**
  ```json
  {
    "email": "jane.smith@example.com", // required, must be valid
    "password": "yourpassword" // required, min 6 chars
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "your-auth-token",
      "captain": {
        // ...captain profile fields
      }
    }
    ```
  - **400 Bad Request** (if validation fails)
    ```json
    {
      "errors": [
        // ...validation errors
      ]
    }
    ```
  - **401 Unauthorized** (if credentials are invalid)
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

### Captain Profile
- **Endpoint:** `GET /captains/profile`
- **Headers:**
  // Authorization not required if token is sent via cookies
- **Cookies:**
  // token: The authentication token must be sent as a cookie
- **Response:**
  - **200 OK**
    ```json
    {
      "captain": {
        // ...captain profile fields
      }
    }
    ```
  - **401 Unauthorized** (if the token is missing, invalid, or blacklisted)
    ```json
    {
      "message": "Unauthorized - Token not provided"
    }
    ```

### Captain Logout
- **Endpoint:** `GET /captains/logout`
- **Headers:**
  // Authorization not required if token is sent via cookies
- **Cookies:**
  // token: The authentication token must be sent as a cookie
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