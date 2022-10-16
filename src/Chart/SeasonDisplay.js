import React, { useState } from "react";
import styled from "styled-components";
import SeasonData from "../matches/Season.json";
import TeamData from "../matches/Team.json";
import PlayerData from "../matches/Player.json";
import PlayerMatchData from "../matches/Player_Match.json";
import MatchData from "../matches/Match.json";
import BallData from "../matches/Ball_by_Ball.json";
import BarChart from "./BarChart";
import LineChart from "./LineChart.js";
import PieChart from "./PieChart.js";
import PolarChart from "./PolarChart";
import DoughnutChart from "./DoughnutChart.js";
export default function SeasonDisplay() {
  // 1st chart data 
  const [userData, setUserData] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Orange Cap Winners",
        data: SeasonData.map((data) => data.Orange_Cap_Id),
        responsive: true,
        backgroundColor: ["Orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  //2nd chart Data
  const [userDatatwo, setUserDatatwo] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Orange Cap Winners",
        data: SeasonData.map((data) => data.Orange_Cap_Id),
        responsive: true,
        backgroundColor: ["Orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  //3rd Chart Data
  const [userDatathree, setUserDatathree] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Orange Cap Winners",
        data: SeasonData.map((data) => data.Orange_Cap_Id),
        responsive: true,
        backgroundColor: ["Orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // 4th Chart Data
  const [userDatafour, setUserDatafour] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Orange Cap Winners",
        data: SeasonData.map((data) => data.Orange_Cap_Id),
        responsive: true,
        backgroundColor: ["Orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // 5th Chart Data
  const [userDatafive, setUserDatafive] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Purple Cap Winners",
        data: SeasonData.map((data) => data.Purple_Cap_Id),
        responsive: true,
        backgroundColor: ["Purple"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // 6th Chart Display
  const [userDatasix, setUserDatasix] = useState({
    labels: TeamData.map((data) => data.Host_Country),
    datasets: [
      {
        label: "Average Runs Every Over",
        data: TeamData.map((data) => data.Team_Name_Id),

        backgroundColor: ["Purple"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  //7th Chart Display
  const [userDataseven, setUserDataseven] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Purple Cap Winners",
        data: SeasonData.map((data) => data.Purple_Cap_Id),
        responsive: true,
        backgroundColor: ["Purple"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // 8th Chart Display
  const [userDataeight, setUserDataeight] = useState({
    labels: TeamData.map((data) => data.Host_Country),
    datasets: [
      {
        label: "Average Runs Every Over",
        data: TeamData.map((data) => data.Team_Name_Id),

        backgroundColor: ["Purple"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <Container>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userDatatwo} />
      </div>
      <div style={{ width: 650 }}>
        <DoughnutChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <PolarChart chartData={userData} />
      </div>

      <div style={{ width: 650 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <DoughnutChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <LineChart chartData={userData} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  div {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 50px;
    flex-wrap: wrap;
    border-radius: 15px;
    box-shadow: inset 0 0 10px #000000;
    background: white;
  }
`;
