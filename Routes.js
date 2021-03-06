import React from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SendNumber from './src/container/SendNumber';
import EnterCode from './src/container/EnterCode';
import Home from './src/container/Home';
import Profile from './src/container/Profile';
import Support from './src/container/Support';
import ResultItemsPage from './src/container/ResultItemsPage';
import Details from './src/container/Details';
import Test from './src/container/Test';
import Splash from './src/components/SplashScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



//back button
const backButton = () => (
    <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{
            width: 60, height: 60, marginRight: 20, alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <View >
            <Icon size={36} name="arrow-right" color="#A52D53" />
        </View>
    </TouchableOpacity>
);


//pass nothing 
const nothing = () => { return <View /> }





class Routes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            logged: false,
            loading: true,
        };
    }


    componentWillMount() {
        self = this;
        AsyncStorage.getItem('@token')
            .then((value) => {
                if (value != null) {
                    this.setState({
                        logged: true,
                        loading: false,
                    });
                } else {
                    this.setState({
                        loading: false,
                    })
                }
            }
            );
    };

    render() {
        if (this.state.loading) {
            return <Splash />
        }
        return (
            < Router >
                <Scene key="root" >

                    <Scene key="SendNumber"
                        component={SendNumber}
                        title=""
                        hideNavBar={true}
                        initial={true}
                        initial={!this.state.logged}

                    />
                    <Scene key="EnterCode"
                        component={EnterCode}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}

                    />

                    <Scene key="Home"
                        component={Home}
                        title=""
                        hideNavBar={true}
                        // initial={this.state.logged}
                        initial={true}

                    />

                    <Scene key="ResultItemsPage"
                        component={ResultItemsPage}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderBackButton={() => nothing()}
                        renderRightButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar_detail}

                    />


                    <Scene key="Profile"
                        component={Profile}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                    />
                    <Scene key="Support"
                        component={Support}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}
                    />


                    <Scene key="Details"
                        component={Details}
                        title=""
                        titleStyle={{ color: 'red' }}
                        renderBackButton={() => nothing()}
                        renderRightButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar_detail}
                        sceneStyle={styles.login_scene_style}
                    />

                    {/* <Scene key="Test"
                        component={Test}
                        title=""
                        hideNavBar={true}
                    />  */}



                </Scene>
            </Router >
        )

    }

}

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
        height: 0,
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
        left: 20,
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