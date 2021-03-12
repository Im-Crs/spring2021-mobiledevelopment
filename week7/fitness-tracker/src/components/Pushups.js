import React, {Component} from 'react'

class Pushups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Pushups: 0,
      PushupsCals: 0
    }
  }

  PlusPushups1 = () => {
    this.setState({ Pushups: this.state.Pushups + 1 });
    this.setState({ PushupsCals: this.state.PushupsCals + 0.6 });
  }
  PlusPushups5 = () => {
    this.setState({ Pushups: this.state.Pushups + 5 });
    this.setState({ PushupsCals: this.state.PushupsCals + 3 });
  }

  MinusPushups1 = () => {
    if(this.state.Pushups > 0) {
      this.setState({ Pushups: this.state.Pushups - 1 });
      this.setState({ PushupsCals: this.state.PushupsCals - 0.6 });
    }
  }
  MinusPushups5 = () => {
    if(this.state.Pushups < 5) {
      this.setState({ Pushups: this.state.Pushups = 0 });
      this.setState({ PushupsCals: this.state.PushupsCals = 0 });
    }
    else {
      this.setState({ Pushups: this.state.Pushups - 5 });
      this.setState({ PushupsCals: this.state.PushupsCals - 3 });
    }
  }
  ResetPushups = () => {
    this.setState({ Pushups: this.state.Pushups = 0 });
    this.setState({ PushupsCals: this.state.PushupsCals = 0 });
  }

  render(){
    return(
      <div>
        <h2 class="ExcersiceTitle"> Pushups completed: {this.state.Pushups} </h2>
        <h3 class="ExcersiceSubtitle"> Calories burned from this excersise: {this.state.PushupsCals.toFixed(2)}</h3>
        <button onClick={this.MinusPushups5}> -5 </button>
        <button onClick={this.MinusPushups1}> -1 </button>
        <button onClick={this.ResetPushups}> Reset </button>
        <button onClick={this.PlusPushups1}> +1 </button>
        <button onClick={this.PlusPushups5}> +5 </button>

      </div>
    );
  }
}

export default Pushups;
