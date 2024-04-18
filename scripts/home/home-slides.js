const btn__slide__prev = document.querySelector('.prev');
const btn__slide__next = document.querySelector('.next');
const slide__item = document.querySelectorAll('.item');
const slide__content = document.querySelector('.tsn__noticias__principais');

const itens = {
    element1: slide__item[0],
    element2: slide__item[1],
    element3: slide__item[2],
    element4: slide__item[3],
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

for (const key in itens) {
    if (Object.hasOwnProperty.call(itens, key)) {
        const element = itens[key];
        element.addEventListener('click', () => {
            document.querySelector('.tsn__noticias__principais').prepend(element);
        })
    }
}



function slide__next(){
    const items = document.querySelectorAll('.item');
    document.querySelector('.tsn__noticias__principais').appendChild(items[0]);
}

function slide__prev(){
    const items = document.querySelectorAll('.item');
    document.querySelector('.tsn__noticias__principais').prepend(items[items.length - 1]);
}

btn__slide__next.addEventListener('click', slide__next);
btn__slide__prev.addEventListener('click', slide__prev);

setInterval(slide__next, 10000);

