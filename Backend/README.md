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
## `/maps/get-coordinates` Endpoint

### Description

Retrieves the coordinates (latitude and longitude) for a given address.

### HTTP Method

`GET`

### Request Parameters

- `address` (string, required): The address for which to retrieve coordinates.

### Example Request

GET `/maps/get-coordinates?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`

### Example Response

```json
{
  "ltd": 37.4224764,
  "lng": -122.0842499
}
```

### Error Response

- `400 Bad Request`: If the address parameter is missing or invalid.
- `404 Not Found`: If the coordinates for the given address could not be found.

```json
{
  "message": "Coordinates not found"
}
```

## `/maps/get-distance-time` Endpoint

### Description

Retrieves the distance and estimated travel time between two locations.

### HTTP Method

`GET`

### Request Parameters

- `origin` (string, required): The starting address or location.
- `destination` (string, required): The destination address or location.

### Example Request

```
GET /maps/get-distance-time?origin=New+York,NY&destination=Los+Angeles,CA
```

### Example Response

```json
{
  "distance": {
    "text": "2,789 miles",
    "value": 4486540
  },
  "duration": {
    "text": "1 day 18 hours",
    "value": 154800
  }
}
```

### Error Response

- `400 Bad Request`: If the origin or destination parameter is missing or invalid.
- `404 Not Found`: If the distance and time for the given locations could not be found.

```json
{
  "message": "No routes found"
}
```

## `/maps/get-suggestions` Endpoint

### Description

Retrieves autocomplete suggestions for a given input string.

### HTTP Method

`GET`

### Request Parameters

- `input` (string, required): The input string for which to retrieve suggestions.

### Example Request

```
GET /maps/get-suggestions?input=1600+Amphitheatre
```

### Example Response

```json
[
  "1600 Amphitheatre Parkway, Mountain View, CA, USA",
  "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
]
```

### Error Response

- `400 Bad Request`: If the input parameter is missing or invalid.
- `500 Internal Server Error`: If there is an error retrieving suggestions.

```json
{
  "message": "Unable to fetch suggestions"
}
```

## `/rides/create` Endpoint

### Description

Creates a new ride with the provided information.

### HTTP Method

`POST`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Request Body

The request body should be in JSON format and include the following fields:

- `pickup` (string, required): The pickup address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).
- `vehicleType` (string, required): The type of vehicle (must be 'auto', 'car', or 'moto').

### Example Response

- `ride` (object):
  - `user` (string): User ID.
  - `pickup` (string): Pickup address.
  - `destination` (string): Destination address.
  - `fare` (number): Fare amount.
  - `status` (string): Ride status.
  - `duration` (number): Duration in seconds.
  - `distance` (number): Distance in meters.
  - `otp` (string): OTP for the ride.

### Error Response

- `400 Bad Request`: If any required field is missing or invalid.
- `500 Internal Server Error`: If there is an error creating the ride.

```json
{
  "message": "Error message"
}
```


## `/rides/get-fare` Endpoint

### Description

Retrieves the fare estimate for a ride between the provided pickup and destination addresses.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization:

 Bear

er <token>`

### Request Parameters

- `pickup` (string, required): The pickup address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).

### Example Request

```
GET /rides/get-fare?pickup=1600+Amphitheatre+Parkway,+Mountain+View,+CA&destination=1+Infinite+Loop,+Cupertino,+CA
```

### Example Response

```json
{
  "auto": 50.0,
  "car": 75.0,
  "moto": 40.0
}
```

### Error Response

- `400 Bad Request`: If any required parameter is missing or invalid.
- `500 Internal Server Error`: If there is an error calculating the fare.

```json
{
  "message": "Error message"
}
```
### Get Fare
- **Endpoint:** `GET /rides/get-fare`
- **Query Parameters:**
  ```json
  {
    "pickup": "<pickup address>", // required, string, min 3 characters
    "destination": "<destination address>" // required, string, min 3 characters
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "fare": 123.45, // example fare amount
      // ...other fare details if any
    }
    ```
  - **400 Bad Request** (validation error)
    ```json
    {
      "errors": [
        { "msg": "Invalid pickup address", "param": "pickup", ... },
        { "msg": "Invalid destination address", "param": "destination", ... }
      ]
    }
    ```
  - **500 Internal Server Error**
    ```json
    {
      "message": "Error message"
    }
    ```

> **Note:**
> - Both `pickup` and `destination` are required as query parameters and must be at least 3 characters long.
> - User must be authenticated (token required).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.