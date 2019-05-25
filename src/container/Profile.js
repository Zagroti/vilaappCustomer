import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';




export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    _saveInfo = () => {
        Actions.Home()
    }


    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }

    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //for disable back button haedware
    handleBackButton() {
        // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        // return false;
    }

    render() {

        return (
            <KeyboardAvoidingView style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} behavior="position">

                <View style={styles.Profile}>
                    <View style={styles.icon_parent} >
                        <View style={styles.icon_child} >
                            <View style={styles.icon_cover} >
                                <Image style={styles.icon} source={require('../../Assets/Images/user.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.account_box}>
                        <Text style={styles.account_title} >
                            اطلاعات حساب
                    </Text>
                        <Text style={styles.account_text} >
                            برای دریافت صورت حساب نیاز به پست  الکترونیک و دگیر اطلاعات شما داریم
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

                    <TouchableOpacity style={styles.save_button} onPress={this._saveInfo} activeOpacity={.6}>
                    
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#36a35b', '#6fcf97']}
                            style={styles.linear}>
                            <Text style={styles.save_text} >
                                ذخیره
                            </Text>
                            <View style={styles.right}>
                                <Image style={{ width: 8, resizeMode: "contain" }} source={require('../../Assets/Images/right.png')} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>



                </View>
            </KeyboardAvoidingView>



        );
    }
}

const styles = ({


    Profile: {
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

    },
    save_button: {
        width: Dimensions.get('window').width - 100,
        marginTop: 40,
        // flexGrow: 2,
        justifyContent: "flex-start",
        height: 50,
        marginBottom: 50

    },
    linear: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius:50

    },
    save_text: {
        fontFamily: "ISBold",
        color: '#fff',
        fontSize: 16,
        width: '50%'
    },
    right: {
        width: '40%',
        alignItems: 'flex-end'
    }







})