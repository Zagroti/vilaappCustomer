import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    ScrollView,
    Modal
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';


//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';

export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }



    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    render() {




        return (

            <ScrollView style={styles.Details} >

                <ImageBackground style={styles.header}
                    source={require('./../../Assets/Images/detail.jpg')} >

                    {/* MENU */}
                    <View style={styles.menu} >
                        {/* <TouchableOpacity style={styles.back_box} onPress={()=>this._backToResultImage()} >
                            <Image style={styles.back}
                                source={require('./../../Assets/Images/left-arrow-white.png')} />
                        </TouchableOpacity> */}
                        <Text style={styles.owner_answer}>پذیرفته شده</Text>
                    </View>

                    <View style={styles.header_price} >
                        <Text style={styles.per_night}> هر شب</Text>
                        <Text style={styles.price} >150,000 ت</Text>
                    </View>


                </ImageBackground>


                <View style={styles.body}>

                    {/* icons */}
                    <View style={styles.vila_posibilities}>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>اتاق 2</Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/door.png')} />
                            </View>
                        </View>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>2 تختخواب </Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/bed.png')} />
                            </View>
                        </View>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>1 نفر</Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/persons.png')} />
                            </View>
                        </View>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>45 متر مربع</Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/apartment.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.about_vila}>
                        <View style={styles.about_vila_first}>
                            <Text style={styles.about_vila_title} >در مورد ویلا</Text>
                            <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                        </View>
                        <TouchableOpacity style={styles.see_more}>
                            <Text style={styles.see_more_text}>بیشتر</Text>
                            <Image style={styles.see_more_icon} source={require('./../../Assets/Images/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.avilibiy} >
                        <Text style={styles.about_vila_title} >دسترسی </Text>
                        <View style={styles.avilibiy_first}>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >پارکینگ</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >WiFi</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >لباسشویی</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/checkgrey.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >سیستم گرمایشی</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >الکتریکی</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >استخر</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.see_more}>
                            <Text style={styles.see_more_text}>بیشتر</Text>
                            <Image style={styles.see_more_icon} source={require('./../../Assets/Images/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.conditions}>
                        <Text style={styles.about_vila_title}>شرایط</Text>

                        <Text style={styles.conditions_text}>1. آرام باشید و مراقب خودتان باشید.</Text>
                        <Text style={{ color: '#DC3053', fontSize: 12, fontFamily: 'ISMedium' }}>2. عاشق خودتان باشید .</Text>
                        <Text style={styles.conditions_text}>3. اتاق را کثیف نکنید </Text>
                        <Text style={styles.conditions_text}>4. اتاق را تمیز نکنید . </Text>
                        <Text style={styles.conditions_text}>5. خانوم بازی نکنید </Text>
                        <Text style={styles.conditions_text}>6. داخل اتاق سیگار نکشید . </Text>
                        <Text style={styles.conditions_text}>7. دقت کنید </Text>
                        <Text style={styles.conditions_text}>8. نماز اول وقت را فراموش نکنید </Text>
                        <Text style={styles.conditions_text} >9. خدا را ناظر بر اعمال خود بدانید </Text>

                    </View>

                    <ImageBackground
                        style={{ width: '100%', height: 250, marginTop: 20 }}
                        source={require('./../../Assets/Images/map.png')}
                    >

                    </ImageBackground>

                    <View style={styles.save_button}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >
                        <TouchableOpacity activeOpacity={.6}
                            style={{
                                width: '80%',
                                justifyContent: "center"
                            }}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <ImageBackground style={styles.save_button_image}
                                imageStyle={{
                                    borderRadius: 50,
                                }}
                                source={require('./../../Assets/Images/save.png')}
                            >
                                <Text style={styles.save_text} >
                                    ذخیره
                            </Text>
                                <View style={styles.right}>
                                    <Image style={{ width: 8, resizeMode: "contain" }} source={require('../../Assets/Images/right.png')} />
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>
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
                    <InputScrollView>
                        {/* Close modal  */}
                        <View
                            style={{
                                backgroundColor: '#f7f7f7',
                                width: '100%',
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                            {/* Close modal  */}
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(false);
                                }}>
                                <Image style={{
                                    width: 25,
                                    height: 25,
                                    margin: 20
                                }}
                                    source={require('../../Assets/Images/close.png')}
                                />
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
                                    <Text style={styles.person_number} >0912 100 8900</Text>
                                </View>
                            </View>

                            <View style={styles.rent_detail} >
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >شروع تاریخ</Text>
                                    <Text style={styles.rent_number} >1398 / 11 / 10</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >تعداد شبها</Text>
                                    <Text style={styles.rent_number} >5</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >نفرات</Text>
                                    <Text style={styles.rent_number} >2</Text>
                                </View>
                                <View style={styles.rent_items} >
                                    <Text style={styles.rent_text} >هزینه هرشب</Text>
                                    <Text style={styles.rent_number} >100,000</Text>
                                </View>
                                <View style={styles.totalـprice} >
                                    <Text style={styles.total_text} >هزینه کل</Text>
                                    <Text style={styles.total_number} >500,000 ت</Text>
                                </View>
                            </View>

                            <View style={styles.accept_from_owner} >
                                <Image style={{ width: 25, resizeMode: 'contain', margin: 20 }}
                                    source={require('../../Assets/Images/checkblue.png')}
                                />
                                <Text style={{ fontSize: 12, fontFamily: 'ISBold',marginRight:10 }} >پذیرفته شده توسط صاحب ویلا</Text>
                                <View style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 35,
                                    backgroundColor: '#f5f5f5',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    shadowColor: "#f7f7f7",
                                    shadowOpacity: 1,
                                    elevation: 1,
                                }} >
                                    <Image style={{ width: 25, resizeMode: 'contain', margin: 20 }}
                                        source={require('../../Assets/Images/usergrey.png')}
                                    />
                                </View>
                            </View>





                            {/* request btn */}
                            <View style={{
                                width: '100%',
                                height: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                
                                <TouchableOpacity style={{ width: Dimensions.get('window').width - 100, backgroundColor: 'transparent'}}
                                    onPress={this._enterCode} activeOpacity={.6}>
                                    <ImageBackground style={{
                                        width: '100%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                        imageStyle={{ borderRadius: 50 }}
                                        source={require('./../../Assets/Images/save.png')}>
                                        <Text style={{
                                            fontFamily: 'ISBold',
                                            color: '#fff',
                                            fontSize: 16,
                                        }} >
                                            پرداخت
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </InputScrollView>



                </Modal >



            </ScrollView >



        );
    }
}

const styles = ({

    Details: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        flex: 1,
        marginTop:-50
    },

    header: {
        width: '100%',
        height: Dimensions.get('window').width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    menu: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
        padding: 20,
        width: '100%'
    },

    header_price: {
        height: 150,
        backgroundColor: '#00000036',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    price: {
        fontSize: 30,
        fontFamily: 'ISFBold',
        color: '#fff',
        marginBottom: 50,
    },
    per_night: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        marginBottom: 50,
        marginRight: 10,
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
    },




    body: {
        top: -50,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },


    vila_posibilities: {
        backgroundColor: '#f6f6f6',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 20,
        padding: 15

    },
    posibility: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    posibility_text: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginRight: 5
    },
    posibility_icon_box: {
        backgroundColor: '#eee',
        padding: 15,
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
        padding: 20,
        borderRadius: 10
    },
    about_vila_first: {

    },
    about_vila_title: {
        fontSize: 18,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 10
    },
    about_vila_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },
    see_more: {
        width: '100%',
        alignItems: 'center',
        marginTop: 15,

    },
    see_more_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#c7c7c7',
    },
    see_more_icon: {

    },


    avilibiy: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
    },
    avilibiy_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    avilibiy_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },


    avilibiy_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    avilibiy_icon: {
        marginLeft: 5
    },
    conditions: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
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
    save_button_image: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    save_text: {
        fontFamily: "ISBold",
        color: '#fff',
        fontSize: 16,
        width: '50%'
    },
    right: {
        width: '40%',
        alignItems: 'flex-end'
    },



    Modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6'
    },
    modal_title: {
        alignItems: 'center',
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
        fontSize: 18,
        fontFamily: 'ISBold',
        marginTop: 10
    },
    person_number: {
        fontSize: 15,
        fontFamily: 'ISF',
        color: '#949494'
    },

    rent_detail: {
        width: '80%',
        marginTop: 20
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
        padding: 10,
        marginVertical: 5,
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
        height: 60,
        borderRadius: 30,
        marginVertical: 30
    }









})