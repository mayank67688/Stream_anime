<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Watch Anime</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <style>
        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #121212;
            color: #fff;
        }

        /* Welcome Banner */
        .hero {
            background: url('https://www.deviantart.com/rupislt/art/Anime-Hero-Banner-427240911') no-repeat center center/cover; /* Background image */
            padding: 120px 20px;
            text-align: center;
            color: white;
            background-attachment: fixed;
            animation: fadeIn 1.5s ease-in-out;
            position: relative;
        }

        .welcome-banner h1 {
            font-size: 4em;
            font-family: 'Verdana', sans-serif;
            text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); /* Shadow for better visibility */
        }

        .welcome-banner p {
            font-size: 1.5em;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Shadow for better visibility */
        }

        .welcome-banner .line {
            border: 1px solid white;
            margin-top: 20px;
            margin-bottom: 20px;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
        }

        /* Center text inside the welcome-banner */
        .welcome-banner {
            text-align: center;
        }

        /* Header */
        header {
            background-color: #333;
            padding: 15px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }

        header .logo {
            font-size: 2em;
            color: white;
            margin-left: 20px;
            font-family: 'Arial', sans-serif;
            text-align: center;
        }

        header .search-bar {
            margin-right: 20px;
        }

        header .search-bar input {
            padding: 10px;
            font-size: 1em;
            border-radius: 5px;
        }

        header .search-bar button {
            padding: 10px;
            background-color: #ff4500;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1em;
            border-radius: 5px;
        }

        /* Anime Banners */
        .anime-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-top: 30px;
        }

        .anime-card {
            background-color: #1f1f1f;
            padding: 20px;
            border-radius: 8px;
            width: 200px; /* Adjusted width of the card */
            text-align: center;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        }

        .anime-card img { 
            width: 100%; 
            height: auto; 
            max-width: 150px; /* Adjusted maximum image width */
            border-radius: 8px;
        }

        .anime-card h3 {
            font-size: 1.5em;
            color: #fff;
        }

        .anime-card button {
            margin-top: 10px;
            background-color: #ff4500;
            border: none;
            color: white;
            padding: 10px;
            font-size: 1.1em;
            border-radius: 5px;
            cursor: pointer;
        }

        .anime-card button:hover {
            background-color: #e53e00;
        }

        /* Episode Page Styling */
        .episode-container {
            display: flex;
            justify-content: space-between;
            margin: 20px;
        }

        .episode-list {
            width: 40%;
            background-color: #1f1f1f;
            border-radius: 8px;
            padding: 15px;
            height: 100%;
        }

        .episode-list input {
            padding: 10px;
            font-size: 1em;
            margin-bottom: 10px;
            width: 100%;
            border-radius: 5px;
        }

        .episode-list ul {
            list-style: none;
            padding: 0;
            max-height: 80vh;
            overflow-y: scroll;
        }

        .episode-list li {
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid #333;
        }

        .episode-list li:hover {
            background-color: #333;
        }

        .video-player {
            width: 55%;
            height: 400px;
            background-color: black;
            border-radius: 8px;
        }

        /* Footer */
        footer {
            background-color: #333;
            text-align: center;
            padding: 20px 0;
        }

        footer p {
            font-size: 1.2em;
        }

        footer .social-links {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        footer .social-links a {
            color: #fff;
            text-decoration: none;
        }

        /* Animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <!-- First Page - Welcome Banner -->
    <section class="welcome-banner">
        <h1>Welcome to WatchAnime</h1>
        <hr class="line">
        <p>Your ultimate destination for streaming anime</p>
    </section>

    <header>
        <div class="logo">
            <p>WatchAnime</p>
        </div>
        <div class="search-bar">
            <input id="searchInput" type="text" placeholder="Search for anime...">
            <button onclick="searchAnime()">Search</button>
        </div>
    </header>

    <section id="home">
        <div class="hero-banner">
            <h1>Welcome to WatchAnime</h1>
            <p>Your ultimate destination for streaming anime</p>
        </div>

        <div class="anime-list">
            <!-- Anime Banners -->
            <div class="anime-card" onclick="watchAnime('Attack on Titan')">
                <img src="iamge.jpeg" alt="Attack on Titan">
                <h3>Attack on Titan</h3>
                <button>Watch Now</button>
            </div>
            <div class="anime-card" onclick="watchAnime('Naruto')">
                <img src="https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Naruto">
                <h3>Naruto</h3>
                <button>Watch Now</button>
            </div>
            <!-- Add more anime banners here -->
        </div>
    </section>

    <footer>
        <p>&copy; 2025 WatchAnime. All Rights Reserved. | Designed with ❤️ for Anime Fans</p>
        <ul class="social-links">
            <li><a href="https://www.youtube.com/@M.Kgaming25">YouTube</a></li>
            <li><a href="https://www.youtube.com/@M.Kdrawing25">YouTube 2</a></li>
            <li><a href="https://www.instagram.com/satoruuu_gojoooo/">Instagram</a></li>
        </ul>
    </footer>

    <section id="episodes" style="display:none;">
        <div class="episode-container">
            <!-- Left Side - Episode List -->
            <div class="episode-list">
                <input id="episodeSearchInput" type="text" placeholder="Search Episodes..." onkeyup="searchEpisode()">
                <ul id="episodeList"></ul>
            </div>
            <!-- Right Side - Video Player -->
            <div class="video-player">
                <iframe id="videoPlayer" width="100%" height="auto" src="" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
