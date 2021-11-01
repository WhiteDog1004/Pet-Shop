let specialBox = document.querySelector('.special_box');
let superBox = document.querySelector('.super_box');
let cntGem = document.querySelector('.gem_use p');

let specialRes = document.querySelector('.special_result');
let superSpecialRes = document.querySelector('.super_special_result');

let specialImg = document.querySelector('.special_img img');
let specialEnd = document.querySelector('.special_resultBox');
let superSpecialImg = document.querySelector('.super_special_img img');
let superSpecialEnd = document.querySelector('.super_special_resultBox');

let specialPuzzle = document.querySelector('.special_puzzle');
let specialChar = document.querySelector('.special_char');
let specialCharP = document.querySelector('.special_char p');
let superSpecialPuzzle = document.querySelector('.super_special_puzzle');
let superSpecialChar = document.querySelector('.super_special_char');
let superSpecialCharP = document.querySelector('.super_special_char p');

let specialCharImg = document.querySelectorAll('.char_img');
let superSpecialCharImg = document.querySelectorAll('.super_char_img');

let backBox = document.querySelector('.back');
let superBackBox = document.querySelector('.super_back');

let specialCnt = document.querySelector('.special_cnt p');
let superCnt = document.querySelector('.super_cnt p');

let cntNum = 0;
let ranNum = 0;

let specialNum = 0;
let superNum = 0;

let cindy = 0,
    hook = 0,
    master = 0,
    rabi = 0,
    ducky = 0,
    witch = 0;

let charCindy = document.querySelector('.cindy'),
    charHook = document.querySelector('.hook'),
    charMaster = document.querySelector('.master'),
    charRabi = document.querySelector('.rabi'),
    charDucky = document.querySelector('.ducky'),
    charWitch = document.querySelector('.witch');


