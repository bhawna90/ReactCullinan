import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentDidMount() {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      this.setState({ hours: hours, minutes: minutes, seconds: seconds });
    }, 1000);
  }
  render() {
    return (
      <div>
        <span className="hours">{this.state.hours}:</span>
        <span className="minutes">{this.state.minutes}:</span>
        <span className="seconds">{this.state.seconds}</span>
      </div>
    );
  }
}

export default App;
