import React from "react";
import { Bar } from "react-chartjs-2";

export const Graph = ({ graphData }: any) => {
  const lab = graphData.data.map((dat: any) => dat.name);
  const values = graphData.data.map((dat: any) => dat.value);

  const data = {
    labels: lab,
    datasets: [
      {
        label: graphData.title,
        data: values,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        width: "400",
        height: "400",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="h-1/2">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};
