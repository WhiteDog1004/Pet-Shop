document.addEventListener('DOMContentLoaded', function () {
    menuImgs = document.querySelectorAll('.menu_imgs');
    menuBoxs = document.querySelectorAll('.menu_box');

    for( i = 0; i < menuBoxs.length; i++) {
        clickImg(i);
    }

    function clickImg(idx) {
        menuBoxs[idx].onclick = function(){
            for( i = 0; i < menuBoxs.length; i++){
                menuImgs[i].classList.remove('on');
                menuBoxs[i].classList.remove('on');
            }
            menuImgs[idx].classList.add('on');
            menuBoxs[idx].classList.add('on');
        }
    }
});
