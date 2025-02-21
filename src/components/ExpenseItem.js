// write the boiler plate
// import the css
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>22 march 2020</div>
      <div className="expense-item__description">
        <div>expense</div>
        <div className="expense-item__price">$200</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
