//로딩 마우스 효과
/* window.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
}); */


//Nav 2차메뉴
$('.cabin li').click(function(e) {
    e.preventDefault();
});
$('.cabin li').mouseover(function(){
    $(this).find('.depth').stop().slideDown();
})
$('.cabin li').mouseout(function(){
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
/* $('.slides').slick({

}); */


slidIndex=1;
slideShow(slidIndex)

function slideShow(n){
    
}