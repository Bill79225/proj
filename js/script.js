window.addEventListener('DOMContentLoaded', function() {

    const tabs = require("./modules/tabs"),
          modal = require("./modules/modal"),
          timer = require("./modules/timer"),
          cards = require("./modules/cards"),
          calc = require("./modules/calc"),
          forms = require("./modules/forms"),
          slider = require("./modules/slider");

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
    
    // Timer

    

    // Modal

    

    // Используем классы для создание карточек меню



    // getResource("http://localhost:3000/menu")
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement("div");

    //         element.classList.add("menu__item");

    //         element.innerHTML = `
    //             <img src=${img}} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector(".menu .container").append(element);
    //     })
    // }//для того, чтобы построить элемент один раз, не шаблонный

    // axios.get("http://localhost:3000/menu")
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //         });
    //     });
    // Forms

    

    //slider

    
    
    //Calculator

    
});