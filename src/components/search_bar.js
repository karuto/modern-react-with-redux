import React, {Component} from 'react';

class SearchBar extends Component {
  // Constuctor is a special function in ES6 classes.
  // It's the first and only class called when an instance of this class is created.
  // It's reserved for doing setup work for the class.
  // super(props) calls the parent class (React.Component)'s constructor function.
  constructor(props) {
    super(props);
    // State is a plain JS object that used to record / react to user events.
    // You must init state object inside the constructor of a class-based React component.
    // Functional components in React thus do not have state.
    // You must create a new JS object and assign it to state, otherwise it doesn't work.
    this.state = {term: ''};
  }
  render() {
    // onChange is a native function in HTML, bind to input elements.
    // now because it is native to HTML, it is also a "protected property" for React components.
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(e) {
    // the first param, e, is the param from the native onChange event.
    console.log(e.target.value);
  }
}

export default SearchBar;
