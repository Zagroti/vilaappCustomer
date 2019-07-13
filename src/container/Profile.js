import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    NativeModules,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components 
import GradientButton from '../components/GradientButton';





// import ImagePicker from 'react-native-image-picker';
var ImagePicker = NativeModules.ImageCropPicker;

// images for upload
var imgs = []


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


    // pick image 
    pickSingleImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then((image) => {
            imgs.push({ uri: image.path, width: image.width, height: image.height, mime: image.mime });
            this.setState({
                image: imgs
            });
        })
    }

    // show selected images
    renderAsset(image) {

        // return <Image  style={styles.images_box} source={image} />

        return <ImageBackground style={styles.images_box} imageStyle={{ borderRadius: 10 }} source={image}>
            <View style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                padding: 2,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                alignItems: 'center'
            }}>
                <Icon name="delete" size={20} color="red" />

            </View>
        </ImageBackground>
    }


    // delete selected images
    _deleteImage = (key) => {
        imgs.splice(0, 1)
        this.setState({
            image: null,
        });
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
                        <View style={styles.icon_cover} >
                            {this.state.image ? this.state.image.map(i =>
                                <TouchableOpacity activeOpacity={.8} style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 100,
                                    overflow: 'hidden'
                                }} onPress={() =>
                                    this._deleteImage(i.uri)} key={i.uri}>{this.renderAsset(i)}
                                </TouchableOpacity>)
                                :
                                <TouchableOpacity  onPress={this.pickSingleImage} activeOpacity={.8} >
                                    <Icon style={styles.icon} size={40} name="account-outline" color="#fff" />
                                </TouchableOpacity>}
                            {
                                !this.state.image ?
                                    <TouchableOpacity activeOpacity={.8}
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,.3)',
                                            padding: 2,
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            left: 0,
                                            alignItems: 'center',
                                            width: '100%',
                                            height: 20
                                        }}
                                        onPress={this.pickSingleImage}>
                                        <Icon name="image-plus" size={16} color="#fff" />
                                    </TouchableOpacity>
                                    : null
                            }

                        </View>
                    </View>

                    <View style={styles.account_box}>
                        <Text style={styles.account_title} >
                            اطلاعات حساب
                    </Text>
                        <Text style={styles.account_text} >
                            برای دریافت صورت حساب نیاز به پست  الکترونیک و دیگر اطلاعات شما داریم
                        </Text>
                    </View>
                    <View style={styles.account_form}>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="نام و نام خانوادگی"
                            />
                            <Icon style={{ marginLeft: 5 }} size={25} name="account-outline" color="#636363" />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="ایمیل"
                            />
                            <Icon style={{ marginLeft: 5 }} size={25} name="email-outline" color="#636363" />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="شهر"
                            />
                            <Icon style={{ marginLeft: 5 }} size={25} name="phone" color="#636363" />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="آدرس"
                            />
                            <Icon style={{ marginLeft: 5 }} size={25} name="phone-classic" color="#636363" />
                        </View>

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


    Profile: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 70,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon_parent: {
        width: 80,
        height: 80,
        borderWidth: 10,
        borderColor: '#f0f0f0',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon_cover: {
        width: 60,
        height: 60,
        backgroundColor: '#C92652',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    images_box: {
        width: 60,
        height: 60,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        position: 'relative'
    },

    icon: {
    },
    account_box: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 100,
        paddingVertical: 20,
        borderRadius: 10,
    },
    account_title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333'
    },
    account_text: {
        fontSize: 12,
        fontFamily: 'IS',
        color: '#aaa'
    },
    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 40,
        width: Dimensions.get('window').width - 100,

    },
    form_inputs: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%'

    },
    input_icon: {
        width: 20,
        resizeMode: 'contain'

    },





})