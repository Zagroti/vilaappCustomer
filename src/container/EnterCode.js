import React, { Component } from 'react';

import {
    Text, View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Animated
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import GradientButton from '../components/GradientButton';




class EnterCode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bg: '#dfdfdf',

            code: '12345',

            wrongCode: false,
            fadeText: new Animated.Value(1)


        }
    }


    // resend number 
    _sendNumber = () => {
        Actions.pop()
    }


    // validation and go home
    _goHome = async () => {
        // fetch ...
        //..
        //..
        if (this.state.code == '12345') {
            // go HOME
            Actions.Home();


        } else {

            // animation show permission 
            await this.setState({
                wrongCode: true
            })

            //text animation 
            Animated.timing(
                this.state.fadeText,
                {
                    toValue: 0,
                    duration: 2000,
                    delay: 3000
                }
            ).start()

            // set text animation opacity value
            // reset wrong number to default
            setTimeout(() => {
                this.setState({
                    wrongCode: false,
                    fadeText: new Animated.Value(1),
                })
            }, 5000)
        }

    }


    render() {
        let { fadeText } = this.state


        return (
            <View style={styles.EnterCode}>
                <KeyboardAvoidingView style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} behavior="position">
                    <View style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={styles.Box1} >
                            <Text style={styles.MyCode} >
                                کد فعال سازی
                            </Text>
                            <View style={styles.ResendBox}>
                                <TouchableOpacity
                                    style={styles.Resend}
                                    activeOpacity={.6}
                                    onPress={this._sendNumber}
                                >
                                    <Text style={styles.ResendText}  >ارسال مجدد</Text>
                                </TouchableOpacity>
                                <Text style={styles.MyNumber}>+912 123 4567</Text>
                            </View>
                        </View>

                        <View style={styles.Box2} >
                            <Text style={styles.ActivationCodeText} >
                                کد فعال سازی خود را وارد کنید
                            </Text>

                            <View style={styles.code_show_box}>
                                <TextInput
                                    onFocus={() => {
                                        this.setState({ bg: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg: '#dfdfdf' })
                                    }} value={this.state.code}
                                    onChangeText={(e) => this.setState({ code: e.replace(/[^0-9]/g, '').trim() })}
                                    maxLength={5}
                                    style={{
                                        borderBottomColor: this.state.bg,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                        width: '70%',
                                        letterSpacing: 16
                                    }}
                                    keyboardType='numeric'
                                />

                            </View>
                            {
                                this.state.wrongCode ?
                                    <Animated.Text style={{
                                        height: 20,
                                        width: Dimensions.get('window').width - 100,
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'red',
                                        marginTop: 20,
                                        opacity: fadeText,
                                        textAlign: 'center'
                                    }} >
                                        کد وارد شده اشتباه است
                            </Animated.Text> :
                                    <Text style={{ height: 20, marginTop: 20, }}></Text>

                            }
                        </View>



                        <GradientButton
                            width={Dimensions.get('window').width - 100}
                            press={this._goHome}
                            activeOpacity={.6}
                            color_1="#36a35b"
                            color_2="#6fcf97"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ورود"
                            top={20}
                            bottom={100}
                        />
                       
                    </View>

                </KeyboardAvoidingView>
            </View>



        );
    }
}

const styles = ({

    EnterCode: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f6f6f6',
    },

    Box1: {
        // flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: Dimensions.get('window').width - 100,
    },

    MyCode: {
        fontSize: 24,
        fontFamily: 'ISBold',
    },

    ResendBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    MyNumber: {
        fontSize: 18,
        fontWeight: '900',
        color: '#b7b7b7'
    },

    ResendText: {
        fontSize: 14,
        fontFamily: 'ISBold',
        marginRight: 10,
        color: '#fff',
        backgroundColor: '#C72A54',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },


    Box2: {
        // flexGrow: 1,
        height: 200,
        width: Dimensions.get('window').width - 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 80,
        marginBottom: 30,
        borderRadius: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 2,
    },

    ActivationCodeText: {
        fontFamily: "ISMedium",
        color: '#333',
        marginBottom: 20,
        fontSize: 14,
        marginTop: 20

    },
    code_show_box: {
        flexDirection: 'row',
    }





})









export default EnterCode; 