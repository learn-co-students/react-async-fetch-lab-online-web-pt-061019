// create your App component here
import React from 'react'

export default class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  // Nothing is actually rendering to the page....
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then((response) => {
      return response.json();
    })
    .then(({data}) => this.setState({peopleInSpace: data}));
     // .then(({people}) => this.setState({ peopleInSpace: people }))
  }

  // fetch('http://example.com/movies.json')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

  render() {
    return (
      <div>{this.state.peopleInSpace.map((person, id) => <p key={id}>{person.name}</p>)}</div>
    )
  }
}
