import React from "react";
import "./ChartBars.css";
import ChartBarDisplay from "./ChartBarDisplay";
import Cards from "../../UI/Cards";

const ChartBars = ({ yearlyMaxValue, chartBarsData }) => {
  console.log(
    "yearlMaxValue:",
    yearlyMaxValue,
    "chartBarsData:",
    chartBarsData
  );

  return (
    <div className="chartBars2">
      {chartBarsData.map((data) => {
        return (
          <ChartBarDisplay
            key={data.label}
            dataValue={data.value}
            maxValue={yearlyMaxValue}
            label={data.label}
          />
        );
      })}
    </div>
  );
};

export default ChartBars;
