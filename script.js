function switchTheme(){
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')
    const theme = document.body.classList[0];
    const music = theme == 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('Music');
    audio.src = '/musics/${music}';
    audio.play();
    audio.volume = 0.2;
}

window.addEventListener('click', function() {
    const audio = document.getElementById('Music');
    audio.play();
    audio.volume = .2;
})