import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = props => {
    let content;

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    } else {
        return (
            props.items.map((expense) => {
                return (
                    <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
                )
            })
        );
    }
}

export default ExpensesList;
