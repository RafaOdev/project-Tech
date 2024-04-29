let next__btn = document.getElementById('next');
let prev__btn = document.getElementById('prev');
let slide = document.querySelector('.tsn__main__news__slide');
let slide__list = document.querySelector('.tsn__main__news__slide .tsn__list');
let next__slides = document.querySelector('.tsn__main__news__slide .tsn__slides__list');
let mainSlide = document.querySelectorAll('.tsn__main__news__slide .tsn__slides__list .item');

let slide__interval;

let timeRunning = 1000;
let runTimeOut;

function showNextSlide(){
    let itemSlide = document.querySelectorAll('.tsn__main__news__slide .tsn__list .item');
    let nextItem__slide = document.querySelectorAll('.tsn__main__news__slide .tsn__slides__list .item');
    slide__list.appendChild(itemSlide[0]);
    next__slides.appendChild(nextItem__slide[0]);
    slide.classList.add('next');

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slide.classList.remove('next');
    }, timeRunning)
    
}

function showPrevSlide(){
    let itemSlide = document.querySelectorAll('.tsn__main__news__slide .tsn__list .item');
    let nextItem__slide = document.querySelectorAll('.tsn__main__news__slide .tsn__slides__list .item');
    let positionLastItem = itemSlide.length - 1;
    slide__list.prepend(itemSlide[positionLastItem]);
    next__slides.prepend(nextItem__slide[positionLastItem]);
    slide.classList.add('prev');

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slide.classList.remove('prev');
    }, timeRunning)
}



next__btn.addEventListener('click', () => {
    clearInterval(slide__interval);
    showNextSlide();
    slide__interval = setInterval(showNextSlide, 10000);
})

prev__btn.addEventListener('click', () => {
    clearInterval(slide__interval);
    showPrevSlide();
    slide__interval = setInterval(showNextSlide, 10000);
})

slide__interval = setInterval(showNextSlide, 10000);

