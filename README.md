# Pokedex Search Engine

This is my submission for the Finfactor Technologies coding challenge. It is a full-stack application designed to search for Pokemon, visualize their statistics, and play their audio cries.

I developed this using a **Spring Boot** backend (for caching and data aggregation) and a **React** frontend (for the user interface).

---

##  Prerequisite Software
Before running the project, please ensure you have the following installed:
- **Java 17** or higher
- **Node.js** & **npm**
- **Git**

---

##  Step-by-Step Setup Guide

Follow these instructions to get the project running on your local machine.

### 1. Clone the Project
First, clone this repository to your local system using Git:


git clone [https://github.com/Om-Kanawade/Finfactor-Pokedex-Challenge.git](https://github.com/Om-Kanawade/Finfactor-Pokedex-Challenge.git)
cd Finfactor-Pokedex-Challenge
### How to Run



Step 1: Start the Backend

Open a terminal and navigate to the backend folder.

Run the application using Maven:

cd backend
./mvnw spring-boot:run


The server will start on http://localhost:8080.

Step 2: Start the Frontend

Open a new terminal and navigate to the frontend folder.

Install dependencies and start the server:

cd frontend
npm install
npm run dev


Open the link shown (usually http://localhost:5173) in your browser.

## Features to Test
Once the app is running, try the following:

Search: Type "Pikachu" or "Charizard" to see the data load.

Caching: Search for "Mewtwo". Then, refresh the page and search for "Mewtwo" again. The second result will load instantly (0ms latency) because it is served from the backend Cache.



Audio: Click "Play Cry" to hear the Pokemon.

## Project Structure
backend/: Java Spring Boot application. Handles:

API Proxying to PokeAPI.

Caffeine Caching (10-minute expiry).

Data Aggregation (combining Pokemon details with Species description).

frontend/: React application. Handles:

User Interface.

Interactive Charts (Chart.js).

Audio Playback.
