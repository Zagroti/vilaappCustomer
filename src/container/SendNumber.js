import React, { Component } from 'react';
import {
    UIManager,
    ImageBackground,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    Animated
} from 'react-native';


import { Actions } from 'react-native-router-flux';

//components
import GradientButton from '../components/GradientButton';




class SendNumber extends Component {

    constructor(props) {
        super(props)
        this.state = {
            iranIcon: true,
            code: '+98',
            number: '',
            fadeText: new Animated.Value(1),
            wrongNumber: false
        }
    }

    componentDidMount() {
        // focus number input
        this.refs['NUMBER'].focus()
    }



    // country code onchange 
    _changeCode = (e) => {

        //just numbers and (+) have permission
        if (e.trim() === '+98') {
            this.setState({
                iranIcon: true,
                code: e.replace(/[^0-9\+]/g, '').trim()
            })
        } else {
            this.setState({
                iranIcon: false,
                code: e.replace(/[^0-9\+]/g, '').trim()
            })
        }
    }



    // mobile number onchange
    _changeNumber = (e) => {
        // just number has permission
        this.setState({
            number: e.replace(/[^0-9]/g, '').trim()
        })
    }


    // send code function
    _enterCode = async () => {

        if (this.state.number.length === 10) {
            // go to enter code page 
            Actions.EnterCode();

            // merge code and user number 
            let sentNumber = this.state.code + this.state.number
            await this.setState({
                sentNumber: sentNumber.trim()
            })
            this.props.onSendNumber(sentNumber)

        }else {

            // animation show permission 
            await this.setState({
                wrongNumber: true
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
                    wrongNumber: false,
                    fadeText: new Animated.Value(1),
                })
            }, 5000)
        }
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

        let { fadeText } = this.state

        return (





            <View style={styles.send_number}>

                <ImageBackground style={styles.bg_image}
                    imageStyle={{ borderBottomRightRadius: 300 }}
                    source={require('./../../Assets/Images/sendNumber.png')}
                >

                    <KeyboardAvoidingView style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} behavior="position">
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={styles.logo_box} >
                                <Image style={styles.logo} source={require('../../Assets/Images/logo1.png')} />
                            </View>
                        </View>

                        <View style={styles.number_inputs}>
                            <Text style={styles.number_inputs_title} >
                                شماره همراه خود را وارد نمایید
                            </Text>


                            <View style={styles.input_box} >
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
                                        style={styles.input_box_1}
                                        onChangeText={(e) => this._changeCode(e)}

                                        value={this.state.code}
                                        keyboardType='numeric'
                                        value={this.state.code}
                                        maxLength={4} multiline
                                    />

                                </View>





                                <TextInput
                                    ref={'NUMBER'}
                                    style={styles.input_box_2}
                                    onChangeText={(e) => this._changeNumber(e)}
                                    onFocus={this.scrolldown.bind(this, 'NUMBER')}
                                    value={this.state.number}
                                    keyboardType='numeric'
                                    textContentType="telephoneNumber"
                                    maxLength={10} multiline

                                />

                            </View>


                        </View>

                        {
                            this.state.wrongNumber ?
                                <Animated.Text style={{
                                    height: 20,
                                    width: Dimensions.get('window').width - 100,
                                    fontSize: 10,
                                    fontFamily: 'ISBold',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'red',
                                    paddingHorizontal: 20,
                                    marginTop: 5,
                                    opacity: fadeText
                                }} >
                                    شماره همراه باید ۱۰ کارکتر باشد
                            </Animated.Text> :
                                <Text style={{ height: 20, paddingHorizontal: 20, marginTop: 5, }}></Text>

                        }



                        <GradientButton
                            width={Dimensions.get('window').width - 100}
                            press={this._enterCode}
                            activeOpacity={.6}
                            color_1="#18749a"
                            color_2="#46add8"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ارسال"
                            top={20}
                            bottom={100}
                        />


                    </KeyboardAvoidingView>


                </ImageBackground>
            </View>



        );
    }
}

const styles = ({


    send_number: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A52D53',
        height: Dimensions.get('window').height,
    },
    bg_image: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo_box: {
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

    input_box: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: '#fff'
    },

    input_box_1: {
        height: 45,
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '900'
    },
    input_box_2: {
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
    number_inputs: {
        marginTop: 50,
        // flexGrow:3
    },
    number_inputs_title: {
        color: '#999',
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'ISBold',

    },



})






export default SendNumber;