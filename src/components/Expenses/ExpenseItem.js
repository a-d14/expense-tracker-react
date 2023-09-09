import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {

    // useState(initialValue)
    const [title, setTitle] = useState(props.title); // should only be called directly inside component functions. useState is not run when component is re-initialized.
    // pointer to the element in question, method to change value of the element

    const expenseDate = new Date(Date.now());
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.8; 

    const clickHandler = () => {
        setTitle("Updated!"); // the instance of component function (here, ExpenseItem) gets executed again.
    }

    // state separated by per component instance basis

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            {/* <div>{props.date.toISOString()}</div> */}
            <div className='expense-item__description'>
                {/* <h2>{props.title}</h2> */}
                {/*<h2>{title}</h2>*/}
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;