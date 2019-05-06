import React , { Component } from 'react';
import { Text, View, Dimensions , Image } from 'react-native';

export default class NoRequest extends Component {




    render() {

        return (
            <View style={styles.noRequest}>
                <Image style={styles.marker} source={require('../../Assets/Images/mappin.png')} />
                <Text style={styles.noRequestTitle}>چیزی برای نمایش وجود ندارد</Text>
                <Text style={styles.noRequestText}>برای درخواست دکمه ی نشانه گر را فشار دهید</Text>
            </View>
        )
    }
}

const styles = ({
    noRequest: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 100,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },

    marker: {
        marginBottom: 20,
        width: 50,
        height: 50
    },

    noRequestTitle: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'
    },
    noRequestText: {
        fontSize: 12,
        fontFamily: 'ISBold',        
        color: '#555'
    },

})
