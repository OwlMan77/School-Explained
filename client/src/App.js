import React, { Component } from 'react';
import './App.css';



const API = `http://localhost:8080/student-data`
//creates react Component
class dropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      subject: 0,
      description: []
    };
    this.handleChange       = this.handleChange.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.fetchJson          = this.fetchJson.bind();
  }

  handleChange(event) {
    this.setState({subject: event.target.value});
  }

//do an API call to back end
  fetchJson(url) {
      return fetch(url)
      .then(request => request.text())
      .then(text => {
        const resultString = JSON.parse(text);
        const resultObject = JSON.parse(resultString);
      console.log(resultObject['content']);
      })
      .catch(error => {
          console.log(`ERROR: ${error.stack}`);
      });
  }
//creates input dropdown for subjects
  render() {
    return (
      <div>
      <p>Select Selector:</p>
      <select id="subjectsPicker" value={this.state.value} onChange={this.handleChange}>
      <option value="test">Please select</option>
      <option value="1">Reading</option>
      <option value="2">Writing</option>
      <option value="3">Maths</option>
      </select>
      </div>
    );
  }
componentDidUpdate(prevState){
  const subjectsPicker = document.getElementById('subjectsPicker');
  console.log(subjectsPicker);
  if(prevState.subject !== this.state.subject){
    this.fetchJson(`${API}/${this.state.subject}`);}
}
}

export default dropdown;
