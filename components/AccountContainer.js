import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [ transactions, setTransactions ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(res => res.json())
    .then(data => setTransactions(data))
  }, [])

const filterTr = transactions.filter(transaction => {return transaction.category.toLowerCase().includes(search.toLowerCase())})

function onAddSubmit(newTransOb) {
  setTransactions([...transactions, newTransOb])
}

  return (
    <div>
      <Search setSearch={setSearch} search={search}/>
      <AddTransactionForm onAddSubmit={onAddSubmit}/>
      <TransactionsList transactions={filterTr}/>
    </div>
  );
}

export default AccountContainer;
