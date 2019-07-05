import React, { Component } from 'react';
import { ImageBackground, Text, View, Dimensions, ActivityIndicator } from 'react-native';


export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.SplashView}>
                <ImageBackground style={styles.SplashImage}
                    source={require('./../../Assets/Images/splash.png')} >
                    <View style={styles.VilaApp} >
                        <ActivityIndicator style={{ marginBottom:50 }} size="small" color="#fff" />
                        <Text style={styles.VilaAppText} >
                            Power By VilaApp
                        </Text>
                        <Text style={styles.VilaAppNumber} >
                            2  0  1  9
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = ({
    SplashView: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 150,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    SplashImage: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    VilaApp: {
        alignItems: 'center',
        marginBottom: 20,
        height: 300
    },
    VilaAppText: {
        fontWeight: '900',
        color: '#8F1D40',

    },
    VilaAppNumber: {
        fontWeight: '100',
        color: '#8F1D40'

    }

})
