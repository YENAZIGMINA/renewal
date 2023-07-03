//로딩 마우스 효과
/* window.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
}); */


//Nav 2차메뉴
$('.cabin li').click(function (e) {
    e.preventDefault();
});
$('.cabin li').mouseover(function () {
    $(this).find('.depth').stop().slideDown();
})
$('.cabin li').mouseout(function () {
    $(this).find('.depth').stop().slideUp();
})


//헤더 animate.css 효과
$('.animate').scrolla({
    // default
    mobile: false, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
});


//메인이미지
let slidIndexRight = 1;
let slidIndexLeft = 1;

slideShowRight(slidIndexRight);
slideShowLeft(slidIndexLeft);

function slideShowRight(n) {
    let switchRight = document.getElementsByClassName('r_slide');

    if (n >= switchRight.length) {
        slidIndexRight = 1;
    }
    if (n < 1) {
        slidIndexRight = switchRight.length;
    }

    for (let i = 0; i < switchRight.length; i++) {
        switchRight[i].style.display = "none";
    }

    switchRight[slidIndexRight - 1].style.display = "block";
}

function slideShowLeft(n) {
    let switchLeft = document.getElementsByClassName('l_slide');

    if (n >= switchLeft.length) {
        slidIndexLeft = 1;
    }
    if (n < 1) {
        slidIndexLeft = switchLeft.length;
    }

    for (let i = 0; i < switchLeft.length; i++) {
        switchLeft[i].style.display = "none";
    }

    switchLeft[slidIndexLeft - 1].style.display = "block";
}



let rightWrap = document.querySelector('.right_wrap');
rightWrap.addEventListener("mouseover", function () {
    slidIndexLeft++;
    slideShowLeft(slidIndexLeft);
});

let leftWrap = document.querySelector('.left_wrap');
leftWrap.addEventListener("mouseover", function () {
    slidIndexRight++;
    slideShowRight(slidIndexRight);
});

