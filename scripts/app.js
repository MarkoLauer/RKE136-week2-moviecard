let moviePoster = document.querySelector('.movie-poster');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.closeBtn');
let modalImg = document.querySelector('.movie-poster-modal');

moviePoster.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = moviePoster.src;
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
})