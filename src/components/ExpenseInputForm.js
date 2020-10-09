import React, { useState } from 'react';
import { formatDate } from '../utils';
import { InputBox } from './InputBox';

export function ExpenseInputForm() {
  const [expenseDate, setExpenseDate] = useState(formatDate())
  const [expenseDescription, setExpenseDescription] = useState("")
  const [expenseAmount, setExpenseAmount] = useState(0)
  const [expensePlace, setExpensePlace] = useState("")
  function onAddExpenseBtnClick(){
      if(expenseDescription ==""){
          alert("plz fill in the description field");
      } else if(expenseAmount <=0){
          alert("amount should be greater than 0");
      } else if(expensePlace ==""){
          alert("plz enter the place");
      }
  }
  
    return (
        <div>
            <InputBox label="Expense Date" type="date" value={expenseDate} onChange={(evt)=>{setExpenseDate(evt.target.value)}} />
            <InputBox label="Description" type="text" value={expenseDescription} onChange={(evt)=>{setExpenseDescription(evt.target.value)}}/>
            <InputBox label="Amount" type="number" value={expenseAmount} onChange={(evt)=>{setExpenseAmount(evt.target.value)}}/>
            <InputBox label="Place" type="text" value={expensePlace} onChange={(evt)=>{setExpensePlace(evt.target.value)}}/>
            <button onClick= {onAddExpenseBtnClick}> Add Expense </button>
            

            





        </div>
    )

}

