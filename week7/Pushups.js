import React, {Component} from 'react'

class pushups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pushups: 0
    }
  }

  render(){
    return(
      <div>
        <h2> Pushups completed: {this.state.pushups} </h2>
        <button onClick={() => this.setState({days: this.state.pushups +1})}> Completed 1 squat: </button>
        <button onClick={() => this.setState({days: 0})}> Reset count </button>
      </div>
    );
  }
}

export default Pushups;
