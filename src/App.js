import React from 'react';
import './App.css';
import Header from "./components/header";
import Balance from './components/balance';
import IncomeExpense from './components/incomeExpense';
import TransactionList from './components/transaction-list';
import AddTransaction from './components/addingTransaction';

import {GlobalProvider} from "./globalState";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
