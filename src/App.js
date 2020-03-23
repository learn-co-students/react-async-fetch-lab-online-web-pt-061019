// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount(){
        const astros = fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({astronauts: people}))
    }

    render() {
        return (
            <div>
                {this.state.astronauts.map(a => <p key={a.name}>{a.name}</p>)}
            </div>
        )
    }
}
