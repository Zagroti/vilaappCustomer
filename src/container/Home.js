import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

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
                            <View style={styles.noRequest}>
                                <Image style={styles.marker} source={require('../../Assets/Images/mappin.png')} />
                                <Text style={styles.noRequestTitle}>چیزی برای نمایش وجود ندارد</Text>
                                <Text style={styles.noRequestText}>برای درخواست دکمه ی نشانه گر را فشار دهید</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.down}>
                        <View>
                            <Image style={styles.bottomIcons} source={require('../../Assets/Images/user.png')} />
                        </View>
                        <View style={styles.middleBtn}>
                            <Image style={styles.bottomIcons} source={require('../../Assets/Images/bluemarker.png')} />
                        </View>
                        <View>
                            <Image style={styles.bottomIcons} source={require('../../Assets/Images/history.png')} />
                        </View>
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

    requestBox: {

    },

    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
        marginVertical: 20,
    },

    noRequest: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 100,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },

    marker: {
        fontWeight: '500',
        marginBottom: 20,
        width: 50,
        height: 50
    },

    noRequestTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#333'
    },
    noRequestText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555'
    },

    down: {
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: "#C92652",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    middleBtn: {
        positions: 'absulote',
        bottom: 20,
    },
    bottomIcons:{
        
    }







})