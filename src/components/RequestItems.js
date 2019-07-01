import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RequestItems extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <TouchableOpacity style={styles.RequestItems} activeOpacity={.8} onPress={this.props.navigate}>
                <View style={styles.left} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                        <Text style={{
                            color: '#fff',
                            fontFamily: 'IS',
                            fontSize: 10,
                        }}>(تومان)</Text>
                        <Text style={{
                             color: '#fff',
                             fontFamily: 'ISFBold',
                             fontSize: 12,
                             zIndex: 10
                        }}>  قیمت </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={styles.price}> 500,000 </Text>
                        <Text style={{ color: '#fff' }}> - </Text>
                        <Text style={styles.price}> 100,000 </Text>
                    </View>
                </View>

                <View style={styles.right}>

                    <View style={styles.vila_info}>

                        <Text style={styles.vila_name}>ویلای دریاکنار</Text>

                        <View style={styles.vila_detail}>

                            <View style={styles.times}>
                                <View style={styles.start_time}>
                                    <Text style={styles.time_show}>10/10/1398</Text>
                                    <Text style={styles.time_title}>تاریخ شروع</Text>
                                </View>

                                <View style={styles.end_time}>
                                    <Text style={styles.time_show}>3 شب</Text>
                                    <Text style={styles.time_title}>تاریخ پایان</Text>
                                </View>
                            </View>

                            <View style={styles.icon_right}>
                                <Text style={styles.circle}></Text>
                                <Text style={styles.line}></Text>
                                <Text style={styles.circle}></Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.number_box}>
                        <Text style={styles.number}>3</Text>
                        <Text style={styles.case}>مورد</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

const styles = ({
    RequestItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        height: 100,
        marginBottom: 20,
        zIndex: 2,
        height: 90
    },

    right: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    number_box: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        borderLeftColor: '#f6f6f6',
        borderLeftWidth: 2,
        height: 90,
    },
    number: {
        fontSize: 50,
        fontFamily: 'ISFBold',
        height: 50,
        color: '#333',
        lineHeight: 70

    },
    case: {
        fontSize: 14,
        fontFamily: 'ISMedium',
        color: '#333'
    },



    vila_info: {
        justifyContent: 'center',
        paddingRight: 10,

    },
    vila_name: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'

    },
    vila_detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },




    icon_right: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: '#6FCF97',
        width: 8,
        height: 8,
        borderRadius: 4,
        borderColor: "#57a075",
        borderWidth: 1,
    },
    line: {
        borderStyle: 'dashed',
        borderColor: "#57a075",
        borderWidth: 1,
        borderRadius: 2,
    },
    times: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    start_time: {
        flexDirection: 'row',
        borderColor: "#f6f6f6",
        borderBottomWidth: 1,
        borderRadius: 2,
    },
    end_time: {
        flexDirection: 'row',
    },
    time_title: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#888',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    time_show: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginVertical: 5,

    },



    left: {
        backgroundColor: '#6FCF97',
        borderRadius: 5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#57a075'

    },
    price: {
        padding: 5,
        color: '#fff',
        fontFamily: 'ISFBold',
        fontSize: 12,
        zIndex: 10
    }

})


{/* 

    <ResultRequest navigate={this.showRequest} />  

*/}
