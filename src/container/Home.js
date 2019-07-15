import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    TouchableOpacity,
    BackHandler,
    ScrollView,
    Modal,
    PermissionsAndroid,
    Animated
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';
import PersianDatePicker from "rn-persian-date-picker";
import Mapir from 'mapir-react-native-sdk'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
// import Slider from '@react-native-community/slider';
import Slider from "react-native-slider";

// import { Slider} from 'react-native'

//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';
import GradientButton from '../components/GradientButton';
import Counter from '../components/Counter';



var moment = require('moment-jalaali')
moment().format('jYYYY/jM/jD')


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            miniModal: false,
            city: 'آمل',
            selectStart: false,
            minRangeSlider: 0,
            maxRangeSlider: 1000000,
            sliderValue: 100000,
            nights: 1,
            persons: 1
        };
    }



    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }


    componentDidMount() {
        // for disable back btn
        BackHandler.addEventListener('hardwareBackPress', this._handleBackButton);

        {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.'
                }
            ).then(granted => {
                // console.log(granted);
                resolve();
            }).catch(err => {
                // console.warn(err);
                reject(err);
            });
        }
    }



    _back = () => {
        if (this.state.modalVisible) {
            alert(0)
        }
        return true
    }


    componentWillUnmount() {
        // for disable back btn
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackButton);
    }


    //for disable back button hardware
    _handleBackButton() {
        return true
    }

    //footer actions
    _navigate = (path) => {
        if (path === 'profile') {
            Actions.Profile()
        }
        if (path === 'history') {
            return false;
        }

        this.refs['DRAWER_REF'].closeDrawer();

    }





    // log out
    _exit = () => {
        this._removeData()
        Actions.SendNumber()
    }
    _removeData = async () => {
        try {
            await AsyncStorage.removeItem('login')
            console.log(AsyncStorage.getItem('login'))
            return true;
        } catch (e) {
            return false
        }
    }





    // got to vila cases
    _showRequestsNavigate = () => {
        Actions.ResultItemsPage()
    }

    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    // open date picker and set date
    _startDateOpen = async () => {
        this.refs['STARTPICKER'].showPicker()
        this.setState({ selectStart: true })
    }



    _counterHandler = (e, method) => {
        if (method === 'night') {
            this.setState({ nights: e })
        } else {
            this.setState({ persons: e })
        }
    }

    _selectCity = (city) => {
        this.setState({
            city: city,
            miniModal: false
        })
    }
    _setProps = async(name,val) =>{ 
        
        await this.setState({
            [name] : val
        })
    }



    render() {

        // drawer menu 
        const navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                {/* <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text> */}
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                    backgroundColor: '#b04267',
                    width: '100%',
                    marginBottom: 10
                }} >
                    <View style={styles.icon_parent} >
                        <View style={styles.icon_child} >
                            <Image style={styles.icon} source={require('../../Assets/Images/natalie.jpeg')} />
                        </View>
                    </View>
                    <View style={styles.person_desc} >
                        <Text style={styles.person_name} >جمیله باغی تبار</Text>
                    </View>

                </View>
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={(e) => this._navigate('profile')}>
                    <Text style={styles.drawer_text}>پروفایل</Text>
                    <Icon name="account-outline" size={24} color="#b04267" />
                </TouchableOpacity>

                {/* got to history */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={(e) => this._navigate('history')}>
                    <Text style={styles.drawer_text}>تاریخچه</Text>
                    <Icon name="calendar-clock" size={24} color="#b04267" />
                </TouchableOpacity>

                {/* EXIT */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={this._exit}>
                    <Text style={styles.drawer_text}>خروج</Text>
                    <Icon name="exit-to-app" size={24} color="#b04267" />
                </TouchableOpacity>
            </View>
        );

        const { startDate } = this.state

        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerSlide={(e) => { console.log('1') }}
                onDrawerStateChanged={(e) => { console.log('2') }}
                onDrawerClose={(e) => { console.log('close') }}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >
                <View style={styles.home_cover} >

                    {/* MENU */}
                    <View style={styles.menu} >
                        <TouchableOpacity
                            style={styles.menu_icon}
                            onPress={() => Actions.Support()}>
                            <View style={styles.notification_circle} ></View>
                            <Icon name="bell-outline" size={32} color="#B22850" />
                        </TouchableOpacity>
                        <Text style={styles.title} >درخواست های من</Text>
                        <TouchableOpacity style={styles.menu_icon} onPress={this._openDrawer}>
                            <Icon name="menu" size={32} color="#B22850" />
                        </TouchableOpacity>
                    </View>


                    {/* request box  */}
                    <View style={styles.up} >
                        <ScrollView contentContainerStyle={styles.requestBox} >
                            {/* <NoRequest /> */}
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                        </ScrollView>
                    </View>
                    <TouchableOpacity activeOpacity={.8} style={styles.modal_button}
                        onPress={() => { this.setModalVisible(true) }}>
                        <View style={styles.middle_inside}>
                            <Icon name="magnify" size={36} color="#fff" />
                        </View>
                    </TouchableOpacity>



                </View>


                {/* <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(false);
                        }}> */}


                {/* MODAL */}
                {
                    this.state.modalVisible ?
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#fff'
                        }} >

                            {/* time select background  */}
                            {
                                this.state.selectStart ?
                                    <Text style={{
                                        width: Dimensions.get('window').width,
                                        height: Dimensions.get('window').height,
                                        backgroundColor: 'rgba(0,0,0,.5)', position: 'absolute', top: 0, right: 0, left: 0, bottom: 0,
                                        zIndex: 20000
                                    }}
                                        onPress={() => {
                                            this.setState({ selectStart: false })
                                            this.refs['STARTPICKER'].hidePicker()
                                        }}
                                    >
                                    </Text> : null
                            }



                            <View style={{ flex: 1, position: 'relative', backgroundColor: '#f6f6f6' }} >
                                {/* Close modal  */}

                                <View
                                    style={styles.title_box}>
                                    <View style={styles.title_child}>
                                        <Text style={styles.modal_title}>
                                            درخواست جدید
                                        </Text>
                                        {/* Close modal  */}
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setModalVisible(false);
                                            }}>
                                            <Icon size={40} name="close" color="#C50143" />

                                        </TouchableOpacity>
                                    </View>

                                </View>



                                {/* Modal Body */}
                                <View style={styles.modal_body} >

                                    <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, alignItems: "center" }} >
                                        {/* places */}
                                        <View style={styles.modal_boxes} >
                                            <View style={{ width: '50%', height: 50, borderRadius: 5, justifyContent: 'center' }}>
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ miniModal: true })
                                                }}>
                                                    <Text
                                                        style={{ fontSize: 18, color: '#555', padding: 10, fontFamily: 'ISBold', width: '100%' }}
                                                    >ایران ، {this.state.city}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.right_icon_box}>
                                                <Text style={{
                                                    fontSize: 12,
                                                    fontFamily: 'ISBold',
                                                    alignItems: 'center',
                                                    color: '#636363'
                                                }}>مکان  </Text>
                                                <Icon style={{ marginLeft: 5 }} size={22} name="map-marker-outline" color="#636363" />
                                            </View>

                                            {/* modal for select city  */}
                                            <Modal
                                                animationType="fade"
                                                transparent={true}
                                                visible={this.state.miniModal}
                                                onRequestClose={() => {
                                                    this.setState({ miniModal: false })
                                                }}>
                                                <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ miniModal: false })} >
                                                    <View style={styles.picker_box}>
                                                        <ScrollView
                                                            contentContainerStyle={{
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                            style={{ width: '100%' }}>
                                                            <TouchableOpacity
                                                                style={styles.picker_button}
                                                                activeOpacity={.3}
                                                                onPress={() => this._selectCity('آمل')}>
                                                                <Text style={styles.picker_item} >آمل</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={styles.picker_button}
                                                                activeOpacity={.3}
                                                                onPress={() => this._selectCity('بابل')}>
                                                                <Text style={styles.picker_item} >بابل</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={styles.picker_button}
                                                                activeOpacity={.3}
                                                                onPress={() => this._selectCity('کیش')}>
                                                                <Text style={styles.picker_item} >کیش</Text>
                                                            </TouchableOpacity>
                                                        </ScrollView>
                                                    </View>
                                                </TouchableOpacity>
                                            </Modal>
                                        </View>



                                        {/* date */}
                                        <View style={styles.modal_boxes} >
                                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                                <TouchableOpacity style={styles.select_date} onPress={this._startDateOpen} >
                                                    <View style={{
                                                        width: '100%',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        height: 50
                                                    }}>
                                                        <Text style={styles.show_selected_date}>{moment(startDate).format("jYYYY/jMM/jDD")}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={styles.right_icon_box}>
                                                    <Text style={{
                                                        fontSize: 12,
                                                        fontFamily: 'ISBold',
                                                        alignItems: 'center',
                                                        color: '#636363'
                                                    }}>تاریخ شروع </Text>
                                                    <Icon style={{ marginLeft: 5 }} size={22} name="calendar-range" color="#636363" />
                                                </View>


                                                <PersianDatePicker
                                                    type="Jalali"
                                                    yearCount={10}
                                                    onConfirm={date => {
                                                        this.setState({ startDate: date, selectStart: false });
                                                    }}
                                                    ref={'STARTPICKER'}
                                                    pickerBg={[248, 248, 248, 1]}
                                                    pickerFontSize={24}
                                                    pickerToolBarFontSize={15}
                                                    pickerFontFamily="ISBold"
                                                    pickerConfirmBtnColor={[0, 123, 255, 1]}
                                                    pickerCancelBtnColor={[220, 53, 69, 1]}
                                                    pickerTitleText="تاریخ شروع"
                                                    pickerTitleColor={[99, 99, 99, 1]}
                                                    pickerFontFamily="ISMedium"
                                                    onPickerCancel={() => {
                                                        this.setState({ selectStart: false });
                                                    }}
                                                />
                                            </View>

                                        </View>

                                        {/* nights */}
                                        <View style={styles.modal_boxes}>
                                            <Counter       
                                                name="name" 
                                                _returnValue={this._setProps} 
                                                val={this.state.nights}  />

                                            <View style={styles.capacity} >
                                                <Text style={styles.modal_titles} >شب </Text>
                                                <Icon style={{ marginLeft: 5 }} size={22} name="weather-night" color="#636363" />
                                            </View>
                                        </View>

                                        {/* capacity  */}
                                        <View style={styles.modal_boxes}>
                                            {/* <Counter counter={(e) => this._counterHandler(e, 'persons')} number={this.state.persons} /> */}
                                            <Counter       
                                                name="persons" 
                                                _returnValue={this._setProps} 
                                                val={this.state.persons}  />

                                            <View style={styles.capacity} >
                                                <Text style={styles.modal_titles} >ظرفیت </Text>
                                                <Icon style={{ marginLeft: 5 }} size={22} name="account-group-outline" color="#636363" />
                                            </View>
                                        </View>

                                        {/* price */}
                                        <View style={styles.modal_boxes}>
                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                alignItems: 'center',
                                                height: 60,
                                                position: 'relative',
                                            }} >
                                                <View style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }} >
                                                    <Text style={{
                                                        color: '#A52D53',
                                                        fontFamily: 'ISBold',
                                                        fontSize: 10
                                                    }}>
                                                        تومان
                                                    </Text>
                                                    <Text style={{
                                                        color: '#A52D53',
                                                        fontFamily: 'ISFBold',
                                                        fontSize: 14
                                                    }}> {this.state.sliderValue} </Text>
                                                </View>
                                                <Slider
                                                    style={{ width: '70%', height: 32 }}
                                                    trackStyle={{
                                                        height: 5,
                                                        borderRadius: 5,
                                                        backgroundColor: '#d0d0d0',
                                                    }}
                                                    thumbStyle={{
                                                        width: 30,
                                                        height: 30,
                                                        borderRadius: 30,
                                                        backgroundColor: '#C50143',
                                                    }}
                                                    minimumTrackTintColor='#C50143'
                                                    minimumValue={50000}
                                                    maximumValue={1000000}
                                                    step={50000}
                                                    value={this.state.sliderValue}
                                                    onValueChange={value => this.setState({ sliderValue: value })}
                                                    onSlidingStart={value =>
                                                        this.setState({
                                                            slideStartingValue: value,
                                                            slideStartingCount: this.state.slideStartingCount + 1,
                                                        })
                                                    }
                                                />

                                            </View>
                                            <View style={styles.price} >
                                                <Text style={styles.modal_titles} >قیمت </Text>
                                                <Icon style={{ marginLeft: 5 }} size={22} name="brightness-percent" color="#555" />
                                            </View>
                                        </View>


                                    </View>


                                    {/* request btn */}
                                    <View style={styles.new_request_box}>
                                        <TouchableOpacity activeOpacity={.7}
                                            onPress={() => this.setState({ modalVisible: false })}
                                            style={styles.search_touch}>
                                            <Text style={{ color: '#fff', fontFamily: 'ISBold' }} >جستجو</Text>
                                        </TouchableOpacity>
                                        <View style={styles.search_touch_sibling} ></View>
                                    </View>
                                </View>
                            </View>

                        </View>

                        : null

                }
                {/* </Modal> */}

            </DrawerLayoutAndroid >


        );
    }
}

