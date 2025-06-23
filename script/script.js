var audio = new Audio('assets/audio/cebolinha elogiando por 25 segundos [VCp5m3-u2X4].mp3')
var img = document.getElementById('img');
var effect = document.getElementById('effect');
var piada = document.getElementById('piada');

var music = new Audio('assets/audio/Pearl Jam - Soldier of Love(MP3_320K).mp3')
music.currentTime = 15;
music.loop = true;
music.volume = 0.8;

function playSound(){
    if(img.src.includes('toque.png')){
        img.src = 'assets/pausa.png'
        audio.currentTime = 0;
        audio.loop = true;
        music.volume = 0.3;
        effect.style.display = 'flex';
        piada.style.display = 'flex';
        audio.play()
        music.play()
    } else{
        img.src = 'assets/toque.png'
        audio.pause()
        music.volume = 0.8;
        effect.style.display = 'none';
        piada.style.display = 'none';
    }
}