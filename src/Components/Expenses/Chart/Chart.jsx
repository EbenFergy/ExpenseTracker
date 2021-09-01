import React from "react";
import ChartBars from "./ChartBars";
import "./Chart.css";

const Chart = ({ filteredItems }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  let yearlyMaxValue = 0;

  for (const item of filteredItems) {
    yearlyMaxValue += Math.round(item.amount);
    const eachMonth = item.date.getMonth();
    chartDataPoints[eachMonth].value = item.amount;
  }
//   console.log(yearlyMaxValue);
  return (
    <div className="chartCont">
      <ChartBars yearlyMaxValue={yearlyMaxValue} chartBarsData={chartDataPoints} />
    </div>
  );
};

export default Chart;
