// main.js

//change image/sound based on radio selected
let airHorn = document.getElementById('radio-air-horn');
let carHorn = document.getElementById('radio-car-horn');
let partyHorn = document.getElementById('radio-party-horn');

airHorn.addEventListener("click",chooseImage);
carHorn.addEventListener("click",chooseImage);
partyHorn.addEventListener("click",chooseImage);

function chooseImage(){
    const soundImage = document.getElementById('sound-image');
    const hornSound = document.getElementById('horn-sound');
    if(airHorn.checked==true){
        soundImage.src='./assets/media/images/air-horn.svg';
        hornSound.src='./assets/media/audio/air-horn.mp3';
    }else if(carHorn.checked==true){
        soundImage.src='./assets/media/images/car.svg';
        hornSound.src='./assets/media/audio/car-horn.mp3';
    }else if(partyHorn.checked==true){
        soundImage.src='./assets/media/images/party-horn.svg';
        hornSound.src='./assets/media/audio/party-horn.mp3';
    }
}

//change the volume
let volumeNum = document.getElementById('volume-number');
let volumeSlider = document.getElementById('volume-slider');
volumeNum.addEventListener("input",function(){changeVolumeNum(volumeNum.value)});
volumeSlider.addEventListener("input",function(){changeVolumeNum(volumeSlider.value)});

function changeVolumeNum(volume){
    let volumeImg = document.getElementById('volume-image');
    volumeNum.value = volume;
    volumeSlider.value = volume;
    hornSound.volume = volume/100;
    if(volume>66){
        volumeImg.src = "./assets/media/icons/volume-level-3.svg";
        hornButton.disabled = false;
    }else if(volume>33){
        volumeImg.src = "./assets/media/icons/volume-level-2.svg";
        hornButton.disabled = false;
    }else if(volume>0){
        volumeImg.src = "./assets/media/icons/volume-level-1.svg";
        hornButton.disabled = false;
    }else if(volume==0){
        volumeImg.src = "./assets/media/icons/volume-level-0.svg";
        hornButton.disabled = true;
    }
}

//play the sound when button is pressed
let hornSound = document.getElementById('horn-sound');
let hornButton = document.getElementById('honk-btn')

hornButton.addEventListener("click", function(event){
    event.preventDefault();
    hornSound.play();
});

