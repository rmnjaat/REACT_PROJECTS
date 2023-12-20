import React,{useState} from "react";
import './ExpenseForm.css'

function ExpenseForm(props){

    const [enteredTitle,setenteredTitle]=useState("");
    const [enteredAmount,setenteredAmount]=useState("");
    const [enteredDate,setenteredDate]=useState("");

    const titleChaneHandler=(event)=>{
        setenteredTitle(event.target.value);      
    };
    
    const amountChaneHandler=(event)=>{
        setenteredAmount(event.target.value);   

    };
    const dateChaneHandler=(event)=>{
        setenteredDate(event.target.value);   
    };

    const submitHandler=(event)=>{
        event.preventDefault();


        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        setenteredTitle("");
        setenteredAmount("");
        setenteredDate("");
        // console.log(expenseData);


        props.onSaveExpenseData(expenseData);

    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expension__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChaneHandler}/>
                </div>

                <div className="new-expension__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChaneHandler} />
                </div>

                <div className="new-expension__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChaneHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type ="submit"> Add Expense </button>

            </div>
        </form>
    )

}

export default ExpenseForm