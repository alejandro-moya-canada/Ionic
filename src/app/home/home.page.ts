import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
/*
const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
*/
export class HomePage {

  totalExpenses = 0;

  constructor() {}

  addReason(event) {
    // obtengo los valores introducidos en los input
    let enteredReason = (<HTMLInputElement>document.getElementById("input-reason")).value;
    let enteredAmount = (<HTMLInputElement>document.getElementById("input-amount")).value;

    if( enteredReason.length <= 0 || enteredAmount.length <= 0 ) {
      return;
    }

    console.log(enteredReason);
    console.log(enteredAmount);

    // creo la lista donde imprimir los datos
    let newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    // capturo la lista y añado los valores
    let expensesList = document.getElementById("expenses-list");
    expensesList.appendChild(newItem);

    // introduzco el precio final que se va acumulando
    this.totalExpenses += +enteredAmount;
    let totalExpensesOutput = (<HTMLInputElement>document.getElementById("total-expenses"));
    let total = this.totalExpenses.toString();
    totalExpensesOutput.innerText = total + " $";

    this.clear();

  }

  clear() {
    // borro los valores de los input
    (<HTMLInputElement>document.getElementById("input-reason")).value = "";
    (<HTMLInputElement>document.getElementById("input-amount")).value = "";
  }

}
