var audio = new Audio('assets/audio/cebolinha elogiando por 25 segundos [VCp5m3-u2X4].mp3')
var img = document.getElementById('img');
var effect = document.getElementById('effect');
var piada = document.getElementById('piada');

var body = document.querySelector('body');

var gatito = document.getElementById('gatito');
var center = document.getElementById('center');

var music = new Audio('assets/audio/Pearl Jam - Soldier of Love(MP3_320K).mp3')
music.currentTime = 15;
music.loop = true;
music.volume = 0.8;

function playSound(){
    if(img.src.includes('toque.png')){
        img.src = 'assets/pausa.png'
        audio.currentTime = 0;
        audio.loop = true;
        music.volume = 0.2;
        effect.style.display = 'flex';
        piada.style.display = 'flex';
        body.style.background = "rgb(193 108 111)"
        gatito.style.animation = "moveAround 8s 1s infinite linear alternate-reverse";
        center.style.animation = "pulse 1s  infinite linear alternate-reverse";
        audio.play()
        music.play()
    } else{
        img.src = 'assets/toque.png'
        audio.pause()
        music.pause()
        window.location.href = 'https://youtu.be/wJ2lJru5xRo?si=Ss7q1IVdL50xi3Qc';
        music.volume = 0.8;
        body.style.background = "#141414";
        gatito.style.animation = "none";
        center.style.animation = "none";
        effect.style.display = 'none';
        piada.style.display = 'none';
    }
}