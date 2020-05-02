import React, { Component } from "react";

class Activity extends Component {
  state = {
    leaderboard: this.appendInfo(
      this.props.leaderboard.sort((a, b) => (a.bid > b.bid ? -1 : 1))
    ),
    lgToClass: {
      "AYW": "table-primary",
      "CLOUT": "table-info",
      "EXTRA": "table-info",
      "FLEX": "table-warning",
      "FUSION": "table-danger",
      "J-walkers": "table-success",
      "OASIS": "table-info",
      "REAL": "table-primary",
      "SIGNAL": "table-warning",
    },
  };

  render() {
    return (
      <div className="col-lg-6 p-1">
        <div className="card">
          <h4 className="card-header">{this.props.activity}</h4>
          <div className="card-body table-responsive">
            <p>{this.props.description}</p>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>LG</th>
                  <th>Bid</th>
                  <th>Probability</th>
                </tr>
              </thead>
              <tbody>
                {this.state.leaderboard.map((row, idx) => (
                  <tr key={idx} className={this.state.lgToClass[row.lg]}>
                    <td>{row.rank}</td>
                    <td>{row.person}</td>
                    <td>{row.lg}</td>
                    <td>${row.bid}</td>
                    <td>{row.probability}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  appendInfo(leaderboard) {
    const nameToLg = {
      "Andrea Kurniasari": "CLOUT",
      "Angelica Intan": "REAL",
      "Anne Hu": "J-walkers",
      "Chelsea Friscella": "SIGNAL",
      "Grady Kusmulyadi": "J-walkers",
      "Helen Oh": "FLEX",
      "Iorwen Hans Leroy": "FUSION",
      "Jacky Lee": "AYW",
      "Jeremy Wong": "CLOUT",
      "Kelvin Lee": "CLOUT",
      "Kristian Suhartono": "AYW",
      "Lim Her Yun": "SIGNAL",
      "Malvin Kiman": "CLOUT",
      "Matthew Lau": "AYW",
      "Nadya Christina": "J-walkers",
      "Pastor Bo Zhu": "SIGNAL",
      "Peter Tseng": "FUSION",
      "Rainbow Lam": "AYW",
      "Rebecah Lin": "J-walkers",
      "Wayne Chan": "EXTRA",
      "Yuk Chak Lam": "AYW",
    };
    const totalBids = leaderboard.reduce((tot, i) => tot + i.bid, 0);
    let rank = 0;
    let prevBid;
    for (const idx in leaderboard) {
      const item = leaderboard[idx];
      const currBid = item.bid;
      if (currBid !== prevBid) rank++;
      prevBid = currBid;
      item.rank = rank;
      item.probability =
        totalBids !== 0 ? ((item.bid / totalBids) * 100).toFixed(2) : 0;
      item.lg = nameToLg[item.person];
    }
    return leaderboard;
  }
}

export default Activity;
