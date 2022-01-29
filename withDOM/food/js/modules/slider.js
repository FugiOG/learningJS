function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    //* slider 

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
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
}

export default slider;