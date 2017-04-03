import React, { Component } from 'react';

// create a function that will convert number into roman numerals

  function romanize (num) {
      if (!+num)
      //if not a number return false
          return false;
      else if (num < 100 && num > 0) {
        //turn the number into a string
        var digits = String(+num).split(""),
        //sets an array of values to build the solution roman numeral
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                   "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
        //builds the roman numeral by taking each digit of the input and getting the corresponding numeral
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
      }
      else{
        //will return this if the nujmber is not within range
      return "Please choose a number between 1-99";
      }

  }


class romanNumerals extends Component {
  constructor(props) {
   super(props);
   this.state = {value: '', numeral: 'Type in a number'};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(e){
   //set value to be the value in the field
  this.setState({value: e.target.value});
 }
 handleSubmit(e){
   //stops the page from refreshing
   e.preventDefault();
   //sets the answer to be the roman numeral
   this.setState({numeral: romanize(this.state.value)});
 }
//create a form field, a button and a output
  //display answer
  render(){
    return(
      <div>
      <p>Roman Numeral Generator</p>
      <form onSubmit={this.handleSubmit}>
      <input type="number" value={this.state.value} onChange={this.handleChange}></input>
      <input type="submit" value="Covert"></input>
      <p>{this.state.numeral}</p>
      </form>
      </div>
    );
  }
}

export default romanNumerals;
