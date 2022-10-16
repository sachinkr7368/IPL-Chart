import React,{useState, useEffect} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Overview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const matches = require("../Data/matches.json");
    setData(matches);
  }, []);
  console.log(data);
  return (
    <>
      {data.map((item, index) => (
        <>
          <h1>
            {item.season === 2017
              ? item.city === "Hyderabad"
                ? item.winner
                : null
              : ""}
          </h1>
        </>
      ))}
    </>
  );
};

export default Overview;
