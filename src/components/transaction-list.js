import React , {useContext} from "react";
import {GlobalContext} from "../globalState";
import Transactions from "./transactions";


function TransactionList(){
    
      const {transactions} = useContext(GlobalContext);     
   

    return (
        <div>
        <h3>History</h3>
            <ul className="list">
                {transactions.map(transactions  => (
                    <Transactions key={transactions.id} transactions={transactions}> </Transactions>
                ))}
              </ul>
        </div>
    )
}

export default TransactionList;