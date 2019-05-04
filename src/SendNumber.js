import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';


export default class SendNumber extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }



    _sendNumber = () => {

    }


    render() {
        return (
            <View style={styles.SendNumber}>
                <ImageBackground style={styles.SNImage}
                    imageStyle={{
                        borderBottomRightRadius: 300,
                    }}
                    source={require('./../Assets/Images/sendNumber.png')}
                >

                    <View style={styles.logoBox} >
                        <Image style={styles.logo} source={require('../Assets/Images/logo1.png')} />
                    </View>

                    <View style={styles.SNBox}>
                        <Text style={styles.SNBoxTitle} >
                            شماره تلفن
                        </Text>
                        <View style={styles.SNInpuBox} >

                            <TextInput
                                style={styles.SNInpuBox1}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                value={this.state.text}
                                keyboardType='numeric'
                            />
                            <TextInput
                                style={styles.SNInpuBox2}
                                onChangeText={(number) => this.setState({ number })}
                                value={this.state.text}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.SNBtn} onPress={this._sentNumber} activeOpacity={.6}>
                        <ImageBackground style={styles.SNBImg} imageStyle={{ borderRadius: 50 }} source={require('./../Assets/Images/sendButton.png')}>
                            <Text style={styles.SNBtnText} >
                                فرستادن
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = ({
    SendNumber: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A52D53'
    },
    SNImage: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBox:{
        width:150,
        height:150,
        backgroundColor: '#f1f1f1',
        borderRadius:100,
        justifyContent:'center',
        alignItems: 'center',

    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    SNInpuBox: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 5,
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 1,
    },
    SNInpuBox1: {
        height: 50,
        width: '30%',
        borderRightWidth: 1,
        borderRightColor: '#ccc',
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '900'
    },
    SNInpuBox2: {
        height: 50,
        width: '70%',
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: '900'
    },
    SNBox: {
        marginTop: 50
    },
    SNBoxTitle: {
        color: '#686868',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
    },
    SNBtn: {
        width: Dimensions.get('window').width - 100,
        marginTop: 40,
    },
    SNBImg: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    SNBtnText: {
        fontWeight: '500',
        color: '#fff',
        fontSize: 18,
    }


})