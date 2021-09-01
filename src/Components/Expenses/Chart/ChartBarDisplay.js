import React from "react";
import "./ChartBarDisplay.css";

const ChartBarDisplay = ({ dataValue, maxValue, label }) => {
  let fillHeights = "0%";

  //   console.log(dataValue)
  if (maxValue > 0) {
    fillHeights = Math.round((dataValue / maxValue) * 100) + "%";
  }
  return (
    <div className="chartBars">
      <div className="chartBarInner">
        <div
          className="chartBarInner__heightFill"
          style={{ height: fillHeights }}
        ></div>
      </div>
      <div className="chartBar___label">{label}</div>
    </div>
  );
};

export default ChartBarDisplay;
