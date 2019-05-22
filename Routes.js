import React from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';


import SendNumber from './src/container/SendNumber';
import EnterCode from './src/container/EnterCode';
import Home from './src/container/Home';
import Profile from './src/container/Profile';
import ResultItemsPage from './src/container/ResultItemsPage'
import Details from './src/container/Details'




//back button
const backButton = () => (
    <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{ width: 30, height: 20, marginLeft: 20 }}
    >
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('./Assets/Images/left-arrow.png')}
                style={{ width: 30, height: 20 }}
            />
            {/*
                <Icon name='ios-arrow-round-back' style={{ color: '#fff' }} />
            */}
        </View>
    </TouchableOpacity>
);

const backButtonDetail = () => (
    <TouchableOpacity
        style={{
            backgroundColor: '#33333320',
            padding: 10,
            width: 50,
            height: 50,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            top: 10,
            start: 10,

        }} onPress={() => Actions.pop()} >
        <Image style={{
            width: 30,
            resizeMode: 'contain'
        }}
            source={require('./Assets/Images/left-arrow-white.png')} />
    </TouchableOpacity>
)



const Routes = () => (
  



        <Router >
            <Scene key="root" >

                <Scene key="SendNumber"
                    component={SendNumber}
                    title="Send Number"
                    hideNavBar={true}
                    initial={true}


                />
                <Scene key="EnterCode" component={EnterCode}
                    title=""
                    titleStyle={{ color: 'transparent' }}
                    renderBackButton={() => backButton()}
                    navigationBarStyle={styles.login_style_bar}
                    sceneStyle={styles.login_scene_style}

                />

                <Scene key="Home"
                    component={Home}
                    title="home"
                    hideNavBar={true}

                />

                <Scene key="Profile" component={Profile}
                    title=""
                    titleStyle={{ color: 'transparent' }}
                    renderBackButton={() => backButton()}
                    navigationBarStyle={styles.login_style_bar}
                    sceneStyle={styles.login_scene_style}
                />

                <Scene key="ResultItemsPage" component={ResultItemsPage}
                    title=""
                    titleStyle={{ color: 'transparent' }}
                    renderBackButton={() => backButton()}
                    navigationBarStyle={styles.login_style_bar}
                    sceneStyle={styles.login_scene_style}
                    onRight={() => alert('right')}
                    // rightButtonImage={require('./Assets/Images/bell.png')}
                    renderRightButton={() => (
                        <TouchableOpacity style={styles.notification_box}
                            onPress={() => alert('توجهات')}>
                            <ImageBackground
                                style={styles.bell}
                                source={require('./Assets/Images/bell.png')}
                            >
                                <View style={styles.notification} >
                                    <Text style={styles.notification_text} >3</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />

                <Scene key="Details" component={Details}
                    title=""
                    titleStyle={{ color: 'red' }}
                    renderBackButton={() => backButtonDetail()}
                    navigationBarStyle={styles.login_style_bar_detail}
                    sceneStyle={styles.login_scene_style}

                />











            </Scene>
        </Router>
    
)

export default Routes;

const styles = ({
    login_style_bar: {
        backgroundColor: '#f6f6f6',
        shadowColor: "#f7f7f7",
        elevation: 0,
        height: 50,
    },
    login_style_bar_detail: {
        backgroundColor: 'transparent',
        shadowColor: "#f7f7f7",
        elevation: 0,
        height: 50,
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },

    notification_box: {
        width: 40,
        height: 40,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },

})


