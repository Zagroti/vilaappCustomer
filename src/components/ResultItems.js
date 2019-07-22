import React from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var touchColor = '#f3f3f3'

const ResultItems = (props) => (

    <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: Dimensions.get('window').width - 30,
            borderRadius: 15,
            height: 100,
            marginBottom: 10,
            marginTop: 5,
            backgroundColor: touchColor,
            overflow: 'hidden',
        }}
        activeOpacity={.9}
        onPress={props.navigate}
        onPressIn={() => touchColor = 'rgba(110, 29, 54, 0.1)'}
        onPressOut={() => touchColor = '#eee'}
    >


        <View style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: 100,
            width: Dimensions.get('window').width - 130,
            paddingRight: 10,
            paddingVertical: 10,
        }}>
            <View style={{ position: 'absolute', left: 0, top: -10 }}>
                <Icon style={{ transform: [{ rotate: '0deg' }], end: -7 }} name="bookmark" size={40} color="#A52D53" />
                <Text
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 8,
                        fontSize: 10,
                        color: '#fff',
                        fontFamily: 'ISFBold'
                    }}
                >24
                    </Text>
                <Text style={{ fontSize: 8, color: '#fff', top: 12, right: 2, position: 'absolute' }} > %</Text>
            </View>

            {/* limit character 25 english or 50 persian */}
            <Text style={styles.title}>ویلای لوکس ساحلی</Text>

            <View >
                <View style={styles.price}>
                    <Text style={styles.price_small}> ت</Text>
                    <Text style={styles.price_number}>1,500,000</Text>
                    <Text style={styles.price_text}>اجاره کل / 3 شب :  </Text>
                    <Icon style={{ marginLeft: 5 }} name="cash-multiple" size={14} color="#aaa" />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "center",
                // paddingBottom: 10,
                width: Dimensions.get('window').width - 160
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                    <Icon name="star" size={16} color="gold" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="shield-check" size={15} color="#A52D53" />
                    <Text style={{ fontSize: 12, fontFamily: 'ISBold', color: '#888' }}>آقای کریم پور</Text>
                </View>
            </View>
        </View>


        <View style={styles.image_box} >
            <Image style={styles.image} source={require('../../Assets/Images/detail.jpg')} />
        </View>

    </TouchableOpacity>
)

export default ResultItems;


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
        fontSize: 14,
        fontFamily: 'IYB',
        color: '#A52D53',
        lineHeight:18,
    },

    person: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    person_text: {
        fontSize: 10,
        fontFamily: 'ISFMedium',
        color: '#888',
        marginBottom: 2,
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
        fontSize: 12,
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


