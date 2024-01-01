const banner = document.getElementById('banner');

var num = 1;

setInterval(() => {
    if(num === 4){
        num = 1;
    };
    banner.style.backgroundImage = `url(../assets/banner_${num}.jpg)`;
    num ++
}, 4500);