import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import "bootstrap/dist/css/bootstrap.css";
import { data, lastUpdated } from "./data";

class App extends Component {
  state = {
    currentWeek: 1,
    weeks: data,
    churchUrl: "https://hongkong.hmcc.net/",
    smpUrl: "https://hongkong.hmcc.net/about/hmi/smp-2020/",
    videoUrl: "https://www.youtube.com/embed/NEjLYylp34U",
    bidUrl: "https://forms.gle/raGL9NbQ4GnjzRVv6",
    specialUrl: "https://forms.gle/H1AjhGXmVub31t9XA",
  };

  render() {
    return (
      <div className="container">
        <h1>Bidding Leaderboard</h1>
        <p>
          Hi! We're so glad that you want to help donate to support our Summer
          Missions Project to Thailand! By donating to help nominate one of our
          missions project members to do crazy and "fun" things, you'll be
          supporting our cause! For this week, we have 4 really fun activities:
        </p>
        <ul>
          {this.state.weeks[this.state.currentWeek - 1].activities.map(
            (activities, idx) => (
              <li key={idx}>{activities.activity}</li>
            )
          )}
        </ul>
        <p>
          You can click on the donation bid form below to bid on candidates! If
          you have a special request for <strong>any</strong> of the missions
          project candidates to complete, please click on the Special Bidding
          Form also below! Note that donations end 2 May 2020, Saturday 6:00 pm
          HKT and results will be announced 3 May 2020 during{" "}
          <a href={this.state.churchUrl}>Sunday Celebration</a>. Information
          about the missions project can be found at our{" "}
          <a href={this.state.smpUrl}>SMP 2020 page</a>. Happy Bidding!
        </p>
        <div className="row justify-content-center my-4">
          <div className="embed-responsive embed-responsive-16by9 col-lg-8">
            <iframe
              title="intro-video"
              className="embed-responsive-item"
              src={this.state.videoUrl}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="btn-group">
          <a
            href={this.state.bidUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bidding Form
          </a>
          <a
            href={this.state.specialUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Special Bidding Form
          </a>
        </div>
        <hr />
        <div className="alert alert-info" role="alert">
          This leaderboard was last updated {lastUpdated}.
        </div>
        <Leaderboard
          weeks={this.state.weeks.slice(0, this.state.currentWeek)}
        />
      </div>
    );
  }
}

export default App;
