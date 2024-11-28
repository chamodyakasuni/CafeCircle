# CafeCircle
A social space for cafe lovers

This project is a mobile application built with React Native for managing orders in a coffee shop. It provides features for taking customer orders, managing menu items, and tracking order statuses. The backend database is powered by MySQL.

## Features

    Order Management: Add, update, and delete orders.
    Menu Management: Manage coffee items and other menu items.
    Order Tracking: Track the status of each order from preparation to completion.
    User Authentication: Login system for baristas and managers.
    Real-Time Updates: Orders are updated in real-time for seamless operations.

## Tech Stack

    Frontend: React Native
    Backend: Node.js, Express (for API server)
    Database: MySQL
    Other: RESTful APIs, JSON Web Tokens (JWT) for authentication

## Installation

### Install dependencies:

    npm install

### Database Setup:

    Ensure you have MySQL installed and running.
    Create a MySQL database and configure the connection details in a .env file:

    env

    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_NAME=your_database_name

### Start the Development Server:

    npm start

### Run the Application on an Emulator or Device:

    For iOS: npx react-native run-ios
    For Android: npx react-native run-android

## Usage

   - Login as a barista or manager to access the app.
   - View and update orders from the main dashboard.
   - Add new menu items and manage the existing menu from the management section.
   - Update order statuses to notify the system when orders are in preparation, completed, or ready for pickup.
