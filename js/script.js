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

