# Movie Data System Documentation

This documentation provides an overview of the Movie Data System, which consumes a CSV file containing movie data using Node.js WebStreams, presents it on a Next.js frontend, and utilizes an HTTP create server. Follow the steps below to set up and run the project.

## Prerequisites

Before running the project, ensure that you have the following dependencies installed:

- Node.js 18.16.0
- Yarn package manager

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-data-system
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

## Running the Project

### Step 1: Start the server

To start the server, run the following command:

```bash
yarn server
```

This command will start an HTTP create server that will serve the movie data.

### Step 2: Start the frontend

To start the frontend, run the following command:

```bash
yarn dev
```

This command will start the Next.js development server, which will serve the web application.

### Step 3: Access the application

Once both the server and frontend are running, you can access the Movie Data System by opening your web browser and navigating to:

```
http://localhost:3000
```

You should see the web application with the movie data displayed.

## CSV Data

The Movie Data System consumes a CSV file containing movie data. The CSV file should have the following format:

```
title,overview,genre,url
Spider-Man: No Way Home,"Peter Parker is unmasked and no longer able to sep…to discover what it truly means to be Spider-Man.",Action, Adventure, Science Fiction,https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg
The Batman,"In his second year of fighting crime, Batman uncov…hile facing a serial killer known as the Riddler.",Crime, Mystery, Thriller,https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg
No Exit,"Stranded at a rest stop in the mountains during a …ggle to identify who among them is the kidnapper.",Thriller,https://image.tmdb.org/t/p/original/vDHsLnOWKlPGmWs0kGfuhNF4w5l.jpg
Encanto,"The tale of an extraordinary family, the Madrigals…might just be her exceptional family's last hope.",Animation, Comedy, Family, Fantasy,https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg
The King's Man,"As a collection of history's worst tyrants and cri…ons, one man must race against time to stop them.",Action, Adventure, Thriller, War,https://image.tmdb.org/t/p/original/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg
...
```

Each line represents a movie, with three comma-separated values: `title`,`overview`,`genre`,`url`.

## WebStreams and CSV Consumption

The Node.js backend uses WebStreams to consume the CSV data efficiently. It processes the data line by line, extracting the movie information and storing it in memory.

## Technologies Used

The Movie Data System is built using the following technologies:

- Node.js: Backend runtime environment.
- Next.js: Frontend framework for building React applications.
- HTTP create server: Core module in Node.js for creating an HTTP server.
- WebStreams: API for efficient stream processing in Node.js.

## Conclusion

The Movie Data System provides a seamless way to consume and display movie data from a CSV file using Node.js WebStreams. By following the steps mentioned above, you can set up and run the project on your local machine. Enjoy exploring the movie data on the web application!