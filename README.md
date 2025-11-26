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
2. Backend Setup (Spring Boot)
The backend must be running first to serve API requests.

Open your terminal and navigate to the pokedex folder:

Bash

cd backend
Run the application using the Maven wrapper (this downloads necessary dependencies automatically):

On Windows:

Bash

.\mvnw spring-boot:run

On Mac/Linux:

Bash

./mvnw spring-boot:run
Wait for the console to show Tomcat started on port 8080. The backend is now active.

3. Frontend Setup (React)
Since node_modules are not included in the repository (to keep it lightweight), you need to install them first.

Open a new terminal window (keep the backend running).

Navigate to the frontend folder:

Bash

cd frontend
Install Dependencies: This command downloads all required libraries (React, Chart.js, Tailwind/CSS, etc.) and recreates the node_modules folder:

Bash

npm install

Run the Application: Once the installation is complete, start the development server:

Bash

npm run dev
Open your browser and visit the Local URL shown in the terminal (usually http://localhost:5173).

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
