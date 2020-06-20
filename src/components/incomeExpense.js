import React , {useContext} from "react";
import {GlobalContext} from "../globalState";

function IncomeExpense (){
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  
  const income = amounts
  .filter(amount => amount>0)
  .reduce((acc,amount) => (acc+=amount),0) 
  .toFixed()
  .toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  const expense = amounts
  .filter(amount => amount<0)
  .reduce((acc,amount) => (acc+=amount),0) 
  .toFixed()
  .toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
 
  return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus"> Rs {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">Rs {expense}</p>
        </div>
      </div>
    )
}

export default IncomeExpense;