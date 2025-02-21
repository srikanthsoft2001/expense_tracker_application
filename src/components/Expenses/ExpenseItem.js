// write the boiler plate
// import the css
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  // const [newTitle, setNewTitle] = useState("");
  // const [title, setTitle] = useState(props.title);

  // const changeHandler = (event) => {
  //   setNewTitle(event.target.value);
  // };

  // const clickHandler = () => {
  //   setTitle(newTitle);
  //   // alert("clicked!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>{props.title}</div>
        <div className="expense-item__price">${props.amount}</div>
        {/* <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