const styles = ({

    home_cover: {
        backgroundColor: "#C92652",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        flex: 1,

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
    up: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f6f6f6',
        // borderBottomRightRadius: 300,
        borderBottomLeftRadius: 0,
        overflow: 'hidden',
        zIndex: 1,

    },
    title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333',
        textAlign: 'center',
    },
    requestBox: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 200,
    },
    modal_button: {
        position: 'absolute',
        bottom: 140,
        zIndex: 10,
        right: 20,
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#C92652",
        shadowOpacity: .5,
        elevation: 10,
    },
    middle_inside: {
        width: 84,
        height: 84,
        backgroundColor: '#C92652',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20
    },
    icon_parent: {
        width: 100,
        height: 100,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    person_desc: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    person_name: {
        fontSize: 14,
        fontFamily: 'ISBold',
        marginTop: 10,
        color: '#fff'
    },
    bottom_icons: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%'
    },
    drawer_text: {
        fontSize: 12,
        color: '#b04267',
        fontFamily: 'ISBold',
        marginRight: 10,
    },
    modal_body: {
        flexDirection: 'column',
        backgroundColor: '#f6f6f6',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        top: 0,
        bottom: 0,
        flex: 1,
        paddingTop: 10,

    },

    modal_price: {
        width: '90%',
        flexDirection: 'column',
        marginVertical: 5,
        borderRadius: 5,
        zIndex: -10,
        // height: 200,
        justifyContent: 'space-between',
        backgroundColor: '#eee',

    },
    modal_boxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 50,
        width: '90%',

        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    show_selected_date: {
        backgroundColor: '#fff',
        fontSize: 18,
        color: '#555',
        fontFamily: 'ISFBold',
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    right_icon_box: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capacity: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        paddingBottom: 5,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '20%',
        paddingBottom: 5,
    },
    modal_titles: {
        flexDirection: 'row',
        fontSize: 12,
        fontFamily: 'ISFBold',
        alignItems: 'center',
        color: '#636363',
    },
    gheymat: {
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#636363'
    },
    toman: {
        fontSize: 8,
        fontFamily: 'ISBold',
        color: '#636363'
    },

    price_input: {
        backgroundColor: '#fff',
        height: 50,
        fontSize: 14,
        fontFamily: 'ISBold',
        textAlign: 'left',
        paddingRight: 10,
        width: '50%',
        color: '#636363'
    },


    new_request_box: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 100,
        borderRadius: 30,
        position: 'absolute',
        backgroundColor: 'transparent',
        flexDirection: 'column',

    },
    search_touch_sibling: {
        width: '100%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    search_touch: {
        backgroundColor: '#C50143',
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        borderRadius: Dimensions.get('window').width / 6,
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        top: Dimensions.get('window').width / 6,
        borderWidth: 10,
        borderColor: '#fff',
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 2,
        zIndex: 99
    },

    select_date: {
        borderRadius: 5,
        width: '50%',
        backgroundColor: '#fff',
        color: '#636363',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'ISBold',
    },

    picker_modal: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker_box: {
        width: '90%',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    picker_item: {
        fontFamily: 'ISBold',
        paddingVertical: 10,
        fontSize: 14,
        textAlign: 'center',
        color: '#333'
    },
    picker_button: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        width: '100%',
        backgroundColor: '#fff',
        padding: 5
    },
    title_box: {
        backgroundColor: '#f6f6f6',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_child: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    modal_title: {
        fontFamily: 'ISBold',
        fontSize: 16,
        color: '#333'
    }





})