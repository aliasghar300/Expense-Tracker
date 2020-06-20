import React , {useState , useContext} from "react";
import {GlobalContext} from "../globalState";

function AddTransaction() {
    
    const {addTransaction} = useContext(GlobalContext);

    let [text , setText] = useState();
    let [amount , setAmount] = useState();
    const onSubmit = e => {
        e.preventDefault();
        setText("");
        setAmount("");

        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: parseInt(amount),
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text" > Transaction Name:</label>
                        <input value={text} onChange={(t)=>setText(t.target.value)} type="text" placeholder="Transaction For..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"> Amount <br />
                        </label>
                        <input value={amount} onChange={(a)=>setAmount(a.target.value)} type="number" placeholder="Enter amount..." />
                    </div>
                     <label htmlFor="amount">
                            NOTE:<br /> 
                            Enter amount in NEGATIVE for EXPENSE <br />
                            Enter amount in POSITIVE for INCOME
                            
                        </label>                    
                    <button className="btn"> Submit </button>
                </form>
        </div>
    )
}

export default AddTransaction;