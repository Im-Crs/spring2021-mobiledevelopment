import React, {Component} from 'react'

class Squats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Squats: 0,
      SquatsCals: 0
    }
  }

  PlusSquats1 = () => {
    this.setState({ Squats: this.state.Squats + 1 });
    this.setState({ SquatsCals: this.state.SquatsCals + 0.48 });
  }
  PlusSquats5 = () => {
    this.setState({ Squats: this.state.Squats + 5 });
    this.setState({ SquatsCals: this.state.SquatsCals + 2.4 });
  }

  MinusSquats1 = () => {
    if(this.state.Squats > 0) {
      this.setState({ Squats: this.state.Squats - 1 });
      this.setState({ SquatsCals: this.state.SquatsCals - 0.48 });
    }
  }
  MinusSquats5 = () => {
    if(this.state.Squats < 5) {
      this.setState({ Squats: this.state.Squats = 0 });
      this.setState({ SquatsCals: this.state.SquatsCals = 0 });
    }
    else {
      this.setState({ Squats: this.state.Squats - 5 });
      this.setState({ SquatsCals: this.state.SquatsCals - 2.4 });
    }
  }
  ResetSquats = () => {
    this.setState({ Squats: this.state.Squats = 0 });
    this.setState({ SquatsCals: this.state.SquatsCals = 0 });
  }

  render(){
    return(
      <div>
        <h2 class="ExcersiceTitle"> Squats completed: {this.state.Squats} </h2>
        <h3 class="ExcersiceSubtitle"> Calories burned from this excersise: {this.state.SquatsCals.toFixed(2)}</h3>
        <button onClick={this.MinusSquats5}> -5 </button>
        <button onClick={this.MinusSquats1}> -1 </button>
        <button onClick={this.ResetSquats}> Reset </button>
        <button onClick={this.PlusSquats1}> +1 </button>
        <button onClick={this.PlusSquats5}> +5 </button>

      </div>
    );
  }
}

export default Squats;
