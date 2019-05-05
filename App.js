

import React, {Component} from 'react';


import SplashScreen from './src/components/SplashScreen'
import Routes from './Routes';


export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }



  async componentDidMount() {


    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  // splash screen
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        0
      )
    );
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
  
    return (
        <Routes />
    );
  }
}
