import React, { Component } from 'react';
import './App.css';



const API = `http://localhost:8080/student-data`
//creates react Component
class dropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      subject: 0,
      description: [],
      //way out the infinite loop caused during componentDidUpdate
      haltTheLoop: 'no'
    };
    //sets 'this' to be dropdown for all of these functions
    this.handleChange       = this.handleChange.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.fetchJson          = this.fetchJson.bind(this);
    this.render             = this.render.bind(this);
  }

//when the form changes subject becomes the seleted value and the go ahead has been set for the API
  handleChange(event) {
    this.setState({subject: event.target.value});
    this.setState({haltTheLoop:'no'})
  }

  //do an API call to back end and set description to be the result's content field
  fetchJson(url) {
      return fetch(url)
      .then(request => request.text())
      .then(text => {
        const resultString = JSON.parse(text);
        const resultObject = JSON.parse(resultString);
        this.setState({description: resultObject['content']});
      })
      .catch(error => {
          console.log(`ERROR: ${error.stack}`);
      });
    }
//creates input dropdown for subjects
    render() {
    const stater         = this.state;

    //if 0 it should tell user to choose a subject if they have then the content is rendered
    let listItems = null;
    if(stater.subject === "0"){
      listItems = <li id='choose'>
      <p>Please choose A Subject</p>
      </li>
    }
    listItems = stater.description.map(function(item) {
			return (
				<li key={item.contentid}>
					<p>{item.contentTitle}</p>
				</li>
			);
		});
    //renders the Component
    return (
      <div>
      <p>Subject Selector:</p>
      <select id="subjectsPicker" value={stater.value} onChange={this.handleChange}>
      <option value="0">Please select a subject</option>
      <option value="1">Reading</option>
      <option value="2">Writing</option>
      <option value="3">Maths</option>
      </select>
      <ul>
      {listItems}
      </ul>
      </div>

    );
  }

//will only make the api call when the form changes
  componentDidUpdate(){
  if(this.state.haltTheLoop === 'no'){
    this.fetchJson(`${API}/${this.state.subject}`);
    this.setState({haltTheLoop: 'yes'})
  }
  }
}

export default dropdown;
