# Map View Node API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies required for the project.

### `npm run start:dev`

Runs the app in development mode.  
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

## API Integration

This app fetches data from a Node.js backend running at [http://localhost:5000](http://localhost:5000).

### API Endpoints:

1. **Login**

   - **Endpoint:** `POST http://localhost:5000/login`
   - **Description:** Authenticates the user and returns a token.
   - **Request Body:**
     ```json
     {
       "username": "user@example.com",
       "password": "password123"
     }
     ```
   - **Response:**
     ```json
     {
       "token": "your_jwt_token"
     }
     ```

2. **Fetch Map Data**

   - **Endpoint:** `GET http://localhost:5000/map`
   - **Description:** Retrieves map-related data.
   - **Headers:**
     ```plaintext
     Authorization: Bearer <your_jwt_token>
     ```
   - **Response:**
     ```json
     {
       "locations": [
         {
           "id": "1",
           "name": "Location A",
           "coordinates": {
             "lat": 40.7128,
             "lng": -74.006
           }
         },
         {
           "id": "2",
           "name": "Location B",
           "coordinates": {
             "lat": 34.0522,
             "lng": -118.2437
           }
         }
       ]
     }
     ```

3. **Fetch Dashboard Data**
   - **Endpoint:** `GET http://localhost:5000/dashboard`
   - **Description:** Retrieves dashboard data, such as card details.
   - **Headers:**
     ```plaintext
     Authorization: Bearer <your_jwt_token>
     ```
   - **Response:**
     ```json
     {
       "cards": [
         {
           "id": "1",
           "title": "Total Users",
           "value": 100
         },
         {
           "id": "2",
           "title": "Active Users",
           "value": 75
         }
       ]
     }
     ```
