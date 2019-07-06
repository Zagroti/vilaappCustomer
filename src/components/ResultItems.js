import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ResultItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            touchColor: '#f6f6f6'
        }
    }


    render() {

        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: Dimensions.get('window').width - 20,
                    borderRadius: 5,
                    height: 100,
                    marginBottom: 10,
                    zIndex: 10,
                    backgroundColor: this.state.touchColor,
                    overflow: 'hidden'
                }}
                activeOpacity={.9}
                onPress={this.props.navigate}
                onPressIn={() => this.setState({ touchColor: 'rgba(110, 29, 54, 0.1)' })}
                onPressOut={() => this.setState({ touchColor: '#eee' })}
            >

                <View
                    style={{
                        height: 100,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: Dimensions.get('window').width - 120,
                    }} >
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        height: 100,
                        paddingVertical: 10,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                            <Text style={styles.title}>ویلای رویال </Text>
                            <Icon style={{ transform: [{ rotate: '90deg' }], end: -5 }} name="bookmark" size={30} color="#A52D53" />
                            <Text
                                style={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 1,
                                    fontSize: 9,
                                    color: '#fff',
                                    fontFamily: 'ISFBold'
                                }}
                            >10%</Text>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <View style={styles.location}>
                                <Text style={styles.location_text}>بهشهر , منطقه ی جنگلی عباس آباد </Text>
                                <Icon style={{ marginLeft: 5 }} name="map-marker" size={14} color="#aaa" />
                            </View>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <View style={styles.price}>
                                <Text style={styles.price_small}> تومان</Text>
                                <Text style={styles.price_number}>1,500,000</Text>
                                <Text style={styles.price_text}>اجاره کل برای 3 شب: </Text>
                                <Icon style={{ marginLeft: 5 }} name="cash-multiple" size={14} color="#aaa" />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        height: 100,
                        paddingVertical: 10,
                        justifyContent: 'space-between',
                        marginLeft: 10,
                        alignItems: "flex-start",
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: "center"
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="star" size={14} color="gold" />
                                <Icon name="star" size={14} color="gold" />
                                <Icon name="star" size={14} color="gold" />
                                <Icon name="star" size={14} color="gold" />
                                <Icon name="star" size={14} color="gold" />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Icon name="shield-check" size={15} color="#A52D53" />
                                <Text style={{ fontSize: 10, fontFamily: 'ISBold', color: '#888' }}>آقای کریم پور</Text>
                            </View>
                        </View>

                        <View style={styles.person}>
                            <Text style={styles.person_text}>ظرفیت <Text style={styles.price_number}>10</Text> نفر</Text>
                            <Icon style={{ marginLeft: 5 }} name="account-group-outline" size={14} color="#aaa" />
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

    image_box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 5,
        borderColor: '#A52D53'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#fff',
    },


    title: {
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#A52D53',

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
        marginBottom: 2

    },
    location: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    location_text: {
        fontSize: 10,
        fontFamily: 'ISF',
        color: '#666',
    },

    price: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    price_text: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#666'
    },
    price_small: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#666',
    },
    price_number: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#A52D53',
    }



})




    // <ResultItems navigate={this._showDetail} /> 


