// create your App component here
import React from 'react';

class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people.map(people => people.name).join(', ')
        })
      })
  }

  render() {
    return(
      <div>
        People In Space:
        <br />
        {this.state.peopleInSpace}
      </div>
    )
  }
}

export default App;
