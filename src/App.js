import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import axios from 'axios';
import ShowDistance from './ShowDistance'
import {Link} from 'react-router-dom'

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      uid: '',
      date: '',
      startTime: '',
      endTime: '',
      distance : ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

    onSubmit = async (e) =>{
      e.preventDefault();
      const newData = {
        uid : this.state.uid,
        date : this.state.date,
        startTime : this.state.startTime,
        endTime : this.state.endTime,
        distance : this.state.distance
      }

    const response = await axios.post(`http://localhost:5000/api/v1/user`, {
        uid : newData.uid,
        date : newData.date,
        startTime : newData.startTime,
        endTime : newData.endTime,
        distance : newData.distance
    })
      .then((result) => {
        console.log(result);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  render() {
    const style = { marginTop: '5rem', textAlign: 'center' }
    return (
      <Router>
        <div >
          <form onSubmit = {this.onSubmit}>
            <div className="container" style={style}>

              <label htmlFor="uid"><b>Uid</b></label>
              <input type="text" placeholder="Enter Unique ID" value = {this.state.uid} name="uid" onChange = {this.onChange} id="uid" required />
              <br />
              <label htmlFor="date"><b>Date</b></label>
              <input type="date" placeholder="Date" value = {this.state.date} name="date" id="dt" onChange = {this.onChange} required />
              <br />
              <label htmlFor="time"><b>Start Time</b></label>
              <input type="text" placeholder="Time"name="starttime" id="starttime" onChange = {this.onChange} required />
              <br />
              <label htmlFor="time"><b>End Time</b></label>
              <input type="text" placeholder="Time" name="endtime" id="endtime" onChange = {this.onChange} required />
              <br />
              <input type="text" placeholder="Distance" value = {this.state.distance} name="distance" id="distance" onChange = {this.onChange} required />
              <br />
              <button type="submit" className="registerbtn">Submit</button>
            </div>
          </form>
        </div>
          <Route exact = "/getDistance" component = {ShowDistance}></Route>
          <Link to  = '/getDistance'> Get Total Distance</Link>
      </Router>
    );
  }
}

export default App;
