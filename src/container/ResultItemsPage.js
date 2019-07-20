import React from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components
import ResultItems from '../components/ResultItems';


const IMAGE_HEIGHT = 100;
const SCROLL_HEIGHT = 50;
const THEME_COLOR = "#A52D53";
const TEXT_COLOR = "#fff";

export default class ResultItemsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color_1: '#C72652',
            color_2: '#555',
            color_3: '#555',
            iconColor_1: '#C72652',
            iconColor_2: '#fafafa',
            iconColor_3: '#fafafa',
            active: '#C72652',
            inactive: '#555',
            invisible: '#fafafa',
            tab1: true,
            tab2: false,
            tab3: false,

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

    summaryBg = this.scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: ["transparent", THEME_COLOR],
        extrapolate: "clamp"
    });

    summaryColor = this.scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: ["transparent", TEXT_COLOR],
        extrapolate: "clamp"
    });

    summaryOpacity = this.nScroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: [0, 1],
    });

    sortBg = this.scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: ["rgba(165, 45, 83,.6)", THEME_COLOR],
        extrapolate: "clamp"
    });

    componentDidMount() {

    }

    _changeTab = (tab) => {
        if (tab === 'tab1') {
            this.setState({
                color_1: this.state.active,
                color_2: this.state.inactive,
                color_3: this.state.inactive,
                iconColor_3: this.state.invisible,
                iconColor_2: this.state.invisible,
                iconColor_1: this.state.active,
                tab2: false,
                tab3: false,
                tab1: true,

            })
        } else if (tab === 'tab2') {
            this.setState({
                color_1: this.state.inactive,
                color_2: this.state.active,
                color_3: this.state.inactive,
                iconColor_3: this.state.invisible,
                iconColor_1: this.state.invisible,
                iconColor_2: this.state.active,
                tab2: true,
                tab3: false,
                tab1: false,
            })
        } else if (tab === 'tab3') {
            this.setState({
                color_3: this.state.active,
                color_2: this.state.inactive,
                color_1: this.state.inactive,
                iconColor_1: this.state.invisible,
                iconColor_2: this.state.invisible,
                iconColor_3: this.state.active,
                tab2: false,
                tab3: true,
                tab1: false,
            })
        }
    }


    _showDetail = () => {
        Actions.Details()
    }





    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1, position: 'relative' }}>
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

                {/* summary result */}
                <Animated.View style={{
                    backgroundColor: this.summaryBg,
                    height: 50,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    top: 50,
                    zIndex: 200,
                    paddingHorizontal: 15,
                    justifyContent: 'center'

                }} >
                    <Animated.View style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: this.summaryOpacity,
                        height: 40,
                        borderRadius: 40
                    }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.summary_Text} >محمودآباد</Text>
                            <Icon style={{ marginLeft: 5 }} name="map-marker" size={15} color="#fff" />
                        </View>
                        <Text style={styles.seprator} >|</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.summary_Text}>31 اردیبهشت</Text>
                            <Text style={styles.summary_Text}> - </Text>
                            <Text style={styles.summary_Text}>28 اردیبهشت</Text>
                        </View>
                        <Text style={styles.seprator} >|</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.summary_Text}>800,000</Text>
                            <Text style={styles.summary_Text}> - </Text>
                            <Text style={styles.summary_Text}>400,000</Text>
                        </View>
                        <Text style={styles.seprator} >|</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.summary_Text}>2 شب</Text>
                        </View>
                    </Animated.View>
                </Animated.View>


                <Animated.ScrollView
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { y: this.nScroll } } }
                    ],
                        { useNativeDriver: true },

                    )}
                    style={{
                        position: 'relative', zIndex: 1,
                        // backgroundColor: 'rgba(165, 45, 83,1)' 
                        backgroundColor: 'red'
                    }}>

                    <ImageBackground
                        style={{ width: '100%', height:195, backgroundColor: 'green',  }}
                        imageStyle={{ resizeMode: 'cover' }}
                        source={require('./../../Assets/Images/amol.jpg')}
                    >

                        {/* result description */}
                        <Animated.View style={{
                            transform: [{ translateY: Animated.multiply(this.nScroll, .5) }, { scale: this.imgScale }],
                            height: IMAGE_HEIGHT,
                            backgroundColor: 'rgba(165, 45, 83,.6)',
                            zIndex: 998

                        }}>
                            <View style={styles.details} >
                                <View style={{
                                    width: '100%',
                                    height: IMAGE_HEIGHT,
                                }}>
                                    <Animated.View style={{
                                        width: '100%',
                                        height: IMAGE_HEIGHT,
                                        justifyContent: 'flex-start',
                                        // backgroundColor: 'rgba(165, 45, 83,.1)',
                                        opacity: this.imgOpacity,

                                    }}>
                                        <View style={{
                                            // backgroundColor: 'rgba(165, 45, 83,.7)',
                                            backgroundColor: 'transparent',
                                            height: IMAGE_HEIGHT,
                                            paddingHorizontal: 20,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            // paddingBottom: 40,

                                        }}>
                                            <View style={{
                                                alignItems: 'flex-end',
                                                borderRightWidth: 1,
                                                borderRightColor: "#fff",
                                                paddingRight: 5,
                                            }}>
                                                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                                                    <Text style={styles.detail_view}>ورود : 1398/02/28 </Text>
                                                    <Icon name="calendar-range" style={{ marginLeft: 10 }} size={15} color="#fff" />
                                                </View>
                                                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                                                    <Text style={styles.detail_view}>خروج : 1398/02/31</Text>
                                                    <Icon name="calendar-range" style={{ marginLeft: 10 }} size={15} color="#fff" />
                                                </View>

                                                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                                                    <Text style={styles.detail_view}>مدت اقامت : 2 شب</Text>
                                                    <Icon style={{ marginLeft: 10 }} name="weather-night" size={15} color="#fff" />
                                                </View>
                                            </View>
                                            <View style={{
                                                fontFamily: 'IYB',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 50,
                                            }}>
                                                <Icon name="map-marker" size={15} color="#fff" />
                                                <Text style={{
                                                    color: '#fff',
                                                    fontFamily: 'IYB',
                                                    textAlign: 'center',
                                                    fontSize: 16,
                                                }} >
                                                    محمودآباد
                                            </Text>
                                            </View>



                                            <View style={{
                                                alignItems: 'flex-start',
                                                borderLeftWidth: 1,
                                                borderLeftColor: "#fff",
                                                paddingLeft: 5
                                            }}>
                                                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                                                    <Icon style={{ marginRight: 10 }} name="cash" size={15} color="#fff" />
                                                    <Text style={styles.detail_view}> از 400,000 ت / شب</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                                                    <Icon style={{ marginRight: 10 }} name="cash" size={15} color="#fff" />
                                                    <Text style={styles.detail_view}> تا 800,000 ت / شب</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                                                    <Icon style={{ marginRight: 10 }} name="account-multiple-outline" size={15} color="#fff" />
                                                    <Text style={styles.detail_view}>  تعداد : 5  نفر </Text>
                                                </View>
                                            </View>

                                        </View>


                                    </Animated.View>
                                </View>
                            </View>

                        </Animated.View>


                        {/* sort buttons */}
                        <Animated.View
                            style={{
                                transform: [{ translateY: this.tabY }],
                                width: "100%",
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 999,
                                height:100,
                            }}>
                            <Animated.View
                                style={{
                                    justifyContent: 'center',
                                    width: "100%",
                                    alignItems: 'center',
                                    backgroundColor: this.sortBg,
                                    height:100
                                }}>
                                <View style={{
                                    justifyContent: 'center',
                                    width: "100%",
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    // padding: 10,
                                    // paddingVertical:15,
                                    borderTopRightRadius: 40,
                                    borderTopLeftRadius: 40,
                                    zIndex: 999,
                                    height:100
                                }} >
                                    <View style={styles.tab}  >
                                        <Text style={{
                                            width: '30%',
                                            fontSize: 12,
                                            fontFamily: 'IYB',
                                            paddingRight: 8
                                        }}>
                                            ترتیب بر اساس:
                                        </Text>
                                        <View style={{
                                            width: '70%',
                                            height: 36,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <TouchableOpacity style={[styles.tab_box]} onPress={() => this._changeTab('tab3')}>
                                                <Text style={[styles.tab_text, { color: this.state.color_3 }]}>  تخفیف %</Text>
                                                {
                                                    this.state.tab3 ?
                                                        <Icon name="sort-descending" style={{ marginLeft: 2 }} size={15} color={this.state.iconColor_3} /> : null
                                                }

                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.tab_box]} onPress={() => this._changeTab('tab2')}>
                                                <Text style={[styles.tab_text, { color: this.state.color_2 }]}>  قیمت</Text>
                                                {
                                                    this.state.tab2 ?
                                                        <Icon name="sort-ascending" style={{ marginLeft: 2 }} size={15} color={this.state.iconColor_2} /> : null}

                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.tab_box]} onPress={() => this._changeTab('tab1')}>
                                                <Text style={[styles.tab_text, { color: this.state.color_1 }]}>  امتیاز </Text>
                                                {
                                                    this.state.tab1 ?
                                                        <Icon name="sort-descending" style={{ marginLeft: 2 }} size={15} color={this.state.iconColor_1} /> : null}

                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </Animated.View>

                        </Animated.View>

                    </ImageBackground>

                    <View style={{
                        paddingBottom: 200,
                        backgroundColor: '#fff',
                        zIndex: -90000,
                    }}>

                        {this.state.tab1 ?

                            <View style={{ width: '100%', alignItems: 'center', zIndex: -99999 }}>
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

                            <View style={{ width: '100%', alignItems: 'center', zIndex: -99999 }}>
                                <ResultItems navigate={this._showDetail} />
                                <ResultItems navigate={this._showDetail} />
                            </View>
                            : null

                        }

                        {this.state.tab3 ?

                            <View style={{ width: '100%', alignItems: 'center', zIndex: -99999 }}>
                                <ResultItems navigate={this._showDetail} />
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




const styles = ({


    ResultItemsPage: {
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 200,
        position: 'relative'

    },
    tab: {
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 15,
        height:70,
        backgroundColor: '#f3f3f3',
        borderRadius: 50,
        zIndex: 9,
        paddingVertical:15
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
    summary_Text: {
        fontFamily: 'ISBold',
        fontSize: 10,
        color: '#fff'
    },
    seprator: {
        marginHorizontal: 5,
        color: '#fff'
    },
    tab_box: {
        width: '31%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        backgroundColor: '#fafafa',
        // borderWidth: 1,
        borderRadius: 50

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
        // backgroundColor: '#fff',
    },
    details_right_image: {
        width: '100%',
        height: IMAGE_HEIGHT,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(165, 45, 83,1)',


    },

    detail_view: {
        fontFamily: 'ISFBold',
        fontSize: 10,
        color: '#fff'
    }



})