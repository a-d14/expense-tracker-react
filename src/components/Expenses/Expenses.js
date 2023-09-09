import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [chosenYear, setChosenYear] = useState('2020');

    const yearChangeHandler = (year) => {
        setChosenYear(year);
    }

    const filteredItems = props.items.filter((item) => {
        return item.date.getFullYear().toString() === chosenYear;
    });

    

    return(
        <div>
            <Card className='expenses'>
            {
                /* 
                EXPENSES FILTER IS A CONTROLLED COMPONENT
                CONTROLLED COMPONENT: THE VALUE PRODUCED BY THE COMPONENT IS NOT
                CONTROLLED BY THE COMPONENT ITSELF, BUT BY ITS PARENT COMPONENT.
                */
            }
            <ExpensesFilter selectedYear={chosenYear} onYearChange = {yearChangeHandler} />
            
            { /* Id needed so react knows where to add new element, instead of adding element to the end and updating all items */ }

            <ExpensesChart expenses={filteredItems} />
            <ExpensesList items={filteredItems} />
            
            { /* <ExpenseItem
            id={props.items[0].id}
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date} />
            <ExpenseItem
            id={props.items[1].id}
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date} />
            <ExpenseItem
            id={props.items[2].id}
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date} />
            <ExpenseItem
            id={props.items[3].id}
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date} /> */}
        </Card>
        </div>
    );

}

export default Expenses;