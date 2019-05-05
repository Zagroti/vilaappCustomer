import React, { Component } from 'react';
import { Text, View, Dimensions, ImageBackground, 
         TouchableOpacity, 
         TouchableWithoutFeedback,
         Keyboard
        
        } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class EnterCode extends Component {




    _sendNumber = () => {
        Actions.sendNumber()

    }


    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()} accessible={false}>
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
                            <Text style={styles.MyCodeNumber}>3</Text>
                            <Text style={styles.MyCodeNumber}>4</Text>
                            <Text style={styles.MyCodeNumber}>0</Text>
                            <Text style={styles.MyCodeNumber}>9</Text>
                            <Text style={styles.MyCodeNumber}>2</Text>
                            <Text style={styles.MyCodeNumber}>8</Text>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.SaveButton} onPress={this._enterCode} activeOpacity={.6}>
                        <ImageBackground style={styles.SaveButtonImage}
                            imageStyle={{
                                borderRadius: 50,
                            }}
                            source={require('./../Assets/Images/save.png')}
                        >
                            <Text style={styles.SaveText} >
                                ذخیره
                    </Text>
                        </ImageBackground>
                    </TouchableOpacity>



                </View>
                </TouchableWithoutFeedback>
        );
    }
}

const styles = ({
    x:{
        flex:1
    },
    EnterCode: {
        backgroundColor: '#f6f6f6',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

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
        height: 10
    },

    ActivationCodeText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '900',
        marginBottom: 20,

    },
    codeShowBox: {
        flexDirection:'row',
    },
    MyCodeNumber:{
        marginHorizontal: 5,
        paddingHorizontal: 5,
        fontSize:20,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#dfdfdf',
        fontWeight:'900'
    },

    SaveButton: {
        width: Dimensions.get('window').width - 100,
        marginTop: 40,
        flexGrow: 1,
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