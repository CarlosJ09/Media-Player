import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer(video, new AutoPlay());
button.onclick = () => player.togglePlay();

//This 

function person(name,age) {
    this.name = name;
    this.age = age;
}

person.prototype.Saludar = function () {
    console.log(`Me llamo ${this.name} y tengo ${this.age} años`)
}

const carlos = new person("Carlos",18);
carlos.Saludar();
