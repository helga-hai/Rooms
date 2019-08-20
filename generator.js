console.log('generator.js')

export default class Room {
    constructor() {
        this.number = Math.ceil(Math.random() * 999);
        this.levels = Math.ceil(Math.random() * 2);
        this.aera = Math.ceil(Math.random() * 100);
        this.repair = [true, false][Math.floor(Math.random() * 2)];
        this.type = ['office', 'utility room'][Math.floor(Math.random() * 2)]
    }

    floor() {
        var val;
        console.log(this.number)
        if (this.number.toString().split('').length == 3) {
            val = this.number.toString().split('')[0];
        } else val = 0;

        if (this.levels == 1)
            return val;
        else
            return '' + val + '–' + ++val;
    }
    description() {
        let val = 'Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat'.split(' ');
        val.length = Math.floor(Math.random() * 18) + 3
        return val.join(' ')
    }

}