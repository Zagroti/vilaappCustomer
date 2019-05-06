import React , { Component } from 'react';
import { ImageBackground, Image, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';



export default class SendNumber extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    onFocus() {
        this.setState({
            backgroundColor: 'green'
        })
    }

    onBlur() {
        this.setState({
            backgroundColor: '#ededed'
        })
    }

    _enterCode = () => {
        Actions.enterCode()
    }


    render() {
        return (
            <InputScrollView multilineInputStyle={styles.ISV} >
                <View style={styles.SendNumber}>
                    <ImageBackground style={styles.bgImage}
                        imageStyle={{
                            borderBottomRightRadius: 300,
                        }}
                        source={require('./../../Assets/Images/sendNumber.png')}
                    >
                        <View style={styles.logoBox} >
                            <Image style={styles.logo} source={require('../../Assets/Images/logo1.png')} />
                        </View>

                        <View style={styles.numberInputs}>
                            <Text style={styles.numberInputsTitle} >
                                شماره تلفن
                            </Text>
                            <View style={styles.inputBox} >

                                <TextInput
                                    style={styles.inputBox1}
                                    onChangeText={(countryCode) => this.setState({ countryCode })}
                                    value={this.state.text}
                                    keyboardType='numeric'
                                    value="+98"
                                />
                                <TextInput
                                    style={styles.inputBox2}
                                    onChangeText={(number) => this.setState({ number })}
                                    value={this.state.text}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.sendBtn} onPress={this._enterCode} activeOpacity={.6}>
                            <ImageBackground style={styles.sendBtnImg} imageStyle={{ borderRadius: 50 }} source={require('./../../Assets/Images/sendButton.png')}>
                                <Text style={styles.sendBtnText} >
                                    فرستادن
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </InputScrollView>

        );
    }
}

const styles = ({
    ISV: {
        flex: 1
    },
    SendNumber: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A52D53',
    },
    bgImage: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBox: {
        // width: 150,
        // height: 150,
        // backgroundColor: '#f1f1f1',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // flexGrow:5
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    inputBox: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    inputBox1: {
        height: 50,
        width: '30%',
        borderRightWidth: 1,
        borderRightColor: '#ccc',
        paddingLeft: 30,
        fontSize: 12,
        fontWeight: '900'
    },
    inputBox2: {
        height: 50,
        width: '70%',
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: '900'
    },
    numberInputs: {
        marginTop: 50,
        // flexGrow:3
    },
    numberInputsTitle: {
        color: '#686868',
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'ISBold',

    },
    sendBtn: {
        width: Dimensions.get('window').width - 100,
        marginTop: 80,
        // flexGrow:5

    },
    sendBtnImg: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    sendBtnText: {
        fontFamily:'ISBold',
        color: '#fff',
        fontSize: 16,
    }


})