import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2021, 2, 28);
    const expenseAmount = 294.87;
    const expenseTitle = "Car Insurance 1";


    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;