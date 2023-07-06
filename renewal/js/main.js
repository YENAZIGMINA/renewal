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
let leftWrap = document.querySelector('.left_wrap');
let clickButton=document.querySelector('.b_circle');

rightWrap.addEventListener("click", function () {
    slidIndexLeft++;
    slideShowLeft(slidIndexLeft);

    clickButton.style.left="1100px"
});

leftWrap.addEventListener("click", function () {
    slidIndexRight++;
    slideShowRight(slidIndexRight);

    clickButton.style.left= "700px";
});





//발레단소개 이미지 리플
$(".int_img").ripples({
    resolution: 500, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
    perturbance: 0.02, // 잔물결 굴절 강도. 0은 굴절 없음
});


//마우스 커서
const introduce = document.querySelector('.introduce');
const intText = document.querySelector('.int_text');
const cursor = document.querySelector('.cursor');

introduce.addEventListener('mousemove', function(e) {
    const parentRect = cursor.parentNode.getBoundingClientRect();

    cursor.style.opacity = "1";
    cursor.style.top = `${e.clientY - (parentRect.top - 50)}px`;
    cursor.style.left = `${e.clientX - (parentRect.left - 200)}px`;
});

introduce.addEventListener('mouseleave', function(e) {
    cursor.style.opacity = "0";
});

intText.addEventListener('mouseenter', function(e) {
    cursor.classList.add("active");
});

intText.addEventListener('mouseleave', function(e) {
    cursor.classList.remove("active");
});


//background color 변경
$(window).scroll(function(){
    let scrollTop=$(this).scrollTop();
    console.log(scrollTop)
    let offset=$('.introduce').offset().top - 600;

    
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});


/* 라인일러스트 */
const line = document.querySelector('.line');
const path1 = document.querySelector('.path1');
const path1Length = path1.getTotalLength();

path1.style.strokeDasharray = path1Length + ' ' + path1Length
path1.style.strokeDashoffset = path1Length
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, line, path1Length)


function calcDashoffset(scrollY, line, length) {
    const ratio = (scrollY - line.offsetTop) / line.offsetHeight;
    const value = length - (length * ratio);
    console.log(ratio)
    return value < 0 ? 0 : value > length ? length : value
}

function scrollHandler() {
    const scrollY = window.scrollY - (window.innerHeight * 1.1);
    path1.style.strokeDashoffset = calcDashoffset(scrollY, line, path1Length)
}

window.addEventListener('scroll', scrollHandler);



/* academy 이미지 전환 */

initComparisons();

function initComparisons() {
    let x, i;
    x = document.getElementsByClassName("img-comp-overlay");
    console.log(x.length) //1
    for (i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }

    function compareImages(img) {
        let slider, clicked = 0,
            w, h;

        w = img.offsetWidth;
        h = img.offsetHeight;

        img.style.width = (w / 2) + "px";


        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");

        img.parentElement.insertBefore(slider, img);

        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideReady);
        slider.addEventListener("mouseup", slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove); //클릭한 상태로 움직임
        }

        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }


        function slideMove(e) {
            console.log("실행")
            var pos;
            if (clicked == 0) return false;
            pos = getCursorPos(e);

            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }

        function getCursorPos(e) {
            let a, x = 0;
            //changedTouches-->	이 터치와 이전 터치 사이에 상태가 변경된 터치 개체 목록
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            x = x - window.pageXOffset; //화면을 좁히면 깨지기 때문
            return x;


        }

        function slide(x) {
            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }

}
