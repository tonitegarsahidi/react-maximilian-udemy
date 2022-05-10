import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
    const [selectedYear, setYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        console.log("in Expenses.js");
        setYear(selectedYear);
    }

    const filteredExpenses = props.data.filter(expenses => {
        return expenses.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selectedYear={selectedYear} 
                    onFilterChange={filterChangeHandler} />
                {filteredExpenses.length === 0 ? <p style={{color:'white'}}>No Expenses Found</p> : (
                 filteredExpenses.map((item) => {
                    return <ExpenseItem 
                                key={item.id}
                                title={item.title} 
                                amount={item.amount} 
                                date={item.date} /> 
                }))
                }

            </Card>
        </div> 
    )
}

export default Expenses;