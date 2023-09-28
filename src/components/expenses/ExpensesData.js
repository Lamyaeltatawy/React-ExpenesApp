import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <div className='expenses'>
      <div>
        <ExpenseFilter selected={filteredYear} onFilterYear={filterChangeHandler} />
      </div>
      <ExpenseItem expense={props.expenses[0]}
      />
      <ExpenseItem
        expense={props.expenses[1]}
      />
      <ExpenseItem
        expense={props.expenses[2]}
      />
    </div>
  )
}

export default Expenses;
