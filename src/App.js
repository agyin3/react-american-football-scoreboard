//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const handler = (amount, teamName) => {
    return teamName === 'Lions' ? setHomeScore(homeScore + amount) : setAwayScore(awayScore + amount);
  }

  const reset = () => {
    setHomeScore(0);
    setAwayScore(0);
  }
  
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
          <button className="homeButtons__touchdown" onClick={() => {handler(7, 'Lions')}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {handler(3, 'Lions')}}>Home Field Goal</button>
        </div>
        <div>
          <button className='reset' onClick={() => {reset()}}>Reset</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {handler(7, 'Tigers')}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {handler(3, 'Tigers')}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
