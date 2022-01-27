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
    let deadLine = '2022-06-01';

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
          modal = document.querySelector('.modal');

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')){
            closeModal(modal);
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);
    
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

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

    //* то же, только с axios (библиотека)

    // axios('http://localhost:3000/menu')
    // .then(obj => {
    //     obj.data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });

    // FORMS 

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(form => bindPostData(form));

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };



    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); //* расположение спинера svg под формой


            const formData = new FormData(form); //* ДОСТАЁТ ДАННЫЕ ИЗ ИНПУТОВ ФОРМЫ (ТОЛЬКО ПРИ НАЛИЧИИ АТРИБУТА - name) 
           
            // const object = {};
            // formData.forEach((value, key) => {
            //     object[key] = value;
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .finally(() => {
                form.reset();
            })
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            });

        });
    }

    function showThanksModal (message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');

        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" date-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        
        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            prevModalDialog.classList.add('show');
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));

    // slider 

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10){
        total.textContent = `0${slides.length}`;
    }else { 
        total.textContent = slides.length;
    }

    if (slideIndex < 10){
        current.textContent = `0${slideIndex}`;
    }else { 
        current.textContent = slideIndex;
    }

    slidesField.style.display = 'flex';
    slidesField.style.width = 100 * slides.length + '%';
    slidesWrapper.style.overflow = 'hidden';
    slidesField.style.transition = '0.5s all';

    slides.forEach(slide => slide.style.width = width);

    slider.style.position = 'relative';
    
    const indicators = document.createElement('ol');
    let dots = [];
    indicators.classList.add('carousel-indicators');

    slider.append(indicators);
    
    for (let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0){
            dot.style.opacity = 1;
        }
        dots.push(dot);
        indicators.append(dot);
    }

    function addZeroOnCondition(numb){
        if (numb < 10){
            return `0${slideIndex}`;
        }
        return numb;
    }

    function changeCurrentOpacity (arr, pos){
        arr.forEach(item => item.style.opacity = .5);
        arr[pos - 1].style.opacity = 1;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // if (e.target.getAttribute('data-slide-to') == slideIndex){

            // }
            slideIndex = e.target.getAttribute('data-slide-to');
            offset = parseInt(width) * (e.target.getAttribute('data-slide-to') - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            current.textContent = addZeroOnCondition(slideIndex);

            changeCurrentOpacity(dots, slideIndex);
        });
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)){
            offset = 0;
            slideIndex = 1;
        }else {
            slideIndex++;
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        current.textContent = addZeroOnCondition(slideIndex);

        changeCurrentOpacity(dots, slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0){
            slideIndex = slides.length;
            offset = deleteNotDigits(width) * (slides.length - 1);
        }else {
            slideIndex--;
            offset -= deleteNotDigits(width);
        }

        //* Аналоги parseInt(width):
        //? 1 - console.log(+width.match(/\d/g).join(''));
        //? 2 - console.log(+width.replace(/\D/g, ''));


        slidesField.style.transform = `translateX(-${offset}px)`;

        current.textContent = addZeroOnCondition(slideIndex);

        changeCurrentOpacity(dots, slideIndex);
    });

    //? АЛЬТЕРНАТИВА:

    // if (slides.length < 10){
    //     total.textContent = `0${slides.length}`;
    // }else { 
    //     total.textContent = slides.length;
    // }

    // showSlides(slideIndex);

    // function showSlides(ind) {
    //     if (ind > slides.length) {
    //         slideIndex = 1;
    //     }else if (ind < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(slide => slide.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slideIndex < 10){
    //         current.textContent = `0${slideIndex}`;
    //     }else { 
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides (ind) {
    //     showSlides(slideIndex += ind);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    //* Calc

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }    

    if (localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || ! weight || !age || !ratio){
            result.textContent = '____';
            return;
        }

        if (sex == 'female') {
            result.textContent = Math.round(ratio * (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)));
        }else {
            result.textContent = Math.round(ratio * (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)));
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', () => {
                if (elem.getAttribute('data-ratio')){
                    ratio = +elem.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                }else {
                    sex = elem.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                elements.forEach(elem => elem.classList.remove(activeClass));
                elem.classList.add(activeClass);
                calcTotal();
            });
        });
    }

    function getDynamicInformation (selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)){
                input.style.border = '1px solid red';
            }else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
});