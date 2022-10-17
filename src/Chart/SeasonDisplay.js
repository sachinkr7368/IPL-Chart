import React, { useState } from "react";
import styled from "styled-components";
import SeasonData from "../matches/Season.json";
import TeamData from "../matches/Team.json";
import MatchesData from "../Data/matches.json";
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
  let batCount = 0;
  if (MatchesData.length !== 0) {
    MatchData.forEach((data) => {
      if (data.Toss_Decision === "bat") {
        batCount++;
      }
    });
  }
  const [userData, setUserData] = useState({
    labels: ["Batting", "Fielding"],
    datasets: [
      {
        label: "Batting/Fielding Decision",
        data: [batCount, MatchData.length - batCount],
        responsive: true,
        backgroundColor: ["Blue", "green"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  //2nd chart Data
  var srh = 0,
    kkr = 0,
    rcb = 0,
    csk = 0,
    kxip = 0,
    rr = 0,
    dd = 0,
    mi = 0,
    dc = 0,
    ktk = 0,
    pw = 0,
    gl = 0,
    rps = 0;
  if (MatchesData.length !== 0) {
    MatchesData.forEach((data) => {
      if (data.winner === "Sunrisers Hyderabad") {
        srh++;
      } else if (data.toss_winner === "Kolkata Knight Riders") {
        kkr++;
      } else if (data.toss_winner === "Royal Challengers Bangalore") {
        rcb++;
      } else if (data.toss_winner === "Sunrisers Hyderabad") {
        csk++;
      } else if (data.toss_winner === "Kings XI Punjab") {
        kxip++;
      } else if (data.toss_winner === "Rajasthan Royals") {
        rr++;
      } else if (data.toss_winner === "Delhi Daredevils") {
        dd++;
      } else if (data.toss_winnerr === "Mumbai Indians") {
        mi++;
      } else if (data.toss_winner === "Delhi Capitals") {
        dc++;
      } else if (data.toss_winner === "Karnataka Team") {
        ktk++;
      } else if (data.toss_winner === "Pune Warriors") {
        pw++;
      } else if (data.toss_winner === "Gujarat Lions") {
        gl++;
      } else if (data.toss_winner === "Rising Pune Supergiant") {
        rps++;
      }
    });
  }
  const [userDatatwo, setUserDatatwo] = useState({
    labels: TeamData.map((data) => data.Team_Short_Code),
    datasets: [
      {
        label: "Toss Won By Teams",
        data: [srh, kkr, rcb, csk, kxip, rr, dd, mi, dc, ktk, pw, gl, rps],
        responsive: true,
        backgroundColor: [
          "orange",
          "purple",
          "red",
          "yellow",
          "lightred",
          "pink",
          "blue",
          "skycolor",
          "darkblue",
          "white",
          "green",
          "cyan",
          "grey",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  //3rd Chart Data
  if (MatchesData.length !== 0) {
    MatchesData.forEach((data) => {
      if (data.winner === "Sunrisers Hyderabad") {
        srh++;
      } else if (data.winner === "Kolkata Knight Riders") {
        kkr++;
      } else if (data.winner === "Royal Challengers Bangalore") {
        rcb++;
      } else if (data.winner === "Sunrisers Hyderabad") {
        csk++;
      } else if (data.winner === "Kings XI Punjab") {
        kxip++;
      } else if (data.winner === "Rajasthan Royals") {
        rr++;
      } else if (data.winner === "Delhi Daredevils") {
        dd++;
      } else if (data.winner === "Mumbai Indians") {
        mi++;
      } else if (data.winner === "Delhi Capitals") {
        dc++;
      } else if (data.winner === "Karnataka Team") {
        ktk++;
      } else if (data.winner === "Pune Warriors") {
        pw++;
      } else if (data.winner === "Gujarat Lions") {
        gl++;
      } else if (data.winner === "Rising Pune Supergiant") {
        rps++;
      }
    });
  }
  const [userDatathree, setUserDatathree] = useState({
    labels: TeamData.map((data) => data.Team_Short_Code),
    datasets: [
      {
        label: "Mathes Won by Team",
        data: [srh, kkr, rcb, csk, kxip, rr, dd, mi, dc, ktk, pw, gl, rps],
        responsive: true,
        backgroundColor: [
          "orange",
          "purple",
          "red",
          "yellow",
          "violet",
          "pink",
          "blue",
          "skycolor",
          "darkblue",
          "white",
          "green",
          "cyan",
          "grey",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // 4th Chart Data
  var kol = 0,
    del = 0,
    pune = 0,
    mum = 0,
    hyd = 0,
    chd = 0,
    raj = 0,
    ban = 0,
    ind = 0;
  if (MatchesData.length !== 0) {
    MatchesData.forEach((data) => {
      if (data.city === "Kolkata") {
        kol++;
      } else if (data.city === "Delhi") {
        del++;
      } else if (data.city === "Pune") {
        pune++;
      } else if (data.city === "Mumbai") {
        mum++;
      } else if (data.city === "Hyderabad") {
        hyd++;
      } else if (data.city === "Chandigarh") {
        chd++;
      } else if (data.city === "Rajkot") {
        raj++;
      } else if (data.city === "Bangalore") {
        ban++;
      } else if (data.city === "Indore") {
        ind++;
      }
    });
  }
  const [userDatafour, setUserDatafour] = useState({
    labels: [
      "Kolkata",
      "Delhi",
      "Pune",
      "Mumbai",
      "Hyderabad",
      "Chandigarh",
      "Rajkot",
      "Bangalore",
      "Indore",
  ],
    datasets: [
      {
        label: "Match played City Wise",
        data: [kol, del, pune, mum, hyd, chd, raj, ban, ind],
        responsive: true,
        backgroundColor: [
          "yellow",
          "red",
          "pink",
          "blue",
          "skycolor",
          "darkblue",
          "white",
          "green",
        ],
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
  //7th Average runs every over

  const [userDataseven, setUserDataseven] = useState({
    labels: SeasonData.map((data) => data.Season_Year),
    datasets: [
      {
        label: "Average Runs Every Over",
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
      <div style={{ width: 650 }}>
        <p>Batting/Fielding Decision </p>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 650 }}>
        <p>Toss Won by Team</p>
        <BarChart chartData={userDatatwo} />
      </div>
      <div style={{ width: 650 }}>
        <p>Match Won by Team</p>
        <DoughnutChart chartData={userDatathree} />
      </div>
      <div style={{ width: 650 }}>
        <p>Match Played in these Cities</p>
        <PieChart chartData={userDatafour} />
      </div>

      <div style={{ width: 650 }}>
        <PieChart chartData={userDatafive} />
      </div>
      <div style={{ width: 650 }}>
        <DoughnutChart chartData={userDatasix} />
      </div>
      <div style={{ width: 650 }}>
        <LineChart chartData={userDataseven} />
      </div>
      <div style={{ width: 650 }}>
        <LineChart chartData={userDataeight} />
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
    p {
      display: flex;
      margin: auto;
      padding: auto;
      font-size: 25px;
    }
  }
`;
