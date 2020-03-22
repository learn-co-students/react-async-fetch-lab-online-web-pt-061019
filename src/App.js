// create your App component here
import React, {PureComponent} from 'react';

export default class App extends PureComponent{
    state = {
        pplInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    pplInSpace: data.people
                })
            })
    }

    render(){
        return(
            <div>
                <h1>People in Space</h1>
                {this.state.pplInSpace.map(p => <li>{p.name}</li>)}
            </div>
        )
    }
}
