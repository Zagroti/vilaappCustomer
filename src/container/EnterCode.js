import React, { Component } from 'react';
import {
    Text, View, Dimensions, ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';




export default class EnterCode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bg1: '#dfdfdf',
            bg2: '#dfdfdf',
            bg3: '#dfdfdf',
            bg4: '#dfdfdf',
            bg5: '#dfdfdf',
            bg6: '#dfdfdf',

            code1: '1',
            code2: '2',
            code3: '3',
            code4: '4',
            code5: '5',
            code6: '6',


        }
    }


    _sendNumber = () => {
        Actions.SendNumber()
    }

    _goHome = async () => {
        Actions.Home();

        // entered user code
        await this.setState({
            codeMerged:
                this.state.code1 +
                this.state.code2 +
                this.state.code3 +
                this.state.code4 +
                this.state.code5 +
                this.state.code6
        })

    }


    render() {
        return (
            <View style={styles.EnterCode}>
                 <KeyboardAvoidingView style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} behavior="padding">
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
                                <Text style={styles.MyNumber}>+989121113600</Text>
                            </View>
                        </View>

                        <View style={styles.Box2} >
                            <Text style={styles.ActivationCodeText} >
                                کد فعال سازی خود را وارد کنید
                        </Text>

                            <View style={styles.codeShowBox}>
                                <TextInput style={styles.MyCodeNumber}
                                    onFocus={() => {
                                        this.setState({ bg1: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg1: '#dfdfdf' })
                                    }} value={this.state.code1}
                                    onChangeText={(e) => this.setState({ code1: e })}
                                    maxLength={1}
                                    style={{
                                        borderBottomColor: this.state.bg1,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                    }}
                                    keyboardType='numeric'
                                />
                                <TextInput style={styles.MyCodeNumber}
                                    onFocus={() => {
                                        this.setState({ bg2: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg2: '#dfdfdf' })
                                    }} value={this.state.code2}
                                    onChangeText={(e) => this.setState({ code2: e })}
                                    maxLength={1}
                                    style={{
                                        borderBottomColor: this.state.bg2,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                    }}
                                    keyboardType='numeric'
                                />
                                <TextInput style={styles.MyCodeNumber}
                                    onFocus={() => {
                                        this.setState({ bg3: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg3: '#dfdfdf' })
                                    }} value={this.state.code3}
                                    onChangeText={(e) => this.setState({ code3: e })}
                                    maxLength={1}
                                    style={{
                                        borderBottomColor: this.state.bg3,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                    }}
                                    keyboardType='numeric'
                                />
                                <TextInput style={styles.MyCodeNumber}
                                    onFocus={() => {
                                        this.setState({ bg4: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg4: '#dfdfdf' })
                                    }} value={this.state.code4}
                                    onChangeText={(e) => this.setState({ code4: e })}
                                    maxLength={1}
                                    style={{
                                        borderBottomColor: this.state.bg4,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                    }}
                                    keyboardType='numeric'
                                />
                                <TextInput style={styles.MyCodeNumber}
                                    onFocus={() => {
                                        this.setState({ bg5: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg5: '#dfdfdf' })
                                    }} value={this.state.code5}
                                    onChangeText={(e) => this.setState({ code5: e })}
                                    maxLength={1}
                                    style={{
                                        borderBottomColor: this.state.bg5,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                    }}
                                    keyboardType='numeric'
                                />
                                <TextInput style={styles.MyCodeNumber}
                                    onFocus={() => {
                                        this.setState({ bg6: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg6: '#dfdfdf' })
                                    }} value={this.state.code6}
                                    onChangeText={(e) => this.setState({ code6: e })}
                                    maxLength={1}
                                    style={{
                                        borderBottomColor: this.state.bg6,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontWeight: '900',
                                        textAlign: 'center',
                                    }}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>


                        <TouchableOpacity style={styles.save_button} onPress={this._goHome} activeOpacity={.6}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#36a35b', '#6fcf97']}
                                style={styles.linear}>
                                <Text style={styles.save_text} >
                                    ورود
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
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
        flexGrow: 1,
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
    Resend: {

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
        flexGrow: 1,
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
        fontSize: 14
    },
    codeShowBox: {
        flexDirection: 'row',
    },
    MyCodeNumber: {

    },

    save_button: {
        width: Dimensions.get('window').width - 100,
        marginTop: 0,
        flexGrow: 2,
        justifyContent: "flex-start",

    },
    linear: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        borderRadius:50

    },
    save_text: {
        fontFamily: "ISBold",
        color: '#fff',
        fontSize: 16,
    },





})