import React , {useContext} from "react";
import {GlobalContext} from "../globalState";

function Balance(){
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc +=  item),0).toFixed().toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    

    return (
        <div>
            <h4 className="balance"> Your Balance is </h4>
            <h1> Rs: {total}/= </h1>
        </div>
    )
}


export default Balance;