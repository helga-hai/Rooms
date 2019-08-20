//здесь все генерации темплейта, 
//просто отрисовывает сущность
export default class Render {
    static list(list = [], options) {
            if (!list || !list.length) return '';



            return `<ul>
            ${ list.map(li=>`<li>${li}</li>`).join('') }
            </ul>`
        
    }
}