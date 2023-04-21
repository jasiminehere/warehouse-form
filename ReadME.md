# Warehouse Form

This project is a simple warehouse management form that allows users to create a new warehouse with multiple zones and shelves. The form collects the warehouse name, zone numbers, and shelf names as input. The project is built using React for the frontend and Express for the backend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js >= 14.x
- npm >= 7.x

### Installation

1. Clone the repository:

2. Install the project dependencies:
cd <repository_folder>
npm install

3. Start the development servers:

- Frontend: go to location of warehouse-form enter command: npm install and  npm start
- Backend: go to location of warehouse-api and enter command node server.js

4. Open your web browser and visit http://localhost:3000 to access the frontend application.

## Usage

1. Fill in the "Warehouse Name" field.
2. For each zone, enter the names of the shelves.
3. Click "Add Shelf" to add more shelves to a zone (up to a maximum of 10 shelves per zone).
4. Click "Submit" to submit the form. The data will be sent to the backend server and stored in memory.

## Built With

- React
- Express
- Axios


