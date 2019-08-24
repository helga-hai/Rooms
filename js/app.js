//точка входа, контроллер, отлавливат события, навешивает обработчики
//window.onload должен быть здесь, onEvents, запускает рендеры.
//обращение к элементам и получение данных
//контейнер куда вы будете рендерить вы здесь получаете. 
//и говорите я ожидаю что то отсюда - и вам возвращается уже готовый темплейт
//Если нужно передать что-то (списки, контейнеры) в модуль - передается параметрами, аргументами
console.log('script.js')
import itemRoom from './generator.js';
import Render from './render.js';

window.onload = function() {


    const listRooms = [new itemRoom, new itemRoom, new itemRoom, new itemRoom];

    const roomsWrapper = document.querySelector('#rooms__wrapper');

    Render.renderRooms(listRooms, roomsWrapper);

}