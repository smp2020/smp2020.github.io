import React, { Component } from "react";
import Activity from "./Activity";

class Week extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          Week {this.props.week} ({this.props.weekRange})
        </h3>
        <div className="row">
          {this.props.activities.map((activity, idx) => (
            <Activity
              key={idx}
              activity={activity.activity}
              description={activity.description}
              leaderboard={activity.leaderboard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Week;
