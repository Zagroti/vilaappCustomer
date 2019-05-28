import React , { Component } from 'react';
import { ImageBackground, Text, View, Dimensions } from 'react-native';


export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.SplashView}>
                <ImageBackground style={styles.SplashImage}
                                 imageStyle={{
                                    // borderBottomRightRadius: 300,
                                 }}
                                 source={require('./../../Assets/Images/splash.png')} >
                    <View style={styles.VilaApp} >
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
        width: Dimensions.get('window').width + 1,
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