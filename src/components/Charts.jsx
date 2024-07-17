import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Charts = (props) => {


  console.log("props");
  console.log(props);
  
  const data = [
    {
      name: "Page A",
      Humidity: 4000,
      Co2: 2400,
      EC: 2400,
    },
    {
      name: "Page B",
      Humidity: 3000,
      Co2: 1398,
      EC: 2210,
    },
    {
      name: "Page C",
      Humidity: 2000,
      Co2: 9800,
      EC: 2290,
    },
    {
      name: "Page D",
      Humidity: 2780,
      Co2: 3908,
      EC: 2000,
    },
    {
      name: "Page E",
      Humidity: 1890,
      Co2: 4800,
      EC: 2181,
    },
    {
      name: "Page F",
      Humidity: 2390,
      Co2: 3800,
      EC: 2500,
    },
    {
      name: "Page G",
      Humidity: 3490,
      Co2: 4300,
      EC: 2100,
    },
  ];

  return (
    <div className="chart-container">
      <LineChart
        width={1200}
        height={700}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="amt" stroke="#005480" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        <Line type="monotone" dataKey="Co2" stroke="red" />
        <Line type="monotone" dataKey="EC" stroke="#005480" />
        <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" />
        
      </LineChart>
    </div>
  );
};

export default Charts;
