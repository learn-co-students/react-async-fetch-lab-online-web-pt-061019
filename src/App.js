// create your App component here
import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      people: ""
    }
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(people => {
      console.log(people)
      this.setState({
        people: people
      })
    })
  }

  // displayPeople = () => {
  //   return this.state.people.map(person => {
  //     console.log(person.name)
  //     return person.name
  //   })
  // }

  render() {
    return (
      <div>
        {/* {this.displayPeople()} */}
      </div>
    );
  }
}

export default App;
