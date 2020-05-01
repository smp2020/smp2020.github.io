import React, { Component } from "react";
import Week from "./Week";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        {this.props.weeks.map((week, idx) => (
          <Week
            key={idx}
            week={idx + 1}
            activities={week.activities}
            weekRange={week.weekRange}
          />
        ))}
      </div>
    );
  }
}

export default Leaderboard;
