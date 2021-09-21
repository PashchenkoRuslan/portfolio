'use strict'

const mainText = {
    wordName: ['M','y',' ','n','a','m','e',' ','i','s',' ','R','u','s','l','a','n'],
    wordWhoI: ['f','r','o','n','t','-','e','n','d',' ','d','e','v','e','l','o','p','e','r',',',' ','W','e','b',' ','d','e','s','i','g','n','e','r',' ','a','n','d',' ','s','t','u','d','e','n','t',' ','M','S','U',],

    spanIAm: ['I',' ','a','m'],
    

};


const func = {
    tmp2() {
        if (l === mainText.wordWhoI.length) {
            clearInterval();
            return;
        }
    
        ElementsOfHtml.textP.textContent += mainText.wordWhoI[l];
        l++;
    },

    tmp(){
        if (i === mainText.wordName.length) {
            clearInterval();
            setInterval(func.tmp2,1000);
            return;
        }
    
        ElementsOfHtml.texth1.textContent += mainText.wordName[i];
        i++;
    }


};


const ElementsOfHtml = {
    texth1: document.querySelector('.main_title'),
    textP: document.querySelector('.main_text-about'),

    hamburger: document.querySelector('.hamburger_menu'),
    hamburgerBtn: document.querySelector('.hamburger_btn'),
    navigationItem: document.querySelectorAll('.hamb_nav-item'),
    headerNavigationInner: document.querySelector('.hamburger_menu'),

    portLink: document.querySelectorAll('.portfolio_item-link'),
    portInner: document.querySelector('.portfolio_inner'),
    portImg: document.querySelectorAll('.portfolio_item-img'),
    showPort: document.querySelectorAll('.showPort'),
    seeMore: document.querySelector('.portfolio_more'),
    lightBlack: document.querySelector('.light-black'),
};

let i = 0, l = 0;

setInterval(func.tmp, 100);

ElementsOfHtml.hamburgerBtn.addEventListener('click', function() {
    ElementsOfHtml.hamburger.classList.toggle('hide');
});

ElementsOfHtml.headerNavigationInner.addEventListener('click', function(event) {
        
        if (event.target.nodeName === 'A') {
            ElementsOfHtml.hamburger.classList.toggle('hide');
        }
        

});

// event of mouseover

// for (let i = 0; i < portLink.length; i++) {

// }
ElementsOfHtml.portInner.addEventListener('mouseover', function(event) {

    // if (event.target.className === 'portfolio_item-img') {
    //     event.target.classList.toggle('hide');
    // }

    for (let i = 0; i < ElementsOfHtml.portLink; i++) {
        if (event.targer.tagName === ElementsOfHtml.portImg[i]) {
            ElementsOfHtml.showPort[i].classList.toggle('hide');
        }
    }
  
});


// если у меня меньше 3 работ, то алертать
ElementsOfHtml.seeMore.addEventListener('click', function() {
    console.log('hello');
    if (ElementsOfHtml.portLink.length <= 3) {
        alert('at the moment this is all there is');
    } 
});


// кнопка смены цвета сайта
ElementsOfHtml.lightBlack.addEventListener('click',function(){
    document.body.classList.toggle('blacktheme');

});




// portfolio_item-img