window.onload = function() {

    specialBox.addEventListener('click', function(){
        cntNum = parseInt(cntNum) - 50;
        cntGem.innerText = cntNum;
        specialNum ++;
        specialCnt.innerHTML = specialNum;

        specialRes.classList.add('active');
    });

    specialImg.addEventListener('click', function(){
        specialEnd.classList.add('active');
        specialRes.classList.remove('active');

        ranNum = Math.floor(Math.random() * 1000);

        if(ranNum <= 950) {
            specialPuzzle.style.display = 'block';
        } else if (ranNum <= 968) {
            if(cindy == 1){
                specialPuzzle.style.display = 'block';
            } else {
                cindy = 1;
                specialChar.style.display = 'block';
                specialCharImg[0].style.display = 'block';
                charCindy.style.opacity = '1';
                specialCharP.innerHTML = '신디'; 
            }

        } else if (ranNum <= 980) {
            if(hook == 1) {
                specialPuzzle.style.display = 'block';
            } else {
                hook = 1;
                specialChar.style.display = 'block';
                specialCharImg[1].style.display = 'block';
                charHook.style.opacity = '1';
                specialCharP.innerHTML = '후크';
            }

        } else if (ranNum <= 990) {
            if(master == 1) {
                specialPuzzle.style.display = 'block';
            } else {
                master = 1;
                specialChar.style.display = 'block';
                specialCharImg[2].style.display = 'block';
                charMaster.style.opacity = '1';
                specialCharP.innerHTML = '마스터 캣';
            }

        }  else if (ranNum <= 996) {
            if(rabi == 1) {
                specialPuzzle.style.display = 'block';
            } else {
                rabi = 1;
                specialChar.style.display = 'block';
                specialCharImg[3].style.display = 'block';
                charRabi.style.opacity = '1';
                specialCharP.innerHTML = '라비';
            }

        } else if (ranNum <= 998) {
            if(ducky == 1){
                specialPuzzle.style.display = 'block';
            } else {
                ducky = 1;
                specialChar.style.display = 'block';
                specialCharImg[4].style.display = 'block';
                charDucky.style.opacity = '1';
                specialCharP.innerHTML = '더키와 스완';
            }

        } else if (ranNum <= 1000) {
            if(witch == 1){
                specialPuzzle.style.display = 'block';
            } else {
            specialChar.style.display = 'block';
            specialCharImg[5].style.display = 'block';
            charWitch.style.opacity = '1';
            specialCharP.innerHTML = '위치 퀸';
            }
        } else {
            specialPuzzle.style.display = 'block';
        }
    });


    // 슈퍼 스페셜 박스
    // 슈퍼 스페셜 박스

    superBox.addEventListener('click', function(){
        cntNum = parseInt(cntNum) - 120;
        cntGem.innerText = cntNum;
        superNum ++;
        superCnt.innerHTML = superNum;

        superSpecialRes.classList.add('active');
    });

    superSpecialImg.addEventListener('click', function(){
        superSpecialEnd.classList.add('active');
        superSpecialRes.classList.remove('active');

        ranNum = Math.floor(Math.random() * 1000);

        
        if(ranNum <= 875) {
            superSpecialPuzzle.style.display = 'block';
        } else if (ranNum <= 920) {
            if(cindy == 1){
                superSpecialPuzzle.style.display = 'block';
            } else {
                cindy = 1;
                superSpecialChar.style.display = 'block';
                superSpecialCharImg[0].style.display = 'block';
                charCindy.style.opacity = '1';
                superSpecialCharP.innerHTML = '신디'; 
            }

        } else if (ranNum <= 950) {
            if(hook == 1) {
                superSpecialPuzzle.style.display = 'block';
            } else {
                hook = 1;
                superSpecialChar.style.display = 'block';
                superSpecialCharImg[1].style.display = 'block';
                charHook.style.opacity = '1';
                superSpecialCharP.innerHTML = '후크';
            }

        } else if (ranNum <= 975) {
            if(master == 1) {
                superSpecialPuzzle.style.display = 'block';
            } else {
                master = 1;
                superSpecialChar.style.display = 'block';
                superSpecialCharImg[2].style.display = 'block';
                charMaster.style.opacity = '1';
                superSpecialCharP.innerHTML = '마스터 캣';
            }

        }  else if (ranNum <= 990) {
            if(rabi == 1) {
                superSpecialPuzzle.style.display = 'block';
            } else {
                rabi = 1;
                superSpecialChar.style.display = 'block';
                superSpecialCharImg[3].style.display = 'block';
                charRabi.style.opacity = '1';
                superSpecialCharP.innerHTML = '라비';
            }

        } else if (ranNum <= 995) {
            if(ducky == 1){
                superSpecialPuzzle.style.display = 'block';
            } else {
                ducky = 1;
                superSpecialChar.style.display = 'block';
                superSpecialCharImg[4].style.display = 'block';
                charDucky.style.opacity = '1';
                superSpecialCharP.innerHTML = '더키와 스완';
            }

        } else if (ranNum <= 1000) {
            if(witch == 1){
                superSpecialPuzzle.style.display = 'block';
            } else {
            witch = 1;
            superSpecialChar.style.display = 'block';
            superSpecialCharImg[5].style.display = 'block';
            charWitch.style.opacity = '1';
            superSpecialCharP.innerHTML = '위치 퀸';
            }
        } else {
            superSpecialPuzzle.style.display = 'block';
        }


    });












    backBox.addEventListener('click', function(){
        specialEnd.classList.remove('active');
        specialPuzzle.style.display = 'none';
        specialChar.style.display = 'none';
        specialCharImg[0].style.display = 'none';
        specialCharImg[1].style.display = 'none';
        specialCharImg[2].style.display = 'none';
        specialCharImg[3].style.display = 'none';
        specialCharImg[4].style.display = 'none';
        specialCharImg[5].style.display = 'none';
        specialCharP.innerHTML = '퍼즐 조각';

    });

    superBackBox.addEventListener('click', function(){
        superSpecialEnd.classList.remove('active');
        superSpecialPuzzle.style.display = 'none';
        superSpecialChar.style.display = 'none';
        superSpecialCharImg[0].style.display = 'none';
        superSpecialCharImg[1].style.display = 'none';
        superSpecialCharImg[2].style.display = 'none';
        superSpecialCharImg[3].style.display = 'none';
        superSpecialCharImg[4].style.display = 'none';
        superSpecialCharImg[5].style.display = 'none';
        superSpecialCharP.innerHTML = '퍼즐 조각';

    });

}