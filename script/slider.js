let offset = 0; //смещение
const SliderLine = document.querySelector('.slider__line')

document.querySelector('.btn-next').addEventListener('click', function() {
    offset = offset - 340;
    if (offset < -2380) {
        offset = 0;
    }
    SliderLine.style.left = offset + "px";
})

document.querySelector('.btn-prev').addEventListener('click', function() {
    offset = offset + 340;
    if (offset > 0) {
        offset = 0;
    }
    SliderLine.style.left = offset + "px";
})

setInterval (() => {
    offset = offset - 340;
    if (offset < -2380) {
        offset = 0;
    }
    SliderLine.style.left = offset + "px";
}, 5000)