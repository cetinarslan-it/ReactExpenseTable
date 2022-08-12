import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New PC",
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 750,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Inspection",
    amount: 50,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Laptop",
    amount: 800,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1 className='center'>Cetin's Expense Table</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
