document.addEventListener('DOMContentLoaded', function () {
    // 문서.이벤트('이벤트종류', 할일 = function 함수)
    var $slideWrap = document.querySelector('.container'),
        $slideContainer = document.querySelector('.slide_container'),
        $slide = document.querySelectorAll('.slide'), // .slide 를 다 가져옴 [숫자]로 표기
        $slideHeight = 0,
        $slideCount = $slide.length, //슬라이드가 몇개인지
        $currentIndex = 0,
        $textSlide = document.querySelectorAll('.textbox_text'),
        $sliPrev = document.getElementById('prev'),
        $sliNext = document.getElementById('next');



    // 문제있으면 지우기 a herf # 클릭시 무반응
    $body = document.querySelector('body');

    $body.addEventListener('click', function (eve) {
        eve.preventDefault();
    });

    // 위시리스트/TOP버튼 
    var topBtt = document.querySelector('.top_btn'),
        topWish = document.querySelector('.wish_on'),
        docElem = document.documentElement, // html을 가져옴
        offset,
        scrollPos,
        docHeight;
    //문서 높이 확인하기
    docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

    if (docHeight != 'undefined') {
        offset = docHeight / 4;
    }
    window.addEventListener('scroll', function () {
        scrollPos = docElem.scrollTop;
        //console.log(scrollPos);

        if (scrollPos > 500) {
            topBtt.classList.add('invisible');
            topWish.classList.add('off');
        } else {
            topBtt.classList.remove('invisible');
            topWish.classList.remove('off');
        }
    });

    topBtn = document.querySelector('.top');

    topBtn.addEventListener('click', function (ev) {
        ev.preventDefault(); // 링크 기능 막음
        //docElem.scrollTop = 0;
        scrollToTop();
    });

    function scrollToTop() {
        var scrollInterval = setInterval(function () {
            if (scrollPos != 0) {
                window.scrollBy(0, -100);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

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

    for (var a = 0; a < $slideCount; a++) {
        $slide[a].style.left = a * 100 + '%';
    }

    for (i = 0; i < $textSlide.length; i++) {
        textSlide(i);
    }


    $sliPrev.addEventListener('click', function () {
        cnt = 0;
        if ($currentIndex == 0) {
            $currentIndex = $slideCount;
        }
        goToSlide($currentIndex - 1);
    });
    $sliNext.addEventListener('click', function () {
        cnt = 0;
        if ($currentIndex == $slideCount - 1) {
            $currentIndex = -1;
        }
        goToSlide($currentIndex + 1);
    });


    // 자동 슬라이드 퍼센트 나눈값을 이용해서 처음으로 돌아가게
    var cnt = 0;
    setInterval(function () {
        cnt += 1;
        if (cnt == 5) {
            cnt = 0;
            var nextIdx = ($currentIndex + 1) % $slideCount;
            goToSlide(nextIdx);
        }
    }, 1000);


    function goToSlide(idx) {
        $slideContainer.style.left = -100 * idx + '%';
        $currentIndex = idx;

        //자동 슬라이드 텍스트박스
        if ($currentIndex == $currentIndex) {
            for (i = 0; i < $textSlide.length; i++) {
                $textSlide[i].classList.remove('active');
            }
            $textSlide[$currentIndex].classList.add('active');
        }
    }

    function textSlide(idx) {
        $textSlide[idx].onclick = function () {
            cnt = 0;
            goToSlide(idx);

            for (i = 0; i < $textSlide.length; i++) {
                $textSlide[i].classList.remove('active');
            }
            $textSlide[idx].classList.add('active');
        }
    }
});



