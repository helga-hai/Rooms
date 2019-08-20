//точка входа, контроллер, отлавливат события, навешивает обработчики
//window.onload должен быть здесь, onEvents, запускает рендеры.
//обращение к єлементам и получение данных
//контейнер куда вы будете рендерить вы здесь получаете. 
//и говорите я ожидаю что то отсюда - и вам возвращается уже готовый темплейт
//Если нужно передать что-то (списки, контейнеры) в модуль - передается параметрами, аргументами


console.log('script.js')
import Room from './generator.js'
import Render from './render.js'

const one = new Room;

window.onload = function() {
    document.body.innerHTML = Render.list([
        '<strong>ROOM ' + one.number + '</strong>',
        one.description(),
        'aera: ' + one.aera + ' m<sup>2</sup>',
        'levels: ' + one.levels,
        'floor: ' + one.floor(),
    ])
}