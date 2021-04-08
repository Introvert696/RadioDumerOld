let btnPlayAndPause = document.querySelector('.imgPlayOrPause'),
    btnPlayBtn = document.querySelector('.btnPlay'),
    audioPlay = new Audio(),
    arrLink = [
        'https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3',
        'https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3'
    ],
    bgArr = ['../img/bg2.jpg', '../img/bg.jpg'],
    activeButton = 0,
    progressBar = document.querySelector(".progress-bar"),
    nextBtn = document.querySelector('.btnNext'),
    prewBtn = document.querySelector('.btnPrew');

audioPlay.onloadedmetadata = (event) => {
    let timeLenght = audioPlay.duration.toFixed(2);
    progressBar.max = timeLenght;
    console.log(timeLenght);
};
let i = 0;
btnPlayAndPause.addEventListener('click', function (event) {
    console.log("2");

    if (i == 1) {
        musicProgressStop();


        i = 0;
    } else {
        musicProgressStart();

        i = 1;
    }
});
audioPlay.addEventListener('ended', function () {
    progressBar.value = 0;
    btnPlayAndPause.src = 'icons/puse.png';
});
window.onload = () => {
    audioPlay.src = '1.mp3';
};
let valueProgress = 0,
    width = 1;

function frames() {
    if (width >= progressBar.max) {
        clearInterval(myInterval);
    } else {
        width++;
        progressBar.value = width;
    }
}
function musicProgressStart() {
    btnPlayAndPause.src = 'icons/puse.png';
    audioPlay.play();
    myInterval = setInterval(frames, 1000);

}
function musicProgressStop() {
    audioPlay.pause();
    btnPlayAndPause.src = 'icons/play.png';
    clearInterval(myInterval);
}
let index = 0;

function nextPlayAudio(){
    audioPlay.src = arrLink[index];
    index++;
}
function prewPlayAudio(){
    audioPlay.src = arrLink[index];
    index--;
}

nextBtn.addEventListener('click',function(){
    nextPlayAudio();
    if(index < arrLink.length){
        index = 0;
    }
});
prewBtn.addEventListener('click',function(){
    prewPlayAudio();
    if(index < 0){
        index = 0;
    }
});