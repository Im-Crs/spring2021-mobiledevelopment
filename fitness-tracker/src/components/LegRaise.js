import React, {Component} from 'react'

class LegRaise extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LegRaise: 0,
      LegRaiseCals: 0
    }
  }

  PlusLegRaise1 = () => {
    this.setState({ LegRaise: this.state.LegRaise + 1 });
    this.setState({ LegRaiseCals: this.state.LegRaiseCals + 0.52 });
  }
  PlusLegRaise5 = () => {
    this.setState({ LegRaise: this.state.LegRaise + 5 });
    this.setState({ LegRaiseCals: this.state.LegRaiseCals + 2.6 });
  }

  MinusLegRaise1 = () => {
    if(this.state.LegRaise > 0) {
      this.setState({ LegRaise: this.state.LegRaise - 1 });
      this.setState({ LegRaiseCals: this.state.LegRaiseCals - 0.52 });
    }
  }
  MinusLegRaise5 = () => {
    if(this.state.LegRaise < 5) {
      this.setState({ LegRaise: this.state.LegRaise = 0 });
      this.setState({ LegRaiseCals: this.state.LegRaiseCals = 0 });
    }
    else {
      this.setState({ LegRaise: this.state.LegRaise - 5 });
      this.setState({ LegRaiseCals: this.state.LegRaiseCals - 2.6 });
    }
  }
  ResetLegRaise = () => {
    this.setState({ LegRaise: this.state.LegRaise = 0 });
    this.setState({ LegRaiseCals: this.state.LegRaiseCals = 0 });
  }

  render(){
    return(
      <div>
        <h2 class="ExcersiceTitle"> Leg raises completed: {this.state.LegRaise} </h2>
        <h3 class="ExcersiceSubtitle"> Calories burned from this excersise: {this.state.LegRaiseCals.toFixed(2)}</h3>
        <button onClick={this.MinusLegRaise5}> -5 </button>
        <button onClick={this.MinusLegRaise1}> -1 </button>
        <button onClick={this.ResetLegRaise}> Reset </button>
        <button onClick={this.PlusLegRaise1}> +1 </button>
        <button onClick={this.PlusLegRaise5}> +5 </button>

      </div>
    );
  }
}

export default LegRaise;
