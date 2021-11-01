document.addEventListener('DOMContentLoaded', function() {
    // 문서.이벤트('이벤트종류', 할일 = function 함수)
    $slideContainer = document.querySelector('.hotbox'),
    $slide = document.querySelectorAll('.hotdeal_li'), // .slide 를 다 가져옴 [숫자]로 표기
    $currentIndex = 0;

    function goToSlide(idx){
        $slideContainer.style.left = -100 * idx + '%';
        $currentIndex = idx;
    }
     
    $slide[0].addEventListener('click', function(){
        goToSlide(0);
        $slide[0].style.opacity = '0.7';
        $slide[1].style.opacity = '0.2';
        $slide[2].style.opacity = '0.2';
    });
    $slide[1].addEventListener('click', function(){
        goToSlide(1);
        $slide[1].style.opacity = '0.7';
        $slide[0].style.opacity = '0.2';
        $slide[2].style.opacity = '0.2';
    });

    $slide[2].addEventListener('click', function(){
        goToSlide(2);
        $slide[2].style.opacity = '0.7';
        $slide[0].style.opacity = '0.2';
        $slide[1].style.opacity = '0.2';
    });

});

