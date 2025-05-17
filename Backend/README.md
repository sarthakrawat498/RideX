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

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.