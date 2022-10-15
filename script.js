class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear() {
        this.currentOperation = ''
        this.previousOperation = ''
        this.operation = undefined

    }

    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0, -1);

    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperation;
        if(this.operation != null) {
            this.previousOperandText.innerText = `${this.previousOperation} ${this.operation}`
        }
        this.previousOperandText.innerText = this.previousOperation;
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperation.includes('.')) return;
        this.currentOperation = this.currentOperation.toString() + number.toString();  
    }

    chooseOperation(operation) {
        if(this.currentOperation === '')return
        if(this.previousOperandText !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperation = this.currentOperation
        this.currentOperation = ''

    }

    compute() {
        let computation
        
        const prev = parseFloat(this.previousOperation);
        const curr = parseFloat(this.currentOperation);
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation) {
            case '+':
               computation = prev + curr;
               break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            default: 
            return
        }
        this.currentOperation = computation;
        this.operation = undefined;
        this.previousOperation = ''

    }

}


const numb = document.querySelectorAll('[data-number]');
const operand = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const delBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const currentOperandText = document.querySelector('[data-current-operation]');
const previousOperandText = document.querySelector('[data-previous-operation]')


const calculator = new Calculator(previousOperandText, currentOperandText);

numb.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operand.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

 equalBtn.addEventListener('click', ()=> {
        calculator.compute();
        calculator.updateDisplay();
})

 allClearBtn.addEventListener('click', ()=> {
        calculator.clear();
        calculator.updateDisplay();
})

 delBtn.addEventListener('click', ()=> {
        calculator.delete();
        calculator.updateDisplay();
})
