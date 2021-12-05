'use strict';
//? DOMContentLoaded - Скрипт заработает только после построения дом структуры (его прогрузки)
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addMovieInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addMovieInput.value;
        const favorite = checkbox.checked;
        if (newFilm){

            if (newFilm.length > 21){
                newFilm = `${newFilm.slice(0, 22)}...`;
            }

            if (favorite){
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
    
            createMovieList(movieDB.movies, movieList);
    
            event.target.reset();
        }
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    const sortArr = (array) => {
        array.sort();
    };

    function createMovieList(films, parent){
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((item, ind) => parent.innerHTML += `
            <li class="promo__interactive-item">${ind + 1} ${item}
                <div class="delete"></div>
            </li>
        `);
        document.querySelectorAll('.delete').forEach((item, ind) => {
            item.addEventListener('click', () =>{
                item.parentElement.remove();
                movieDB.movies.splice(ind, 1);
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});
