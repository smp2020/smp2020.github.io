import React, { Component } from 'react';
import Week from './week';

class Leaderboard extends Component {
  render() {
    return (
      <div>
        {
          this.props.weeks.map((week, idx) =>
            <Week key={ idx } week={ idx+1 } activities={ week }/>
          )
        }
      </div>
    );
  }
}

export default Leaderboard;
