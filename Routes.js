import React from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';


import SendNumber from './src/container/SendNumber';
import EnterCode from './src/container/EnterCode';
import Home from './src/container/Home';
import Profile from './src/container/Profile';
import ResultItemsPage from './src/container/ResultItemsPage'
import Details from './src/container/Details'
//back button
const renderBackButton = () => (
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



const Routes = () => (
    <Router >
        <Scene key="root" >

            <Scene key="SendNumber"
                component={SendNumber}
                title="Send Number"
                hideNavBar={true}

            />
            <Scene key="EnterCode" component={EnterCode}
                title=""
                titleStyle={{ color: 'transparent' }}
                renderBackButton={() => renderBackButton()}
                navigationBarStyle={styles.login_style_bar}
                sceneStyle={styles.login_scene_style}
            />

            <Scene key="Home"
                component={Home}
                title="home"
                hideNavBar={true}
                initial={true}

            />

            <Scene key="Profile" component={Profile}
                title=""
                titleStyle={{ color: 'transparent' }}
                renderBackButton={() => renderBackButton()}
                navigationBarStyle={styles.login_style_bar}
                sceneStyle={styles.login_scene_style}
                hideNavBar={true}

            />

            <Scene key="ResultItemsPage" component={ResultItemsPage}
                title=""
                titleStyle={{ color: 'transparent' }}
                renderBackButton={() => renderBackButton()}
                navigationBarStyle={styles.login_style_bar}
                sceneStyle={styles.login_scene_style}
                onRight={() => this.renderRightButton()}
                rightButtonImage={require('./Assets/Images/bell.png')}
            />

            <Scene key="Details" component={Details}
                title=""
                titleStyle={{ color: 'transparent' }}
                renderBackButton={() => renderBackButton()}
                navigationBarStyle={styles.login_style_bar}
                sceneStyle={styles.login_scene_style}
                onRight={() => this.renderRightButton()}
                rightButtonImage={require('./Assets/Images/bell.png')}
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

})


