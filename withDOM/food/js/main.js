'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //* TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //* Применяем делегирование

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    //* ------------------------------------------------------

    //* TIMER 
    let deadLine = '2022-01-01';

    function getTimeRemaining (endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / (1000)) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(selector, endTime){
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'), 
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(timerUpdate, 1000);

        timerUpdate();

        function timerUpdate() {
            const t = getTimeRemaining(endTime);
            if (t.total <=0){
                clearInterval(timeInterval);
            }
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
        }
    }

    setTimer('.timer', deadLine);
    //* ----------------------------------------------------------------------

    //* Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          btnCloseModal = document.querySelector('[data-close]');

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    function closeModal (elem) {
        elem.classList.add('hide');
        elem.classList.remove('show');
        document.body.style.overflow = '';
    }

    btnCloseModal.addEventListener('click', () => {
        closeModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal){
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')){
            closeModal(modal);
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);
    
    function showModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { //* window.pageYOffset - кол-во проскроленных пикселей
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // используем классы для карточек 

    class MenuCard {
        constructor (src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH () {
            this.price = this.price * this.transfer;
        }

        render () {
            const element = document.createElement('div');

            if (this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            }else{
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container',
        'menu__item'
    ).render();

    // FORMS 

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(form => postData(form));

    function postData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json'); //* ЕСЛИ МЫ ИСПОЛЬЗУЕМ СВЯЗКУ XMLHttpRequest() и FormData() ЗАГОЛОВОК УСТАНАВЛИВАТЬ НЕ НУЖНО

            const formData = new FormData(form); //* ДОСТАЁТ ДАННЫЕ ИЗ ИНПУТОВ ФОРМЫ (ТОЛЬКО ПРИ НАЛИЧИИ АТРИБУТА - name) 
           
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });

            const json = JSON.stringify(object);
            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200){
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset(); //* очистка формы
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                }else{
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
});