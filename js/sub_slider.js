document.addEventListener('DOMContentLoaded', function() {
    // 문서.이벤트('이벤트종류', 할일 = function 함수)
    var $slideWrap = document.querySelector('.product_box'),
    $slideContainer = document.querySelector('.sub_slide_box'),
    $slide = document.querySelectorAll('.sub_slide'), // .slide 를 다 가져옴 [숫자]로 표기
    $slideHeight = 0,
    $slideCount = $slide.length, //슬라이드가 몇개인지
    $currentIndex = 0, 
    $sliPrev = document.getElementById('sub_prev'),
    $sliNext = document.getElementById('sub_next');



    $sliPrev.addEventListener('click', function(ev){
        ev.preventDefault();
    });
    $sliNext.addEventListener('click', function(ev){
        ev.preventDefault();
    });

    // 슬라이드 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    /*
    for(var i = 0; i < $slideCount ; i++) {
        if($slideHeight < $slide[i].offsetHeight) {
            $slideHeight = $slide[i].offsetHeight;
        }
    }
    
    console.log($slideHeight);

    $slideWrap.style.height = $slideHeight + 'px';
    $slideContainer.style.height = $slideHeight + 'px';
        */

    for(var a = 0; a < $slideCount; a++) {
        $slide[a].style.left = a * 100 + '%';
    }


    function goToSlide(idx){
        $slideContainer.style.left = -100 * idx + '%';
        $currentIndex = idx;

            //자동 슬라이드 텍스트박스
            /*
            if($currentIndex == $currentIndex) {
                $textSlide[0].classList.remove('active');
                $textSlide[1].classList.remove('active');
                $textSlide[2].classList.remove('active');
                $textSlide[$currentIndex].classList.add('active');
            }
            */
    }


     
    $sliPrev.addEventListener('click', function(){
        cnt = 0;
        if($currentIndex == 0){
            $currentIndex = $slideCount;
        }
        goToSlide($currentIndex - 1);
    });
    $sliNext.addEventListener('click', function(){
        cnt = 0;
        if($currentIndex == $slideCount -1 ) {
            $currentIndex = -1;
        }
        goToSlide($currentIndex + 1);
    });


    // 자동 슬라이드 퍼센트 나눈값을 이용해서 처음으로 돌아가게

    var cnt = 0;
    setInterval(function(){

        cnt += 1;
            if(cnt == 5){
            cnt = 0;
            var nextIdx = ($currentIndex + 1) % $slideCount;
            goToSlide(nextIdx);
        }
    }, 1000);
});


