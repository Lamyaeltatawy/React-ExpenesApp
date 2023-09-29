import React, { useState } from 'react';
import './ExpenseItem.css';
// import NewExpense from '../NewExpense/NewExpense';
function ExpenseItem(props) {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  // let title = props.expense.title;
  // const [title, setTitle] = useState(props.title);
  // const changeTitle = () => {
  //   setTitle("updated!");
  //   console.log(title);
  // }

  return (
    <div>
      <div className='expense-item'>
        <div className='expense-date'>
          <div className='expense-date__month'>{month}</div>
          <div className='expense-date__year'>{year}</div>
          <div className='expense-date__day'>{day}</div>
        </div>
        <div className='expense-item__description'>
          <h2> {props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={changeTitle}>Change Title</button> */}
      </div>
    </div>
  )
}

export default ExpenseItem;
