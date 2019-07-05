

import React , {Component} from 'react';

import {StatusBar , View ,Dimensions } from 'react-native'

import Routes from './Routes';


export default class App extends Component {
  constructor(props) {
    super(props);
  
  }




  render() {

    StatusBar.setBackgroundColor('#A52D53', true);
    return (

      <View style={{height: Dimensions.get('window').height + 100}}>

          <Routes />
      </View>
        
    );
  }
}
