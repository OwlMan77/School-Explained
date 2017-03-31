import React, { Component } from 'react';

class romanNumerals extends Component {
//create a form field, a button and a output

//create a function that will convert number into roman numerals
  // romanize (num) {
  //     if (!+num)
  //         return false;
  //     else if (num < 100) {
  //       var digits = String(+num).split(""),
  //           key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  //                  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  //                  "","I","II","III","IV","V","VI","VII","VIII","IX"],
  //           roman = "",
  //           i = 3;
  //       while (i--)
  //           roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  //       return Array(+digits.join("") + 1).join("M") + roman;
  //     }
  //     else{
  //       console.log('over limit');
  //     }
  //
  // }
  //display answer
  render(){
    return(
      <div>
      <p>empty Div</p>
      </div>
    )
  }
}

export default romanNumerals;
