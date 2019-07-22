import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView,
    BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Mapir from 'mapir-react-native-sdk'
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';
import GradientButton from '../components/GradientButton';


const arrowDown = <Icon style={{ top: -10 }} name="chevron-down" size={36} color="#ccc" />
const arrowUp = <Icon style={{ top: -10 }} name="chevron-up" size={36} color="#ccc" />





let parent_slider = {

}
let image_slider_parent = {

}
let image_slider = {
    width: '100%',
    height: Dimensions.get('window').width,
    resizeMode: 'cover'
}

let body = {
    top: -50,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
}

let image_footer = {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 120,
    paddingBottom: 50
}




export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            availabilityText: 'بیشتر',
            availability: false,
            aboutvilaText: 'بیشتر',
            aboutvila: false,
            conditionsText: 'بیشتر',
            conditions: false,
            sliderFullScreen: false
        }
    }

    componentWillMount() {
        //phone back btn 
        BackHandler.addEventListener('hardwareBackPress', this._backButtonCustom);
    }

    componentWillUnmount() {
        //phone back btn 
        BackHandler.removeEventListener('hardwareBackPress', this._backButtonCustom);
    }




    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    _saveVila = () => {
        this.setModalVisible(false)

    }


    // more funcion 
    _seeMore = (name, text) => {

        if (!this.state[name]) {
            this.setState({
                [text]: 'کمتر',
                [name]: true,
            })
        } else {
            this.setState({
                [text]: 'بیشتر',
                [name]: false,
            })
        }
    }

    _backButtonCustom = () => {
        if (this.state.sliderFullScreen) {
            return true
        }
    }

    // slide full screen
    _sliderFullScreen = () => {

        // full size
        if (this.state.sliderFullScreen) {
            this.setState({ sliderFullScreen: false })
            parent_slider = {}

            image_slider_parent = {}

            image_slider = {
                width: '100%',
                height: Dimensions.get('window').width,
                resizeMode: 'cover'
            }
            body = {
                top: -50,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                backgroundColor: '#fff',
                alignItems: 'center',
            }
            image_footer = {
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 120,
                paddingBottom: 50
            }

        } else {
            this.setState({ sliderFullScreen: true })

            parent_slider = {
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                zIndex: 9999,
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            }
            image_slider_parent = {
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }
            image_slider = {
                width: '100%',
                height: '100%',
                resizeMode: 'contain'
            }
            body = {
                width: 0,
                height: 0,
            }
            image_footer = {
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 100,
                paddingBottom: 40
            }


        }

    }


    
    render() {

        const images = [
            'https://placeimg.com/640/640/nature',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
        ];


        return (

            <View style={styles.Details} >

                {/* header */}
                {!this.state.sliderFullScreen ?
                    <View style={styles.header} >
                        <Text style={styles.owner_answer}>پذیرفته شده</Text>
                        <TouchableOpacity style={styles.back_button} onPress={() => Actions.pop()} >
                            <Icon name="arrow-right" size={28} color="#fff" />
                        </TouchableOpacity>
                    </View> : null
                }

                {/* slider and others  */}
                <ScrollView>

                    <SafeAreaView style={parent_slider}>
                        <ImageSlider
                            loopBothSides
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                <TouchableOpacity key={index}
                                    activeOpacity={1}
                                    style={[style, image_slider_parent]}
                                    onPress={this._sliderFullScreen}>
                                    <Image source={{ uri: item }}
                                        style={image_slider} />
                                </TouchableOpacity>
                            )}
                            customButtons={(position, move) => (
                                <View style={image_footer}>
                                    <View style={{
                                        width: 100,
                                        textAlign: 'center',
                                        height: 30,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                    }}>
                                        <Text style={styles.image_counter}>{position + 1}  /  {images.length}</Text>
                                        <Icon name="image-area" style={{ marginLeft: 8 }} size={30} color="#fff" />
                                    </View>


                                    {/* price and back button fullscreen and resize mode */}
                                    {
                                        !this.state.sliderFullScreen ?
                                            <View style={{
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                textAlign: 'center',
                                                paddingHorizontal: 50,
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 20,
                                            }}>
                                                <Text style={{ color: '#333', fontSize: 16, fontFamily: 'ISFBold' }}>150,000 ت</Text>
                                            </View> :
                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: '#33333320',
                                                    padding: 10,
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }} onPress={this._sliderFullScreen} >
                                                <Icon name="arrow-right" size={28} color="#fff" />
                                            </TouchableOpacity>
                                    }

                                </View>
                            )}
                        />
                    </SafeAreaView>




                    <View style={body}>

                        {/* icons */}
                        <View style={styles.vila_posibilities}>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>اتاق 2</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="door" size={15} color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>2 تختخواب </Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="hotel" size={15} color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>1 نفر</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="account-group" size={15} color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>45 متر مربع</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="home-city-outline" size={15} color="#636363" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.about_vila}>
                            <View style={styles.about_vila_first}>
                                <Text style={styles.detail_title} >در مورد ویلا</Text>
                                <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                                {
                                    this.state.aboutvila ?
                                        <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                                        : null
                                }

                            </View>
                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={(e) => this._seeMore('aboutvila', 'aboutvilaText')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                }} >{this.state.aboutvilaText}</Text>
                                {this.state.aboutvila ? arrowUp : arrowDown}
                            </TouchableOpacity>
                        </View>


                        <View style={styles.availability} >
                            <Text style={styles.detail_title} >امکانات </Text>
                            <View style={styles.availability_first}>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >پارکینگ</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >WiFi</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >لباسشویی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >سیستم گرمایشی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >الکتریکی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >استخر</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                {
                                    this.state.availability ?
                                        <View style={styles.availability_first}>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >پارکینگ</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >WiFi</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >لباسشویی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >سیستم گرمایشی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >الکتریکی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>

                                        </View> : null

                                }
                            </View>

                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={() => this._seeMore('availability', 'availabilityText')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                }} >{this.state.availabilityText}</Text>
                                {this.state.availability ? arrowUp : arrowDown}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.conditions}>
                            <Text style={styles.detail_title}>شرایط</Text>

                            <Text style={styles.conditions_text}>1. آرام باشید و مراقب خودتان باشید.</Text>
                            <Text style={styles.conditions_text}>2. عاشق خودتان باشید .</Text>
                            <Text style={styles.conditions_text}>3. اتاق را کثیف نکنید </Text>
                            <Text style={styles.conditions_text}>4. اتاق را تمیز نکنید . </Text>


                            {this.state.conditions ?
                                <View>

                                    <Text style={styles.conditions_text}>5. خانوم بازی نکنید </Text>
                                    <Text style={styles.conditions_text}>6. داخل اتاق سیگار نکشید . </Text>
                                    <Text style={styles.conditions_text}>7. دقت کنید </Text>
                                    <Text style={styles.conditions_text}>8. نماز اول وقت را فراموش نکنید </Text>
                                    <Text style={styles.conditions_text} >9. خدا را ناظر بر اعمال خود بدانید </Text>
                                </View> : null}
                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={() => this._seeMore('conditions', 'conditionsText')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                }} >{this.state.conditionsText}</Text>
                                {this.state.conditions ? arrowUp : arrowDown}
                            </TouchableOpacity>

                        </View>

                        <View
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').width,
                                marginTop: 20
                            }}
                        >
                            <Mapir
                                accessToken={'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5ZjlmMWZhNDA4YzM0ODI2ZjcxZGI5YTdlM2U2ZmVjNDEzMzNmMDU0MjVhM2MzOTM0NmMwNTlkMzBiMzcyYjA5YzU1OGZjOGU4NTJmNWJhIn0.eyJhdWQiOiJteWF3ZXNvbWVhcHAiLCJqdGkiOiIzOWY5ZjFmYTQwOGMzNDgyNmY3MWRiOWE3ZTNlNmZlYzQxMzMzZjA1NDI1YTNjMzkzNDZjMDU5ZDMwYjM3MmIwOWM1NThmYzhlODUyZjViYSIsImlhdCI6MTU1OTQ1NTIzMiwibmJmIjoxNTU5NDU1MjMyLCJleHAiOjE1NTk0NTg4MzIsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyIsImVtYWlsIl19.JNowwSPWaoVoJ1Omirk9OTtkDySsNL91nP00GcCARdM-YHoTQYw3NZy3SaVlAsbafO9oPPvlVfhNIxPIHESACZATutE3tb7RBEmQGEXX-8G7GOSu8IzyyLBmHaQe75LtisgdKi-zPTGsx8zFv0Acn6HrDDxFrKFNtmI85L3jos_GVxvYYhHWKAez8mbJRHcH1b15DrwgWAhCjO2p_HqpuGLdRF1l03J6HsOnJLMid2997g7iAVTOa8mt2oaEPvmwA_f6pwFZSURqw-RJzdN_R8IEmtqWQq5ZNTEppVaV82yuwfnSmrb0_Sak2hfBIiLwQeCMsnfhU_CvUbE_1rukmQ'}
                                zoomLevel={13}
                                zoomEnabled={false}
                                centerCoordinate={[51.422548, 35.732573]}
                                style={{ flex: 1 }}
                                logoEnabled={false}
                                scrollEnabled={false}
                            >
                                <Mapir.Marker
                                    id={'1'}
                                    coordinate={[51.422548, 35.732573]}
                                >
                                    <View style={{ width: 100, height: 100 }}>
                                        <View style={{ marginLeft: 20, width: 80, height: 80, borderRadius: 50, backgroundColor: 'rgba(165, 45, 83,.3)', borderColor: 'rgb(165, 45, 83)', borderWidth: 2 }}>

                                        </View>
                                    </View>
                                </Mapir.Marker>
                            </Mapir>
                        </View>

                        <View style={styles.save_button}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >


                            <GradientButton
                                width="80%"
                                press={() => {
                                    this.setModalVisible(true);
                                }}
                                activeOpacity={.6}
                                color_1="#36a35b"
                                color_2="#6fcf97"
                                height={50}
                                borderRadius={50}
                                textColor="#fff"
                                size={16}
                                title="رزرو"
                                top={0}
                                bottom={0}
                            />
                        </View>


                    </View>














                    {/* M O D A L  modal MODAL  */}

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(false);
                        }}

                    >

                        {/* Close modal  */}
                        <View
                            style={{
                                backgroundColor: '#f7f7f7',
                                width: '100%',
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                padding: 10
                            }}>
                            {/* Close modal  */}
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(false);
                                }}>
                                <Icon size={45} name="close" color="#bbb" />

                            </TouchableOpacity>
                        </View>



                        {/* Modal modal modal modal  */}
                        <View style={styles.Modal}>
                            <View style={styles.modal_title} >
                                <View style={styles.icon_parent} >
                                    <View style={styles.icon_child} >
                                        <Image style={styles.icon} source={require('../../Assets/Images/natalie.jpeg')} />
                                    </View>
                                </View>
                                <View style={styles.person_desc} >
                                    <Text style={styles.person_name} >جمیله باغی تبار</Text>
                                </View>
                            </View>

                            <View style={styles.rent_detail} >
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >تاریخ ورود</Text>
                                    <Text style={styles.rent_number} >1398 / 11 / 10</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >تاریخ خروج</Text>
                                    <Text style={styles.rent_number} >1398 / 11 / 15</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >تعداد شبها</Text>
                                    <Text style={styles.rent_number} >5</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >نفرات</Text>
                                    <Text style={styles.rent_number} >3</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >میانگین اجاره شبانه</Text>
                                    <Text style={styles.rent_number} >100,000 ت</Text>
                                </View>
                                <View style={styles.totalـprice} >
                                    <Text style={styles.total_text} >هزینه کل</Text>
                                    <Text style={styles.total_number} >500,000 ت</Text>
                                </View>
                            </View>

                            <View style={styles.accept_from_owner} >
                                <Icon style={{ paddingHorizontal: 14 }} size={30} name="check" color="#18749a" />

                                <Text style={{ fontSize: 10, fontFamily: 'ISBold', marginRight: 10 }} >پذیرفته شده توسط صاحب ویلا</Text>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 35,
                                    backgroundColor: '#f5f5f5',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    shadowColor: "#f7f7f7",
                                    shadowOpacity: 1,
                                    elevation: 1,
                                }} >
                                    <Icon size={25} name="account-outline" color="#bbb" />

                                </View>
                            </View>

                            {/* request btn */}

                            <GradientButton
                                width={Dimensions.get('window').width - 100}
                                press={this._saveVila}
                                activeOpacity={.6}
                                color_1="#18749a"
                                color_2="#46add8"
                                height={50}
                                borderRadius={50}
                                textColor="#fff"
                                size={16}
                                title="پرداخت"
                                top={20}
                                bottom={100}
                            />
                        </View>
                    </Modal >
                </ScrollView >
            </View>



        );
    }
}






