import React, {Component} from 'react'

class Pushups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Pushups: 0
    }
  }

  render(){
    return(
      <div>
        <h2> Pushups completed: {this.state.Pushups} </h2>
        <button onClick={() => this.setState({days: this.state.Pushups +1})}> Completed 1 squat: </button>
        <button onClick={() => this.setState({days: 0})}> Reset count </button>
      </div>
    );
  }
}

export default Pushups;
