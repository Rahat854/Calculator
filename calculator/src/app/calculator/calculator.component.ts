import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent{
  currentNumber = '0'
  firstOperand = null
  operator = null
  secondOperand = false

  public getNumber(value:string) {
    if(this.secondOperand){
      this.currentNumber = value
      this.secondOperand = false
    } else {
      this.currentNumber === '0' ? this.currentNumber =value : this.currentNumber += value
    }
  }
  getDecimal(){
    if(!this.currentNumber.includes('.')){
      this.currentNumber += '.';
    }
  }
  private doCalculation(op,secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp
      case '-':
        return this.firstOperand -= secondOp
      case 'x':
        return this.firstOperand *= secondOp
      case '/':
        return this.firstOperand /= secondOp
      case '=':
        return secondOp
    }
  }
  public getOperation(op: string) {
    if(this.firstOperand === null ){
      this.firstOperand = Number(this.currentNumber)
    } else if(this.operator){
      const result = this.doCalculation(this.operator,Number(this.currentNumber))
      this.currentNumber = String(result)
      this.firstOperand = result
    }
    this.operator = op
    this.secondOperand = true
  }
  public clear() {
    this.currentNumber = '0'
    this.firstOperand = null
    this.operator = null
    this.secondOperand = false
  }
}
