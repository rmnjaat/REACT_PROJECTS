import React,{useState} from 'react';



import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';



let Dummy_expense =[
    {
        id:'e1',
        title:'school fee',
        amount:250,
        date: new Date(2021,4,28)
    },
    {
        id:'e2',
        title:'books ',
        amount:50,
        date: new Date(2021,3,28)
    },
    {
        id:'e3',
        title:' fair',
        amount:30,
        date: new Date(2021,6,18)
    },
    {
        id:'e4',
        title:'GYM fee',
        amount:180,
        date: new Date(2021,7,21)
    },
];


function App() {


    const [expenses,setExpenses]=useState(Dummy_expense);

    const addExpenseHandler=(expense)=>{
        
        const updatedExpense=[expense,...expenses];
        setExpenses(updatedExpense); 
    }





    return(
     <div>

            <NewExpense onAddExpense={addExpenseHandler} /> 

            <Expenses item={expenses} />

       
        </div>
    );
    
}

export default App;