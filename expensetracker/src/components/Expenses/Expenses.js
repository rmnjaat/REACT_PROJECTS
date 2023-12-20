import "./Expenses.css";
import React from "react";

import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.item.map((expense) => (
                <Expenseitem
                    //passing data to expense Item
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    //title="shjdbfv"
                    amount={expense.amount}
                />
            ))}
        </Card>
    );
}

export default Expenses;
