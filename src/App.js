import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  /* 
  CONCEPT : LIFTING STATE UP
  WE CANNOT PASS DATA DIRECTLY BETWEEN SIBLING COMPONENTS. IN THIS CASE, NewExpense
  AND Expenses. HENCE, WE NEED TO UTILIZE THEIR COMMON PARENT TO PASS DATA IN THIS 
  CASE App.js. SO WE LIFE THE STATE UP TO THE PARENT.
  */

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
