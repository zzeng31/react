import "./ExpensesFilter.css";
import { useState, useEffect } from "react";
const ExpensesFilter = (props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyTotal = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  const [totalAmount, setTotalAmount] = useState(0);
  const [percentages, setPercentages] = useState(monthlyTotal);
  // get the percentages to update when the expenses change
  useEffect(() => {
    renderFill(props.expenses);
  }, [props.expenses]);

  const [selectedYear, setSelectedYear] = useState("all");

  const renderFill = (filteredExpenses) => {
    setTotalAmount(
      filteredExpenses.reduce((acc, cur) => (acc += +cur.amount), 0)
    );
    filteredExpenses.forEach((expense) => {
      monthlyTotal[months[expense.date.getMonth()]] += +expense.amount;
      setPercentages(monthlyTotal);
    });
  };

  const selectHandler = (event) => {
    setPercentages(monthlyTotal);
    setSelectedYear(event.target.value);
    const filteredExpenses =
      event.target.value === "all"
        ? props.defaultExpenses
        : props.defaultExpenses.filter((expense) => {
            return expense?.date.getFullYear() === parseInt(event.target.value);
          });

    props.setExpenses(filteredExpenses);
    renderFill(filteredExpenses);
  };
  const renderBars = () => {
    return months.map((month, index) => {
      return (
        <div className="chart-bar__box" key={index}>
          <div className="chart-bar">
            <div
              className="chart-bar__fill"
              style={{
                height: `${
                  percentages[month] > 0
                    ? (percentages[month] / totalAmount) * 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
          <div className="chart-bar__label">{month}</div>
        </div>
      );
    });
  };
  return (
    <div className="expenses-filter">
      <div className="filter-header">
        <h3>Filter by year</h3>
        <select
          className="filter-options"
          onChange={selectHandler}
          value={selectedYear}
        >
          <option value="all">All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div className="filter-chart">{renderBars()}</div>
    </div>
  );
};
export default ExpensesFilter;
