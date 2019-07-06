import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid,
    Animated,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Mapir from 'mapir-react-native-sdk'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components
import ResultItems from '../components/ResultItems';


const IMAGE_HEIGHT = 160;
const SCROLL_HEIGHT = 160

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color_1: '#C72652',
            color_2: '#555',
            color_3: '#555',
            color_4: '#555',
            red: '#C72652',
            black: '#555',
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,

            markers: [
                { latitude: 51.422548, longitude: 35.732573 },
            ],
        };
        // scroll animation 
        this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
    }

    // scroll animation 
    nScroll = new Animated.Value(0);
    scroll = new Animated.Value(0);

    tabY = this.nScroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
        outputRange: [0, 0, 1]
    });
    imgScale = this.nScroll.interpolate({
        inputRange: [-25, 0],
        outputRange: [1.1, 1],
        extrapolateRight: "clamp"
    });
    imgOpacity = this.nScroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: [1, 0],
    });


    componentDidMount() {

        // for map
        {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.'
                }
            ).then(granted => {
                console.log(granted);
                resolve();
            }).catch(err => {
                console.warn(err);
                reject(err);
            });
        }

    }

    _changeTab = (tab) => {
        if (tab === 'tab1') {
            this.setState({
                color_1: this.state.red,
                color_2: this.state.black,
                color_3: this.state.black,
                color_4: this.state.black,
                tab2: false,
                tab3: false,
                tab4: false,
                tab1: true,

            })
        } else if (tab === 'tab2') {
            this.setState({
                color_3: this.state.black,
                color_1: this.state.black,
                color_4: this.state.black,
                color_2: this.state.red,
                tab2: true,
                tab1: false,
                tab3: false,
                tab4: false,
            })
        } else if (tab === 'tab3') {
            this.setState({
                color_1: this.state.black,
                color_2: this.state.black,
                color_4: this.state.black,
                color_3: this.state.red,
                tab3: true,
                tab2: false,
                tab1: false,
                tab4: false,
            })
        } else if (tab === 'tab4') {
            this.setState({
                color_1: this.state.black,
                color_2: this.state.black,
                color_3: this.state.black,
                color_4: this.state.red,
                tab4: true,
                tab3: false,
                tab2: false,
                tab1: false,
            })
        }
    }


    _showDetail = () => {
        Actions.Details()
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={styles.menu_icon}
                        onPress={() => Actions.Support()}>
                        <View style={styles.notification_circle} ></View>
                        <Icon name="bell-outline" size={32} color="#B22850" />
                    </TouchableOpacity>
                    <Text style={styles.title} >  نتایج جستجو - 218#</Text>
                    <TouchableOpacity style={styles.menu_icon} onPress={() => Actions.pop()} >
                        <Icon name="arrow-right" size={28} color="#B22850" />
                    </TouchableOpacity>
                </View>

                <Animated.ScrollView
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
                    style={{ zIndex: 0 }}>
                    <Animated.View style={{
                        transform: [{ translateY: Animated.multiply(this.nScroll, .5) }, { scale: this.imgScale }],
                        opacity: this.imgOpacity,
                        height: IMAGE_HEIGHT,
                    }}>

                        <View style={styles.details} >
                            <View style={styles.details_map}>
                                <Mapir
                                    logoEnabled={true}
                                    accessToken={'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5ZjlmMWZhNDA4YzM0ODI2ZjcxZGI5YTdlM2U2ZmVjNDEzMzNmMDU0MjVhM2MzOTM0NmMwNTlkMzBiMzcyYjA5YzU1OGZjOGU4NTJmNWJhIn0.eyJhdWQiOiJteWF3ZXNvbWVhcHAiLCJqdGkiOiIzOWY5ZjFmYTQwOGMzNDgyNmY3MWRiOWE3ZTNlNmZlYzQxMzMzZjA1NDI1YTNjMzkzNDZjMDU5ZDMwYjM3MmIwOWM1NThmYzhlODUyZjViYSIsImlhdCI6MTU1OTQ1NTIzMiwibmJmIjoxNTU5NDU1MjMyLCJleHAiOjE1NTk0NTg4MzIsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyIsImVtYWlsIl19.JNowwSPWaoVoJ1Omirk9OTtkDySsNL91nP00GcCARdM-YHoTQYw3NZy3SaVlAsbafO9oPPvlVfhNIxPIHESACZATutE3tb7RBEmQGEXX-8G7GOSu8IzyyLBmHaQe75LtisgdKi-zPTGsx8zFv0Acn6HrDDxFrKFNtmI85L3jos_GVxvYYhHWKAez8mbJRHcH1b15DrwgWAhCjO2p_HqpuGLdRF1l03J6HsOnJLMid2997g7iAVTOa8mt2oaEPvmwA_f6pwFZSURqw-RJzdN_R8IEmtqWQq5ZNTEppVaV82yuwfnSmrb0_Sak2hfBIiLwQeCMsnfhU_CvUbE_1rukmQ'}
                                    zoomLevel={13}
                                    centerCoordinate={[51.422548, 35.732573]}
                                    style={{ flex: 1 }}
                                    logoEnabled={false}
                                >
                                    <Mapir.Marker
                                        id={'1'}
                                        coordinate={[51.422548, 35.732573]}
                                    />
                                </Mapir>

                            </View>

                            <View style={{  width: '50%', height: 160 }}>
                                <ImageBackground style={styles.details_right_image}
                                    source={require('./../../Assets/Images/background.png')}
                                    imageStyle={{ resizeMode: 'cover', }}
                                    resizeMode="contain"
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.detail_view}>از تاریخ  1398/03/31 </Text>
                                        <Icon name="calendar-range" style={{ marginLeft: 10 }} size={20} color="#fff" />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.detail_view}>تا تاریخ  1398/04/01</Text>
                                        <Icon name="calendar-range" style={{ marginLeft: 10 }} size={20} color="#fff" />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.detail_view}> تا 400,000 تومان / شب</Text>
                                        <Icon style={{ marginLeft: 10 }} name="cash" size={20} color="#fff" />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.detail_view}> تا 800,000 تومان / شب</Text>
                                        <Icon style={{ marginLeft: 10 }} name="cash" size={20} color="#fff" />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.detail_view}>  تعداد: 5  نفر </Text>
                                        <Icon style={{ marginLeft: 10 }} name="account-multiple-outline" size={20} color="#fff" />
                                    </View>
                                </ImageBackground>
                            </View>


                        </View>

                    </Animated.View>


                    <Animated.View
                        style={{
                            transform: [{ translateY: this.tabY }],
                            zIndex: 100,
                            width: "100%",
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            paddingVertical: 10,
                        }}>
                        <View style={styles.tab}  >
                            <Text style={{ width: '20%', fontSize: 10, fontFamily: 'ISBold' }}  >ترتیب بر اساس:</Text>
                            <View style={{
                                width: '80%',
                                height: 40,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                }}>
                                <TouchableOpacity style={[styles.tab_box, { borderColor: this.state.color_1 }]} onPress={() => this._changeTab('tab1')}>
                                    <Text style={[styles.tab_text, { color: this.state.color_1 }]}>  تخفیف %</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.tab_box, { borderColor: this.state.color_2 }]} onPress={() => this._changeTab('tab2')}>
                                    <Text style={[styles.tab_text, { color: this.state.color_2 }]}>  فاصله </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.tab_box, { borderColor: this.state.color_3 }]} onPress={() => this._changeTab('tab3')}>
                                    <Text style={[styles.tab_text, { color: this.state.color_3 }]}>  قیمت</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.tab_box, { borderColor: this.state.color_4 }]} onPress={() => this._changeTab('tab4')}>
                                    <Text style={[styles.tab_text, { color: this.state.color_4 }]}>  امتیاز</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </Animated.View>
                    <View style={{ marginBottom: 200 }}>

                        {this.state.tab1 ?

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                            </View>
                            : null

                        }

                        {this.state.tab2 ?

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                            </View>
                            : null

                        }

                        {this.state.tab3 ?

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                            </View>
                            : null

                        }

                        {this.state.tab4 ?

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                            </View>
                            : null

                        }
                    </View>



                </Animated.ScrollView>
            </View>
        )
    }
}

export default Test


const styles = ({


    ResultItemsPage: {
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 160,
        position: 'relative'

    },
    tab: {
        width: '100%',
        height: 40,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        paddingVertical: 5,
        alignItems: 'center',
    },
    notification_circle: {
        width: 10,
        height: 10,
        borderRadius: 7,
        backgroundColor: '#B22850',
        end: 13,
        top: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    menu_icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333',
        textAlign: 'center',
    },
    tab_box: {
        width: '22%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        backgroundColor: '#f6f6f6',
        borderBottomWidth: 1,

    },

    tab_text: {
        fontSize: 10,
        fontFamily: 'ISBold',
        marginLeft: 5,
    },
    line: {
        width: 1,
        height: '80%',
        backgroundColor: '#ddd'
    },
    details: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    details_right_image: {
        width: '100%',
        height: 160,
        backgroundColor: '#A52D53',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 160,
        paddingRight: 10,

    },
    details_map: {
        width: '50%',
        height: 160,
    },

    detail_view: {
        fontFamily: 'ISFBold',
        fontSize: 14,
        color: '#fff'
    }



})