const styles = ({

    Details: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        flex: 1,
        position: 'relative',
    },

    header: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 20,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 99999,
        width: '100%'
    },



    owner_answer: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        backgroundColor: '#6FCF97',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 2,
        textAlign: 'center',
        marginTop: 10
    },
    back_button: {
        backgroundColor: '#33333320',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        end: 10,
        position: 'absolute'
    },
    image_counter: {
        color: '#fff',
        fontFamily: 'ISFBold',
        marginTop: 3,
        fontSize: 12
    },
    vila_posibilities: {
        backgroundColor: '#f6f6f6',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 20,
        padding: 15,

    },
    posibility: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'center',
    },
    posibility_text: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginRight: 5
    },
    posibility_icon_box: {
        backgroundColor: '#eee',
        width: 25,
        height: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posibility_icon: {
        width: 15,
        resizeMode: 'contain'
    },
    about_vila: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    about_vila_first: {

    },
    detail_title: {
        fontSize: 15,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 10
    },
    about_vila_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    availability: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    availability_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    availability_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 5
    },


    availability_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    availability_icon: {
        marginLeft: 5
    },
    conditions: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    conditions_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    save_button: {
        width: Dimensions.get('window').width,
        flexGrow: 2,
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: '#fff',
        height: 160,
        top: -50,
        alignItems: 'center',
    },

    Modal: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        height: Dimensions.get('window').height,
    },
    modal_title: {
        alignItems: 'center',
        marginTop: -40,
    },

    icon_parent: {
        width: 110,
        height: 110,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 90,
        height: 90,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon_cover: {
        width: 70,
        height: 70,
        backgroundColor: '#C92652',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
    },
    person_desc: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    person_name: {
        fontSize: 13,
        fontFamily: 'ISBold',
        marginTop: 5,
        color: '#333'
    },
    person_number: {
        fontSize: 12,
        fontFamily: 'ISF',
        color: '#949494'
    },

    rent_detail: {
        width: '80%',
        marginVertical: 10,
    },
    rent_items: {
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: '#fff',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 2,
    },
    rent_text: {
        fontSize: 13,
        fontFamily: 'ISF',
        color: '#333'
    },
    rent_number: {
        fontSize: 13,
        fontFamily: 'ISFBold',
        color: '#333'
    },
    totalـprice: {
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: '#fff',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#FFF7CD'
    },
    total_number: {
        fontSize: 18,
        fontFamily: 'ISFBold',
        color: '#333'
    },
    total_text: {
        fontFamily: 'ISFBold',
        fontSize: 18,
        color: '#333',
    },

    accept_from_owner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 30,
    }









})