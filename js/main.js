let btnPlayAndPause = document.querySelector('.imgPlayOrPause'),
    btnPlayBtn = document.querySelector('.btnPlay'),
    audiPlayer = document.querySelector('audio'),
    arrLink = [
        'https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3',
        'https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3'
    ],
    activeButton = 0;



btnPlayAndPause.addEventListener('click', function (event) {
    if (activeButton == 1) {
        btnPlayAndPause.src = 'icons/play.png';
        activeButton = 0;
        audiPlayer.pause();
    } else {
        btnPlayAndPause.src = 'icons/puse.png';
        activeButton = 1;
        audiPlayer.play();
    }


    // audiPlayer.play();
});

let indexMy = 0;
function playMusic() {
    audiPlayer.play();
    btnPlayAndPause.src = 'icons/puse.png';
    audiPlayer.addEventListener('ended', function () {
        btnPlayAndPause.src = 'icons/play.png';
    });
}
audiPlayer.addEventListener('ended', function (event) {
    audiPlayer.src = arrLink[indexMy];
    playMusic();
    indexMy += 1;
    if (indexMy <= arrLink.length) {
        indexMy = 0;
    }
});


// let bgSel = document.querySelector('body'),
//         bgArr = ['../img/bg2.jpg', '../img/bg.jpg'],
//         index = 0,
//         btnBgNext = document.querySelector('.bgNext');
// function bgReplace(){      
//         document.body.style.backgroundImage = `url(${bgArr[index]})`;
//         index++;

//     if(index == bgArr.length){
//         index = 0;
//     }
// }
// // setInterval(bgReplace, 10000);
// btnBgNext.addEventListener('click',bgReplace);