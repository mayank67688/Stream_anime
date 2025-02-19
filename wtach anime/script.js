// Toggle Navigation Menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Anime Search Functionality
function searchAnime() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let animeCards = document.querySelectorAll('.anime-card');

    animeCards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}

// Watch Now Functionality
function watchAnime(animeName) {
    window.location.href = `video.html?anime=${encodeURIComponent(animeName)}`;
}

// Episode Search
function searchEpisode() {
    let input = document.getElementById('episodeSearch').value.toLowerCase();
    let episodes = document.querySelectorAll('.episode-list li');

    episodes.forEach(ep => {
        let text = ep.innerText.toLowerCase();
        ep.style.display = text.includes(input) ? 'block' : 'none';
    });
}

// Load Selected Episode
function loadEpisode(url) {
    document.getElementById('videoPlayer').src = url;
}
