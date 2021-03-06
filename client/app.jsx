import React from 'react';
import Level1 from './pages/level-1';
import Level2 from './pages/level-2';
import Level3 from './pages/level-3';
import Level4 from './pages/level-4';
import Level5 from './pages/level-5';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.rerender = this.rerender.bind(this);
    this.state = {
      timer: 0,
      rerender: false
    };
  }

  componentDidMount(props) {
    const intervalID = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
        intervalID
      });
    }, 10);
  }

  rerender() {
    this.setState({ timer: 0 });
    const intervalID = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
        intervalID
      });
    }, 10);
  }

  stopTimer() {
    clearInterval(this.state.intervalID);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" element={<Level1/>} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/level4" element={<Level4 />} />
          <Route path="/level5" element={<Level5 stopTimer={this.stopTimer} timer={this.state.timer} rerender={this.rerender}/>} />
        </Switch>
      </Router>
    );
  }
}
