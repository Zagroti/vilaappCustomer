import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ResultItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            touchColor: '#fff'
        }
    }


    render() {

        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: Dimensions.get('window').width - 50,
                    padding: 5,
                    borderRadius: 10,
                    height: 100,
                    marginBottom: 10,
                    zIndex: 10,
                    backgroundColor: this.state.touchColor
                }}
                activeOpacity={.9}
                onPress={this.props.navigate}
                onPressIn={() => this.setState({ touchColor: '#FFF7DE' })}
                onPressOut={() => this.setState({ touchColor: '#fff' })}
            >
                <View
                    style={{
                        backgroundColor: this.state.touchColor,
                        padding: 10,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 30,
                        flex: 3,
                        height: 90
                    }} >

                    <View style={styles.up}>
                        <Text style={styles.owner_answer}>پذیرفته شده</Text>
                        <Text style={styles.title}>ویلای رویال </Text>
                    </View>

                    <View style={styles.down}>

                        <View style={styles.left}>
                            <View style={styles.available}>
                                <Text style={styles.available_text}>قابل دسترس</Text>
                                <Icon style={{marginLeft:5}} name="check-circle-outline" size={20} color="#6FCF97" />
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.price_small}>هر شب</Text>
                                <Text style={styles.price_text}>320,000 ت </Text>
                                <Icon style={{marginLeft:5}} name="cash-multiple" size={20} color="#636363" />
                            </View>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.person}>
                                <Text style={styles.person_text}>ظرفیت 10 نفر</Text>
                            <Icon style={{marginLeft:5}} name="account-group-outline" size={20} color="#636363" />
                                
                            </View>
                            <View style={styles.location}>
                                <Text style={styles.location_text}>بابلسر</Text>
                            <Icon style={{marginLeft:5}} name="map-marker" size={20} color="#636363" />
                                
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.image_box} >
                    <Image style={styles.image} source={require('../../Assets/Images/detail.jpg')} />

                </View>


            </TouchableOpacity>
        )
    }
}

const styles = ({
    ResultItems: {

    },
    detailes: {

    },
    image_box: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff',
    },
    up: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:2

    },
    down: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        width: '50%'
    },
    left: {
        width: '50%'

    },

    title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'
    },
    owner_answer: {
        fontSize: 8,
        fontFamily: 'ISBold',
        color: '#fff',
        backgroundColor: '#6FCF97',
        borderRadius: 30,
        paddingHorizontal: 10,
        textAlign: 'center',
        start: -20
    },
    person: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    person_text: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#888',
        marginBottom:2

    },
    location: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    location_text: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#aaa',
    },
    available: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom:2

    },
    available_text: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#333'
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    price_text: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#333'
    },
    price_small: {
        fontSize: 6,
        fontFamily: 'ISFBold',
        color: '#333',
        marginTop: 4
    },
    icon: {
        width: 12,
        height: 12,
        marginLeft: 8,
    },
    location_icon: {
        width: 12,
        height: 15,
        marginLeft: 8,
    }



})


{/* 

    <ResultItems navigate={this._showDetail} /> 


*/}