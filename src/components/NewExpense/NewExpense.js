import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [formDisplay, setFormDisplay] = useState(false);

    const showForm = () => {
        setFormDisplay(true);
    }

    const hideForm = () => {
        setFormDisplay(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }


    return (
        <div className='new-expense'>
            {/* for bottom-up communication */}
            {formDisplay && <ExpenseForm hideForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
            {!formDisplay && <button onClick={showForm}>Add New Expense</button>}
        </div>
    )
};

export default NewExpense;