import React, { Component } from 'react';
import {
    UIManager,
    ImageBackground,
    Image,
    Text,
    View,
    Dimensions,
    Keyboard,
    TouchableOpacity,
    TextInput,
    Platform,
    ScrollViewComponent,
    KeyboardAvoidingView
} from 'react-native';

import { Actions } from 'react-native-router-flux';


import LinearGradient from 'react-native-linear-gradient';



export default class SendNumber extends Component {

    constructor(props) {
        super(props)
        this.state = {
            iranIcon: true,
            code: '+98',
            number: '',
        }
    }

    componentWillMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardWillHide',
            this.keyboardDidHide.bind(this)
        )
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove()
    }

    keyboardDidHide(e) {
        this.refs.scrollView.scrollTo({ y: 0 });
    }

    componentDidMount() {
        // focus number input
        // this.refs['NUMBER'].focus()


        console.log(window)
    }


    // country code onchange 
    _changeCode = (e) => {

        if (e.trim() === '+98') {
            this.setState({
                iranIcon: true,
                code: e.trim()
            })
        } else {
            this.setState({
                iranIcon: false,
                code: e.trim()
            })
        }
    }

    // mobile number onchange
    _changeNumber = (e) => {

        this.setState({
            number: e.trim()
        })
    }


    // send code function
    _enterCode = async () => {
        Actions.EnterCode();


        // merge code and user number 
        let sentNumber = this.state.code + this.state.number
        await this.setState({
            sentNumber: sentNumber.trim()
        })
    }


    scrolldown(ref) {
        const self = this;
        // this.refs[ref].measure((ox, oy, width, height, px, py) => {
        //     self.refs.scrollView.scrollTo({y: oy - 200});
        // });

        // this.scrollView.getNode().scrollTo({y:100})


        const { State: TextInputState } = TextInput;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();

        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            console.log(originX, originY, width, height, pageX, pageY);
        });
    }


    render() {
        return (





            <View style={styles.SendNumber}>

                <ImageBackground style={styles.bgImage}
                    imageStyle={{ borderBottomRightRadius: 300 }}
                    source={require('./../../Assets/Images/sendNumber.png')}
                >

                    <KeyboardAvoidingView style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} behavior="padding">
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={styles.logoBox} >
                                <Image style={styles.logo} source={require('../../Assets/Images/logo1.png')} />
                            </View>
                        </View>

                        <View style={styles.numberInputs}>
                            <Text style={styles.numberInputsTitle} >
                                شماره همراه خود را وارد نمایید
                            </Text>


                            <View style={styles.inputBox} >
                                <View style={{
                                    flexDirection: 'row',
                                    width: '30%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRightWidth: 1,
                                    borderRightColor: '#ccc',
                                }} >
                                    <Image source={
                                        this.state.iranIcon ?
                                            require('../../Assets/Images/iran.png') :
                                            require('../../Assets/Images/national.png')
                                    } />

                                    <TextInput
                                        style={styles.inputBox1}
                                        onChangeText={(e) => this._changeCode(e)}

                                        value={this.state.code}
                                        keyboardType='numeric'
                                        value={this.state.code}
                                        maxLength={4} multiline
                                    />

                                </View>



                                <TextInput
                                    // ref={'NUMBER'}
                                    style={styles.inputBox2}
                                    onChangeText={(e) => this._changeNumber(e)}
                                    onFocus={this.scrolldown.bind(this, 'NUMBER')}
                                    value={this.state.number}
                                    keyboardType='numeric'
                                    textContentType="telephoneNumber"
                                    maxLength={10} multiline

                                />

                            </View>


                        </View>

                        <TouchableOpacity style={styles.send_btn} onPress={this._enterCode} activeOpacity={.6}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#18749a', '#46add8']}
                                style={styles.linear}>
                                <Text style={styles.send_btn_text} >
                                    ارسال
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>


                </ImageBackground>
            </View>



        );
    }
}

const styles = ({


    SendNumber: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A52D53',
        height: Dimensions.get('window').height,
    },
    bgImage: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoBox: {
        width: 160,
        height: 160,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20
    },

    inputBox: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: '#fff'
    },

    inputBox1: {
        height: 45,
        // width: '30%',

        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '900',
        ...Platform.select({
            android: {
                fontFamily: 'ISFBold',
            }
        })
    },
    inputBox2: {
        height: 45,
        width: '70%',
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: '900',
        letterSpacing: 5,
        ...Platform.select({

            android: {
                fontFamily: 'ISFBold',
            }
        })
    },
    numberInputs: {
        marginTop: 50,
        // flexGrow:3
    },
    numberInputsTitle: {
        color: '#999',
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'ISBold',

    },
    send_btn: {
        width: Dimensions.get('window').width - 100,
        marginTop: 30,
        marginBottom: 100,

    },
    linear: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50

    },

    send_btn_text: {
        fontFamily: 'ISBold',
        color: '#fff',
        fontSize: 16,
    }


})