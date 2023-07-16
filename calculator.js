class Calculator {
    constructor(previousOperandTextElement , currentOperandTextElement) {
        this.previousOperandTextElement =previousOperandTextElement
        this.currentOperandTextElement  =currentOperandTextElement
        this.clear();
    } 
    
    clear() {
this.currentOperand = ''
this.previousOperand = ''
this.operation =undefined;
}

delete()  {
this.currentOperand =this.currentOperand.toString().slice(0, -1)
}

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() +number.toString()
}

chooseOperation(operation) {
    if(this.currentOperand === '') return
    if(this.previousOperand !== '') {
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

Compute() {
let computation;  
 const prev =parseFloat(this.previousOperand)
 const current =parseFloat(this.currentOperand)
 if(isNaN(prev) || isNaN(current)) return
switch(this.operation) {
    case '+':
     computation= prev + current
    break

    case '-':
    computation= prev - current
    break
    case '*':
    computation= prev * current
    break

    case '÷':
    computation= prev / current
    break
    default:
        return
    
}
this.currentOperand =computation
 this.operation =undefined;
 this.previousOperand = ''
}
getDisplayNumber(number){
    const StringNumber = number.toString()
    const integerDigits = parseFloat(StringNumber.split('.')[0])
    const decimalDigits = (StringNumber.split('.')[1])
   let integerDisplay
   if(isNaN(integerDigits)) {
    integerDisplay =''
   } else{
     let integerDisplay= integerDigits.toLocaleString('en',{maximumFractionDigits: 0})
   }
   if (decimalDigits !=null ) {
    return `${integerDisplay}.${integerDisplay}`
   }else{
    return integerDisplay
   }
}


updateDisplay() {
this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
if(this.operation != null) {
    this.previousOperandTextElement.innertext =
    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
} else{
    this.previousOperandTextElement.Innertext = ''  
}
}
}

const numberButtons =document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allclearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-Operand]')
const currentOperandTextElement = document.querySelector('[data-current-Operand]')


const calculator =new Calculator (previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(Buttons => {
    Buttons.addEventListener('click',() =>{
        calculator.appendNumber(Buttons.innerText)
        calculator.updateDisplay()

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.chooseOperation(button.innertext)
        calculator.updateDisplay()

    })
})

equalsButtons.addEventListener('click', button => {
calculator.compute()
calculator.updateDisplay()
})

allclearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
    })

    deleteButtons.addEventListener('click', button => {
        calculator.delete()
        calculator.updateDisplay()
        })
var counter= document.querySelector(".counter");
var followers= document.querySelector(".followers");

let count =1;
setInterval(()=>{
    if (count<=1000){
count++;
count.innerText=count;
    }
},1 );




