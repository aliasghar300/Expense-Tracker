import React , {useContext} from "react";
import {GlobalContext} from "../globalState";


function Transactions ({transactions}) {

    const {deleteTransaction} = useContext(GlobalContext);
    
    const sign = transactions.amount < 0 ? "-" : "+"

    const properAmount = Math.abs(transactions.amount).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return (
        <li className={transactions.amount < 0 ? "minus" : "plus" }>
        {transactions.text} <span> {sign} Rs {properAmount}</span><button onClick={()=> deleteTransaction(transactions.id)} 
         className="delete-btn">x</button>
    </li>  
    )
}

export default Transactions;