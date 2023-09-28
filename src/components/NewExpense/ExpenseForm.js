import React, { useState } from 'react'
import './NewExpense.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');


    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value);

    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            onChange={TitleChangeHandler}
                            value={enteredTitle} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            onChange={amountHandler}
                            value={enteredAmount}
                            type='number'
                            min="0.01"
                            step="0.01" />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input
                            onChange={dateHandler}
                            value={enteredDate}
                            type='date'
                            min="2019-01-01"
                            max="25/9/2023" />
                    </div>

                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
