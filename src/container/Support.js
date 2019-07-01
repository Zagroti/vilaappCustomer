import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

//components 
import GradientButton from '../components/GradientButton';



export default class Support extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <KeyboardAvoidingView style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} behavior="position">

                <View style={styles.Profile}>
                   

                    <View style={styles.account_box}>
                        <Text style={styles.account_title} >
                           پشتیبانی
                        </Text>
                    </View>
                    <View style={styles.account_form}>
                        <TextInput
                            style={styles.form_inputs}
                            onChangeText={(countryCode) => this.setState({ countryCode })}
                            placeholder="نام و نام خانوادگی"
                        />
                        <TextInput
                            style={styles.form_inputs}
                            onChangeText={(countryCode) => this.setState({ countryCode })}
                            placeholder="ایمیل"
                        />
                        <TextInput
                            style={styles.form_inputs}
                            onChangeText={(countryCode) => this.setState({ countryCode })}
                            placeholder="شهر"
                        />
                        <TextInput
                            style={styles.form_inputs}
                            onChangeText={(countryCode) => this.setState({ countryCode })}
                            placeholder="آدرس"
                        />

                    </View>

 

                    <GradientButton
                            width={Dimensions.get('window').width - 100}
                            press={this._saveInfo}
                            activeOpacity={.6}
                            color_1="#36a35b"
                            color_2="#6fcf97"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ذخیره"
                            top={40}
                            bottom={0}
                        />



                </View>
            </KeyboardAvoidingView>



        );
    }
}

const styles = ({


    Support: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 70,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon_parent: {
        width: 90,
        height: 90,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon_cover: {
        width: 50,
        height: 50,
        backgroundColor: '#C92652',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        backgroundColor: '#C92652',
    },
    account_box: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 100,
        padding: 20,
        borderRadius: 10,
    },
    account_title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'
    },
    account_text: {
        fontSize: 12,
        fontFamily: 'IS',
        color: '#aaa'
    },

    account_form: {

    },
    form_inputs: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width - 100,
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        paddingHorizontal: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        textAlign:'right'
    },






})