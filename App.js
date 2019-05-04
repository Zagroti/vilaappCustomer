

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';



import SendNumber from './src/SendNumber'
import SplashScreen from './src/SplashScreen'

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
      <View style={styles.container}>
        <SendNumber />
      </View>
    );
  }
}

const styles = ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:"#dc5d70",
    fontWeight: 'bold',
  },
  

});
