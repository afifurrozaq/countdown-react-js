import React,{Component} from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            deadline: 'October 28, 2017',
            newdeadline: ''
        }
    }

    changedeadline(){
       this.setState({deadline: this.state.newdeadline})
    }
    render(){
        return(
        <div className="App">
        <div className="App-tittle">Countdown to {this.state.deadline}</div>
        <div>
            <Clock deadline={this.state.deadline}/>
        </div>
        <div>
        <input placeholder="new date" onChange={event => this.setState({newdeadline: event.target.value})}/>
        <button onClick={() => this.changedeadline()}>Submit</button>
        </div>
        </div>
        )
    }
}

export default App;