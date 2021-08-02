export default class View {
    constructor(counterValue) {
        this.input = document.getElementById('input')
        this.updateCounter(counterValue)
    }
    elements = {
        btnPlus: document.getElementById('btnPlus'),
        btnMinus: document.getElementById('btnMinus'),
        btnReset: document.getElementById('btnReset'),
    }       

    updateCounter(data) {
        this.input.value = data;
    }
}