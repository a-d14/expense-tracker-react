import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState('');

    /*
    we using string instead of number and date because when 
    onChange is triggered, and we access the value of the input
    using event.target.value, it will always be of type string
    */

    /* 
    instead of using three different states, we can use one single 
    state and update it. 

    CREATING THE STATE:
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    UPDATING THE STATE:
    While updating, we need to update all the keys in the state as react
    overrites the state with the new one.

    setUserInput({
        ...userInput,
        enteredTitle: event.target.value
    });

    BETTER UPDATION:
    The problem with the above method is since the new state depends on the 
    previous state, if there are multiple state changes the new state might
    get an outdated previous state. This happens due to the fact that react
    does not execute state changes instantly but schedules it. To make sure
    the new state always gets an up to date previous state, the following 
    method must be used - 

    setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value};
    });

    */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // const inputChangeHandler = (identifier, value) => {
    //     if( identifier === 'title' ) {
    //         setEnteredTitle(value);
    //     } else if( identifier === 'date' ) {
    //         setEnteredAmount(value);
    //     } else {
    //         setEnteredDate(value);
    //     }
    // }

    /* 
    To use the above function with onChange, since we cannot pass
    an argument, we can wrap it in an anonymous function like so -
    onChange = (event) => inputChangeHandler('title', event.target.value)
    */

    const submitHandler = (event) => {
        event.preventDefault();

        props.hideForm();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData); // chile component communicating up to the parent component
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}> {/* When a button with type submit is pressed, the entire form emits an onSubmit event */}
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} /> {/* fires listener for every key stroke */}
                    {/* value attribute is used to enable two-way binding */}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler}/> 
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.hideForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;