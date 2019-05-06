import React from 'react';

import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableOpacity } from 'react-native';


import SendNumber from './src/components/SendNumber'
import EnterCode from './src/components/EnterCode'
import Home from './src/container/Home'

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
    <Router   >
        <Stack key="root" >
            <Scene key="sendNumber"
                component={SendNumber}
                title="Send Number" initial={true}
                hideNavBar={true}
            />
            <Scene key="enterCode" component={EnterCode}
                title=""
                titleStyle={{ color: 'transparent' }}
                renderBackButton={() => renderBackButton()}
                navigationBarStyle={styles.login_style_bar}
                sceneStyle={styles.login_scene_style}
            />
            <Scene key="home"
                component={Home}
                title="home" 
                hideNavBar={true}
            />

        </Stack>
    </Router>
);




const styles = ({
    login_style_bar: {
        backgroundColor: '#f6f6f6',
        shadowColor: "#f7f7f7",
        elevation: 0,
        height: 50,

    },

})
export default Routes;