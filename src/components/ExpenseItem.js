// write the boiler plate
// import the css
import "./ExpenseItem.css";

function ExpenseItem(props) {
  let year = props.date.getFullYear();
  let month = props.date.toLocaleDateString("en-US", { month: "long" });
  let day = props.date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    // here it is will add to all the items by default
    // to make unique values to all the components use variable
    // creating and using here is not correct way as it is used in app.js we create there and add them
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <div>{props.title}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
