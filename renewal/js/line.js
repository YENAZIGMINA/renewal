//하트 라인
const line = document.querySelector('.line');
const path1 = document.querySelector('.path1');
const path1Length = path1.getTotalLength();

path1.style.strokeDasharray = path1Length + ' ' + path1Length
path1.style.strokeDashoffset = path1Length
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, line, path1Length)


function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - (length * ratio);
    console.log(ratio)
    return value < 0 ? 0 : value > length ? length : value
}

function scrollHandler() {
    const scrollY = window.scrollY + (window.innerHeight * 0.8);
    path1.style.strokeDashoffset = calcDashoffset(scrollY, line, path1Length)
}

window.addEventListener('scroll', scrollHandler);

