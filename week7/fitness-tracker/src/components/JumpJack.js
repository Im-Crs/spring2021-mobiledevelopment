import React, {Component} from 'react'

class JumpJack extends Component {

  constructor(props) {
    super(props);
    this.state = {
      JumpJack: 0,
      JumpJackCals: 0
    }
  }

  PlusJumpJack1 = () => {
    this.setState({ JumpJack: this.state.JumpJack + 1 });
    this.setState({ JumpJackCals: this.state.JumpJackCals + 0.34 });
  }
  PlusJumpJack5 = () => {
    this.setState({ JumpJack: this.state.JumpJack + 5 });
    this.setState({ JumpJackCals: this.state.JumpJackCals + 1.7 });
  }

  MinusJumpJack1 = () => {
    if(this.state.JumpJack > 0) {
      this.setState({ JumpJack: this.state.JumpJack - 1 });
      this.setState({ JumpJackCals: this.state.JumpJackCals - 0.34 });
    }
  }
  MinusJumpJack5 = () => {
    if(this.state.JumpJack < 5) {
      this.setState({ JumpJack: this.state.JumpJack = 0 });
      this.setState({ JumpJackCals: this.state.JumpJackCals = 0 });
    }
    else {
      this.setState({ JumpJack: this.state.JumpJack - 5 });
      this.setState({ JumpJackCals: this.state.JumpJackCals - 1.7 });
    }
  }
  ResetJumpJack = () => {
    this.setState({ JumpJack: this.state.JumpJack = 0 });
    this.setState({ JumpJackCals: this.state.JumpJackCals = 0 });
  }

  render(){
    return(
      <div>
        <h2 class="ExcersiceTitle"> Jumping jacks completed: {this.state.JumpJack} </h2>
        <h3 class="ExcersiceSubtitle"> Calories burned from this excersise: {this.state.JumpJackCals.toFixed(2)}</h3>
        <button onClick={this.MinusJumpJack5}> -5 </button>
        <button onClick={this.MinusJumpJack1}> -1 </button>
        <button onClick={this.ResetJumpJack}> Reset </button>
        <button onClick={this.PlusJumpJack1}> +1 </button>
        <button onClick={this.PlusJumpJack5}> +5 </button>

      </div>
    );
  }
}

export default JumpJack;
