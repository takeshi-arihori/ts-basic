export default class World {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    public sayHello(elem: HTMLElement) {
        if (elem) {
            elem.innerHTML = this.message;
        }
    }
}
