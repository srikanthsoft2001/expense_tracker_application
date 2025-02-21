// write the boiler plate
import "./ExpenseDate.css";

function ExpenseDate(props) {
  let year = props.date.getFullYear();
  let month = props.date.toLocaleDateString("en-US", { month: "long" });
  let day = props.date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
