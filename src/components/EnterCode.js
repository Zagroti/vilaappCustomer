import React, { Component } from 'react';
import {
    Text, View, Dimensions, ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';



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
        }
    }


    _codeAuth = () => {
        Actions.home()

    }


    render() {
        return (
            <InputScrollView multilineInputStyle={styles.ISV}>
                <View style={styles.EnterCode}>

                    <View style={styles.Box1} >
                        <Text style={styles.MyCode} >
                            کد فعال سازی
                        </Text>
                        <View style={styles.ResendBox}>
                            <TouchableOpacity style={styles.Resend} onPress={this._sendNumber} activeOpacity={.6}>
                                <Text style={styles.ResendText} >ارسال مجدد</Text>
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
                                }} value="2"
                                style={{
                                    borderBottomColor: this.state.bg1,
                                    marginHorizontal: 5,
                                    paddingHorizontal: 5,
                                    fontSize: 30,
                                    paddingBottom: 5,
                                    borderBottomWidth: 2,
                                    fontWeight: '900',
                                    textAlign: 'center'

                                }}
                            />
                            <TextInput style={styles.MyCodeNumber}
                                onFocus={() => {
                                    this.setState({ bg2: '#C72A54' })
                                }}
                                onBlur={() => {
                                    this.setState({ bg2: '#dfdfdf' })
                                }} value="4"
                                style={{
                                    borderBottomColor: this.state.bg2,
                                    marginHorizontal: 5,
                                    paddingHorizontal: 5,
                                    fontSize: 30,
                                    paddingBottom: 5,
                                    borderBottomWidth: 2,
                                    fontWeight: '900',
                                    textAlign: 'center'

                                }}
                            />
                            <TextInput style={styles.MyCodeNumber}
                                onFocus={() => {
                                    this.setState({ bg3: '#C72A54' })
                                }}
                                onBlur={() => {
                                    this.setState({ bg3: '#dfdfdf' })
                                }} value="7"
                                style={{
                                    borderBottomColor: this.state.bg3,
                                    marginHorizontal: 5,
                                    paddingHorizontal: 5,
                                    fontSize: 30,
                                    paddingBottom: 5,
                                    borderBottomWidth: 2,
                                    fontWeight: '900',
                                    textAlign: 'center'

                                }}
                            />
                            <TextInput style={styles.MyCodeNumber}
                                onFocus={() => {
                                    this.setState({ bg4: '#C72A54' })
                                }}
                                onBlur={() => {
                                    this.setState({ bg4: '#dfdfdf' })
                                }} value="0"
                                style={{
                                    borderBottomColor: this.state.bg4,
                                    marginHorizontal: 5,
                                    paddingHorizontal: 5,
                                    fontSize: 30,
                                    paddingBottom: 5,
                                    borderBottomWidth: 2,
                                    fontWeight: '900',
                                    textAlign: 'center'

                                }}
                            />
                            <TextInput style={styles.MyCodeNumber}
                                onFocus={() => {
                                    this.setState({ bg5: '#C72A54' })
                                }}
                                onBlur={() => {
                                    this.setState({ bg5: '#dfdfdf' })
                                }} value="0"
                                style={{
                                    borderBottomColor: this.state.bg5,
                                    marginHorizontal: 5,
                                    paddingHorizontal: 5,
                                    fontSize: 30,
                                    paddingBottom: 5,
                                    borderBottomWidth: 2,
                                    fontWeight: '900',
                                    textAlign: 'center'

                                }}
                            />
                            <TextInput style={styles.MyCodeNumber}
                                onFocus={() => {
                                    this.setState({ bg6: '#C72A54' })
                                }}
                                onBlur={() => {
                                    this.setState({ bg6: '#dfdfdf' })
                                }} value="9"
                                style={{
                                    borderBottomColor: this.state.bg6,
                                    marginHorizontal: 5,
                                    paddingHorizontal: 5,
                                    fontSize: 30,
                                    paddingBottom: 5,
                                    borderBottomWidth: 2,
                                    fontWeight: '900',
                                    textAlign: 'center'

                                }}
                            />
                        </View>
                    </View>


                    <TouchableOpacity style={styles.SaveButton} onPress={this._codeAuth} activeOpacity={.6}>
                        <ImageBackground style={styles.SaveButtonImage}
                            imageStyle={{
                                borderRadius: 50,
                            }}
                            source={require('./../../Assets/Images/save.png')}
                        >
                            <Text style={styles.SaveText} >
                                ذخیره
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </InputScrollView>



        );
    }
}

const styles = ({
    ISV: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    EnterCode: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 50,
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
        fontSize: 32,
        fontWeight: '500'
    },

    ResendBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },

    MyNumber: {
        fontSize: 16,
        fontWeight: '900',
        color: '#b7b7b7'
    },
    Resend: {

    },

    ResendText: {
        fontSize: 16,
        fontWeight: '900',
        marginRight: 10,
        color: '#333'
    },


    Box2: {
        flexGrow: 1,
        width: Dimensions.get('window').width - 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 50,
        borderRadius: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 2,
    },

    ActivationCodeText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '900',
        marginBottom: 20,

    },
    codeShowBox: {
        flexDirection: 'row',
    },
    MyCodeNumber: {

    },

    SaveButton: {
        width: Dimensions.get('window').width - 100,
        marginTop: 40,
        flexGrow: 2,
        justifyContent: "flex-start"
    },
    SaveButtonImage: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,

    },
    SaveText: {
        fontWeight: '500',
        color: '#fff',
        fontSize: 18,
    },





})