// import the component before using it
import ExpenseItem from "./components/ExpenseItem.js";

function App() {
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
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
      1
    </div>
  );
}

export default App;
