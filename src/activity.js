import React, { Component } from 'react';

class Activity extends Component {
  state = {
    leaderboard: this.appendInfo(this.props.leaderboard.sort((a, b) =>
      a.bid > b.bid ? -1 : 1
    ))
  };

  render() {
    return (
      <div className="col-md-6 p-1">
        <div className="card">
          <h4 className="card-header">{ this.props.activity }</h4>
          <div className="card-body">
            <p>{ this.props.description }</p>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Ranking</th>
                  <th>Name</th>
                  <th>Bid</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.leaderboard.map((row, idx) =>
                    <tr key={ idx }>
                      <td>{ row.ranking }</td>
                      <td>{ row.person }</td>
                      <td>${ row.bid }</td>
                      <td>{ row.percentage }%</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  appendInfo(leaderboard) {
    const totalBids = leaderboard.reduce((tot, i) => tot + i.bid, 0);
    let rank = 0;
    let prevBid;
    for (const idx in leaderboard) {
      const item = leaderboard[idx];
      const currBid = item.bid;
      if (currBid !== prevBid) rank++;
      prevBid = currBid;
      item.ranking = rank;
      item.percentage = totalBids !== 0
        ? (item.bid / totalBids * 100).toFixed(2) : 0;
    }
    return leaderboard;
  }
}

export default Activity;
