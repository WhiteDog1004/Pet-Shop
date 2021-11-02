document.addEventListener('DOMContentLoaded', function() {
    // 문서.이벤트('이벤트종류', 할일 = function 함수)
    $slideContainer = document.querySelector('.hotbox'),
    $slide = document.querySelectorAll('.hotdeal_li'), // .slide 를 다 가져옴 [숫자]로 표기
    $currentIndex = 0;

    function goToSlide(idx){
        $slideContainer.style.left = -100 * idx + '%';
        $currentIndex = idx;
    }

    for(i=0; i < $slide.length; i++) {
        slideLi(i);
    }

    function slideLi(idx) {
        $slide[idx].onclick = function(){
            for(i=0; i < $slide.length; i++) {
                $slide[i].classList.remove('on');
            }
            goToSlide(idx);
            $slide[idx].classList.add('on');
        }
    }
});

