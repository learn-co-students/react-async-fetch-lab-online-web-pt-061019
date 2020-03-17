import React, { Component } from 'react';

export class App extends Component {
  state = {
    peopleInSpace: [],
  };

  render() {
    return (
      <div>
        <h3>People in Space</h3>
        {this.state.peopleInSpace.map((person) => person.name).join(', ')}
        {/* li needs key= */}
      </div>
    );
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then((resp) => resp.json())
      .then((data) => {
        // debugger;
        this.setState({
          peopleInSpace: data.people,
        });
      });
  }
}

export default App;
