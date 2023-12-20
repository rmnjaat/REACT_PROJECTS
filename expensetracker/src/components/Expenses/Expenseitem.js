import React , {useState}from 'react';


import './Expenseitem.css';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

//props , for eg 

//those value passed in app.ja to expenseitem are now property of (props)
function Expenseitem(props){

 
    


    return (
    
        <Card  className="expense-item">
        
        <ExpenseDate date={props.date}/>

        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <h2 className="expense-item__price">{props.amount} $</h2>
        </div>


    </Card>
    )
}

export default Expenseitem;