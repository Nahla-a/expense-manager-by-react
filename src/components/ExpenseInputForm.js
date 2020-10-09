import React from 'react';
import { InputBox } from './InputBox';

export function ExpenseInputForm() {
    return (
        <div>
            <InputBox label="Expense Date" type="date" />
            <InputBox label="Description" type="text"/>
            <InputBox label="Amount" type="number"/>
            <InputBox label="Place" type="text"/>





        </div>
    )

}

