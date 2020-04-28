import React, { Component } from 'react';
import Leaderboard from './leaderboard';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data';

class App extends Component {
  state = {
    lastUpdated: '27 April 2020, 11:00 pm HKT',
    currentWeek: 1,
    weeks: data,
    videoUrl: 'https://www.youtube.com/embed/fFeg59qf6hU',
    bidUrl: 'https://forms.gle/raGL9NbQ4GnjzRVv6',
    specialUrl: 'https://forms.gle/H1AjhGXmVub31t9XA',
  }

  render() {
    return (
      <div className="container">
        <h1>Bidding Leaderboard</h1>
        <p>This page is to keep track of bids and place bids for each activity.</p>
        <div className="row justify-content-center">
          <div className="embed-responsive embed-responsive-16by9 col-lg-6">
            <iframe title="intro-video" className="embed-responsive-item" src={ this.state.videoUrl } allowFullScreen></iframe>
          </div>
        </div>
        <p>This was last updated { this.state.lastUpdated }.</p>
        <Leaderboard weeks={ this.state.weeks.slice(0, this.state.currentWeek) }/>
      <h2>Bidding Form</h2>
      <p>This should be the embed of the bidding form.</p>
      <a href={ this.state.bidUrl } className="btn btn-primary" target="_blank">Bidding Form</a>
      <h2>Special Bidding Form</h2>
      <p>This should be the embed of the special bidding form.</p>
      <a href={ this.state.specialUrl } className="btn btn-primary" target="_blank">Special Bidding Form</a>
      </div>
    );
  }
}

export default App;

//         <div className="text-center">
//             <img src="missions.jpg" className="w-50 rounded" alt="Missions photo."></img>
//         </div>
