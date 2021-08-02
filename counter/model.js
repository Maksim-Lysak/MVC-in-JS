export default class Model {
    constructor() {
        this.counter = 0
        this.loadFromLocalStorage()
    }
    loadFromLocalStorage() {
        const localData = localStorage.getItem('counter')
        if (localData) {
            this.counter = JSON.parse(localData)
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('counter', JSON.stringify(this.counter));
    }

    increase() {
        ++this.counter;
        this.saveToLocalStorage()
    }

    decrease() {
        --this.counter;
        this.saveToLocalStorage()
    }
    
    reset() {
        this.counter = 0;
        this.saveToLocalStorage()
    }
}