# News Aggregator Website

Welcome to the News Aggregator Website, a frontend project built using **React.js** that aggregates news articles from various sources. This application allows users to search for and filter news articles, as well as customize their news feed for a personalized experience. The project is containerized using Docker for easy deployment.

## Technologies Used

- **React.js** - For building the user interface.
- **React Router** - For managing navigation and routing.
- **Axios** - For making HTTP requests to the news APIs.
- **Docker** - For containerizing the application.
- **CSS** - For styling and responsive design.

## Features

### 1. Article Search and Filtering
- Users can search for articles by keyword.
- Articles can be filtered by:
  - Date
  - Category
  - Source

### 2. Personalized News Feed
- Users can select their preferred:
  - News sources
  - Categories
  - Authors
- The personalized settings will allow the user to see articles tailored to their preferences.

### 3. Mobile-Responsive Design
- The website is fully responsive and optimized for mobile devices, ensuring smooth navigation and readability across different screen sizes.

## APIs Used

The following news APIs are used to fetch articles:
1. **[NewsAPI](https://newsapi.org/)** - A comprehensive API providing access to over 70,000 news sources.
2. **[The Guardian API](https://open-platform.theguardian.com/)** - Access to articles from The Guardian newspaper.
3. **[New York Times API](https://developer.nytimes.com/apis)** - Provides access to articles from The New York Times.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/rohanskamath/News_Aggregator_Website.git
   cd News_Aggregator_Website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Running the App (To run the application locally)
   ```bash
   npm run dev
   ```

### Docker Setup

This project is containerized using Docker. Follow the steps below to run it in a Docker container:

1. Build and run the container using Docker Compose:
```bash

docker-compose up --build
```
The application should now be running at http://localhost:5173.

2. Stopping the Container
```bash
docker compose down
```
