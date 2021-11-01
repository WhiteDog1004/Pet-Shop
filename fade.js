window.addEventListener('scroll', function(){
    var dog6 = document.querySelector('.dog_06');
    var dogT = document.querySelector('.natural_text');
    var dogS = document.querySelector('.dog_shampoo');
    var dogN = document.querySelector('.new_icon');
    var prodFade = document.querySelector('.product_box');

    var 
    docElem = document.documentElement, // html을 가져옴
    offset,
    scrollPos,
    docHeight;
//문서 높이 확인하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if(docHeight != 'undefined'){
    offset = docHeight / 4;
}
window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    //console.log(scrollPos);

    if(scrollPos > 500){
        dog6.classList.add('dog_animated')
        dogT.classList.add('natural_text2')
        dogS.classList.add('dog_shampoo2')
        dogN.classList.add('new_icon2')
    
    } 

    if(scrollPos > 1000) {
        prodFade.classList.add('product_box_fadein')
    }
});
});