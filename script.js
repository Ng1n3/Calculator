const numb = document.querySelectorAll('[data-number]');
const operand = document.querySelectorAll('[data-operaton]');
const equalBtn = document.querySelector('[data-equals]');
const delBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const currentOperandText = document.querySelector('.current-operation');
const previousOperantText = document.querySelector('.previous-operation')

class Calculator {
    constructor(previousOperantText, currentOperandText) {
        this.previousOperantText = previousOperantText;
        this.currentOperandText = currentOperandText;
    }

    clear() {

    }
    delete() {

    }
    
}