//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [setQuarterUp, quarter] = useState(0)
  const [setQuarterDown, quarterDown] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button><br />
          <button className="homeButtons__touchdown">Change Down</button>
          <input className="input_down" placeholder="Down"></input><br />
          <button className="homeButtons__touchdown">Change To Go</button>
          <input className="input_down" placeholder="To Go"></input>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button><br />
          <button className="awayButtons__touchdown" >Change Ball On</button>
          <input className="ballOnInput" placeholder="Ball On" /><br />
          <button className="awayButtons__touchdown" onClick={() => setQuarterUp(quarter + 1)}>Quarter + 1</button>
          <button className="awayButtons__fieldGoal" onClick={() => setQuarterDown(quarterDown - 1)}>Quarter - 1</button>

        </div>
      </section>
    </div>
  );
}

export default App;
