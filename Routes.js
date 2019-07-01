import React from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableOpacity, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SendNumber from './src/container/SendNumber';
import EnterCode from './src/container/EnterCode';
import Home from './src/container/Home';
import Profile from './src/container/Profile';
import Support from './src/container/Support';
import ResultItemsPage from './src/container/ResultItemsPage'
import Details from './src/container/Details'

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

const nothing = () => (
    null
);





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
        AsyncStorage.getItem('login')
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
            return <View style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10
            }}>
                <ActivityIndicator size="large" color="#A52D53" />
            </View>;
        }
        return (
            < Router >
                <Scene key="root" >

                    <Scene key="SendNumber"
                        component={SendNumber}
                        title="Send Number"
                        hideNavBar={true}
                        initial={true}
                        initial={!this.state.logged}

                    />
                    <Scene key="EnterCode" component={EnterCode}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}

                    />

                    <Scene key="Home"
                        component={Home}
                        title="home"
                        hideNavBar={true}
                        initial={this.state.logged}                        
                    />

                    <Scene key="Profile" component={Profile}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}
                    />
                     <Scene key="Support" component={Support}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}
                    />

                    <Scene key="ResultItemsPage" component={ResultItemsPage}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderBackButton={() => nothing}
                        renderRightButton={() => nothing}
                        navigationBarStyle={styles.login_style_bar_detail}
                        sceneStyle={styles.login_scene_style}
                    />

                    <Scene key="Details" component={Details}
                        title=""
                        titleStyle={{ color: 'red' }}
                        renderBackButton={() => nothing}
                        renderRightButton={() => nothing}
                        navigationBarStyle={styles.login_style_bar_detail}
                        sceneStyle={styles.login_scene_style}
                    />


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


