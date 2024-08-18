import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    currentNumber = '0';
    firstOperand: any;
    operator = '';
    waitForSecondNumber = false;

    ngOnInit(): void {

    }

    public getNumber(val: string) {
        // console.log("Value :" + val);
        if (this.waitForSecondNumber) {
            this.currentNumber = val;
            this.waitForSecondNumber = false;
        } else {
            this.currentNumber === '0' ? this.currentNumber = val : this.currentNumber += val;
        }
    }

    getDecimal() {
        if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
        }
    }

    private doCalculation(op: string, secondOp: any) {
        switch (op) {
            case '+':
                return this.firstOperand += secondOp;
            case '-':
                return this.firstOperand -= secondOp;
            case '*':
                return this.firstOperand *= secondOp;
            case '/':
                return this.firstOperand /= secondOp;
            case '=':
                return secondOp;
        }
    }
    public getOperation(op: string) {
        // console.log("Operation :" + op);

        if (this.firstOperand === null) {
            this.firstOperand = Number(this.currentNumber);

        } else if (this.operator) {
            const result = this.doCalculation(this.operator, Number(this.currentNumber))
            this.currentNumber = String(result);
            this.firstOperand = result;
        }
        this.operator = op;
        this.waitForSecondNumber = true;

        // console.log("firstOperand :" + this.firstOperand);

    }

    public clear() {
        this.currentNumber = '0';
        this.firstOperand = '';
        this.operator = '';
        this.waitForSecondNumber = false;
    }
}
