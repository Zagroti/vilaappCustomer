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
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import NoRequest from '../components/NoRequest';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    _sendNumber = () => {
        Actions.sendNumber()
    }

    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //for disable back button haedware
    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

    render() {

        const navigationView = (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
            </View>
        );




        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerSlide={(e) => { console.log('1') }}
                onDrawerStateChanged={(e) => { console.log('2') }}
                onDrawerClose={(e) => { console.log('wercfe') }}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >
                <View style={styles.home_cover}>
                    <View style={styles.menu} >
                        <TouchableOpacity style={styles.humberger}>

                            <ImageBackground
                                style={styles.bell}
                                source={require('./../../Assets/Images/bell.png')}
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.humberger} onPress={this._openDrawer}>

                            <Image style={styles.humberger} source={require('../../Assets/Images/menu.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.up}>
                        <View style={styles.requestBox} >
                            <Text style={styles.title} >درخواست های من</Text>
                            <NoRequest />
                        </View>
                    </View>

                    <View style={styles.down}>
                        <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons}>
                            <Image style={styles.bottomIcon} source={require('../../Assets/Images/user.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={.9} style={styles.middleBtn}>
                            <View style={styles.middleInside}>
                                <Image style={styles.middleIcon} source={require('../../Assets/Images/bluemarker.png')} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons}>
                            <Image style={styles.bottomIcon} source={require('../../Assets/Images/history.png')} />
                        </TouchableOpacity>
                    </View >

                </View>
            </DrawerLayoutAndroid>


        );
    }
}

const styles = ({

    home_cover: {
        backgroundColor: "#C92652",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        padding: 20
    },
    bell: {
        width: 30,
        height: 30
    },
    humberger: {
        width: 30,
        height: 30
    },
    up: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 150,
        backgroundColor: '#f6f6f6',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },


    title: {
        fontSize: 22,
        fontFamily: 'ISBold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
        marginVertical: 20,

    },


    down: {
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: "#C92652",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    middleBtn: {
        positions: 'absulote',
        bottom: 50,
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#C92652',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleInside: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        // borderBottomWidth:1,
        // borderTopWidth:1,
        // borderRightWidth:1,
        // borderLeftWidth:1,
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    middleIcon: {
        width: 40,
        height: 50,
    },

    bottomIcons: {

    },
    bottomIcon: {
        width: 30,
        height: 30
    }







})