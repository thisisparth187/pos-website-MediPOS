# MERN Stack Point of Sale (POS) Application

This project is a Point of Sale application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Vite for the frontend.

## Project Structure

-   `/`: Contains frontend React application files (managed by Vite).
-   `/public`: Public assets for the frontend.
-   `/src`: Frontend source code (React components, pages, etc.).
    -   `/src/components`: Shared UI components.
    -   `/src/data`: Contains static data, including `backData.json` used for seeding.
    -   `/src/pages`: Main page components for the React app.
-   `/server`: Contains the backend Node.js and Express.js application.
    -   `/server/models`: Mongoose schemas and models.
    -   `/server/routes`: API route definitions.
    -   `/server/.env`: Environment variables (needs to be created).
    -   `/server/server.js`: Main backend server file.
    -   `/server/seed.js`: Database seeding script.
    -   `/server/package.json`: Backend dependencies and scripts.

## Prerequisites

-   Node.js (v14 or later recommended)
-   npm (usually comes with Node.js)
-   MongoDB (either a local instance or a cloud-hosted solution like MongoDB Atlas)

## Frontend Setup

The frontend is a React application built with Vite.

1.  **Navigate to the project root directory:**
    ```bash
    cd <project-root>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173` (or another port if 5173 is busy).

## Backend Setup

The backend is a Node.js/Express.js application that connects to a MongoDB database.

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

2.  **Install backend dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `server` directory (`server/.env`) with the following content:
    ```env
    MONGODB_URI=your_mongodb_connection_string_here
    PORT=3001 # Or any other port you prefer for the backend
    ```
    Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string. For example:
    -   Local MongoDB: `mongodb://localhost:27017/your_database_name`
    -   MongoDB Atlas: `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`

4.  **Seed the database (optional but recommended for initial setup):**
    This script will populate the `products` collection with data from `src/data/backData.json`.
    Ensure your MongoDB server is running and accessible before seeding.
    ```bash
    npm run seed
    ```
    You should see success messages in the console.

5.  **Run the backend server:**
    ```bash
    npm start
    ```
    The backend server will start, typically on the port specified in your `.env` file (e.g., `http://localhost:3001`). You should see a "MongoDB connected successfully" message.

## Backend API Endpoints

The backend provides the following API endpoints for managing products:

-   **`GET /api/products`**
    -   Description: Retrieves a list of all products.
    -   Response: `200 OK` with an array of product objects.
    -   Error: `500 Internal Server Error` if there's a server-side issue.

-   **`GET /api/products/:id`**
    -   Description: Retrieves a single product by its ID.
    -   Parameters: `id` (MongoDB ObjectId of the product).
    -   Response: `200 OK` with the product object.
    -   Error:
        -   `404 Not Found` if the product with the given ID doesn't exist.
        -   `500 Internal Server Error` for other server-side issues.

-   **`POST /api/products`**
    -   Description: Creates a new product.
    -   Request Body: JSON object representing the product. Required fields: `name`, `price`, `stock`, `category`. Optional: `image`.
        ```json
        {
          "name": "New Product",
          "price": 19.99,
          "stock": 100,
          "category": "Electronics",
          "image": "url_or_path_to_image.jpg"
        }
        ```
    -   Response: `201 Created` with the newly created product object.
    -   Error:
        -   `400 Bad Request` if required fields are missing or data is invalid.
        -   `500 Internal Server Error` for other server-side issues.

-   **`PUT /api/products/:id`**
    -   Description: Updates an existing product by its ID.
    -   Parameters: `id` (MongoDB ObjectId of the product).
    -   Request Body: JSON object with fields to update.
        ```json
        {
          "name": "Updated Product Name",
          "price": 29.99
        }
        ```
    -   Response: `200 OK` with the updated product object.
    -   Error:
        -   `400 Bad Request` if data is invalid.
        -   `404 Not Found` if the product with the given ID doesn't exist.
        -   `500 Internal Server Error` for other server-side issues.

-   **`DELETE /api/products/:id`**
    -   Description: Deletes a product by its ID.
    -   Parameters: `id` (MongoDB ObjectId of the product).
    -   Response: `200 OK` with a success message (e.g., `{ "message": "Deleted Product" }`).
    -   Error:
        -   `404 Not Found` if the product with the given ID doesn't exist.
        -   `500 Internal Server Error` for other server-side issues.

## Development Notes

-   The frontend application (React/Vite) runs on its own development server (e.g., `localhost:5173`).
-   The backend API server (Node/Express) runs on a separate port (e.g., `localhost:3001`).
-   Frontend API calls to `/api/*` are proxied to the backend. This is typically configured in `vite.config.js` if not already handled by deploying both to the same domain or using CORS. (Note: Current setup relies on CORS middleware on the backend and direct API calls from frontend.)

This README provides a basic guide to get the project running.
