import React, {useReducer, createContext}  from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer , initialState);

    function deleteTransaction(id) {
        dispatch ({
            type: "Delete_Transaction",
            payload: id
        })
    }
    function addTransaction(transactions) {
        dispatch ({
            type: "Add_Transaction",
            payload: transactions
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}