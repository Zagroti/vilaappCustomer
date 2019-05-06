
import {Text, View, Dimensions} from 'react-native';



const NoRequest = (
    <View style={styles.noRequest}>
        <Image style={styles.marker} source={require('../../Assets/Images/mappin.png')} />
        <Text style={styles.noRequestTitle}>چیزی برای نمایش وجود ندارد</Text>
        <Text style={styles.noRequestText}>برای درخواست دکمه ی نشانه گر را فشار دهید</Text>
    </View>
)

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
        fontSize: 20,
        fontWeight: '500',
        color: '#333'
    },
    noRequestText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555'
    },

})

export default NoRequest;