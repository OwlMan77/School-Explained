import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

//do an API call to back end
function fetchJson(url) {
    return fetch(url)
    .then(request => request.text())
    .then(text => {
        console.log(JSON.parse(text));
    })
    .catch(error => {
        console.log(`ERROR: ${error.stack}`);
    });
}

const API = `http://localhost:8080/student-data`

//creates react Component
class dropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      subject: 0,
      description: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  handleChange(event) {
    this.setState({subject: event.target.value});
    console.log(event.target.value);
  }
//creates input dropdown for subjects
  render() {
    return (
      <div>
      <p>Select Selector:</p>
      <select value={this.state.value} onChange={this.handleChange}>
      <option value="test">Please select</option>
      <option value="1">Reading</option>
      <option value="2">Writing</option>
      <option value="3">Maths</option>
      </select>
      </div>
    );
  }
componentDidUpdate(){
  console.log('we are updating');
  fetchJson(`${API}/${this.state.subject}`)
}
}

export default dropdown;
