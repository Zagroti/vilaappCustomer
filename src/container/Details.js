import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';

export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {




        return (

                <View style={styles.Details} >

                 
                    

                    <View style={styles.up}>
                        <Text style={styles.title} >جزییات</Text>
                        
                    </View>

                    

                </View>
       


        );
    }
}

const styles = ({

    Details: {
        backgroundColor: "#C92652",
        width: Dimensions.get('window').width,
        flex: 1
    },

   






})