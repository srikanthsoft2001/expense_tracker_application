// import the component before using it
// import ExpenseItem from "./components/ExpenseItem.js";
import Expenses from "./components/Expenses/Expenses.js";

const App = () => {
  const expenses = [
    {
      id: 0,
      title: "Car Insurence",
      amount: 200,
      date: new Date(2022, 3, 22),
    },
    {
      id: 1,
      title: "school fees",
      amount: 230,
      date: new Date(2022, 3, 23),
    },
    {
      id: 2,
      title: "room rent",
      amount: 500,
      date: new Date(2022, 3, 24),
    },
    {
      id: 3,
      title: "tution fees",
      amount: 200,
      date: new Date(2022, 3, 25),
    },
  ];

  return (
    <div className="app-container">
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
