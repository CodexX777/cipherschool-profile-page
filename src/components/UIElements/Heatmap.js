import React from "react";
import "./Heatmap.css";




const Heatmap = () => {
  const data = [
    { date: "2022-01-01", value: 5 },
    { date: "2022-01-02", value: 10 },
    { date: "2022-01-03", value: 7 },
    // add more data here
  ];

  const startDate = new Date("2022-01-01");
  const endDate = new Date("2022-12-31");
  const containerWidth = 800;
  const cellSize = containerWidth / 365;

  const calculateCellPositionAndSize = (date) => {
    const timeDiff = date.getTime() - startDate.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);
    const x = dayDiff * cellSize;
    const y = 0;
    const width = cellSize;
    const height = cellSize;
    return { x, y, width, height };
  };

  return (
    <div className="heatmap">
      {data.map((dataPoint) => {
        const { date, value } = dataPoint;
        const cellPositionAndSize = calculateCellPositionAndSize(
          new Date(date)
        );
        return (
          <div
            className="heatmap-cell"
            key={date}
            style={{
              transform: `translate(${cellPositionAndSize.x}rem, ${cellPositionAndSize.y}rem)`,
              width: `${cellPositionAndSize.width}rem`,
              height: `${cellPositionAndSize.height}rem`,
              backgroundColor: `rgba(255, 0, 0, ${value / 10})`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Heatmap;
