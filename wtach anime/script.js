// JavaScript for Search functionality
function searchAnime() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const animeCards = document.querySelectorAll(".anime-card");

    animeCards.forEach(card => {
        const animeName = card.querySelector("h3").innerText.toLowerCase();
        if (animeName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// JavaScript for redirecting to an anime's episode page
function watchAnime(animeName) {
    alert("You selected: " + animeName + ". Redirecting to episodes...");
    document.getElementById('home').style.display = 'none';  // Hide anime list
    document.getElementById('episodes').style.display = 'block';  // Show episode section
    populateEpisodes(animeName);  // Populate episode list for selected anime
}

// JavaScript for populating episodes based on selected anime
function populateEpisodes(animeName) {
    const episodeList = document.getElementById("episodeList");
    episodeList.innerHTML = "";  // Clear previous episode list

    let episodes = [];
    if (animeName === "Attack on Titan") {
        episodes = [
            "Attack on Titan Episode 1",
            "Attack on Titan Episode 2",
            "Attack on Titan Episode 3",
        ];
    } else if (animeName === "Naruto") {
        episodes = [
            "Naruto Episode 1",
            "Naruto Episode 2",
            "Naruto Episode 3",
        ];
    }

    episodes.forEach(episode => {
        const li = document.createElement("li");
        li.textContent = episode;
        li.onclick = function () {
            playEpisode(episode);
        };
        episodeList.appendChild(li);
    });
}

// JavaScript for playing an episode
function playEpisode(episodeName) {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoURL = `https://www.youtube.com/embed/dQw4w9WgXcQ`; // Placeholder link
    videoPlayer.src = videoURL;
    alert(`Now playing: ${episodeName}`);
}

// JavaScript for searching episodes
function searchEpisode() {
    const searchQuery = document.getElementById("episodeSearchInput").value.toLowerCase();
    const episodeItems = document.querySelectorAll(".episode-list li");

    episodeItems.forEach(item => {
        const episodeTitle = item.innerText.toLowerCase();
        if (episodeTitle.includes(searchQuery)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
