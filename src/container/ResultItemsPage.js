import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Mapir from 'mapir-react-native-sdk'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//components
import ResultItems from '../components/ResultItems';







export default class ResultItemsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color_1: '#C72652',
            color_2: '#555',
            color_3: '#555',
            red: '#C72652',
            black: '#555',
            tab1: true,
            tab2: false,
            tab3: false,

            markers: [
                { latitude: 51.422548, longitude: 35.732573 },
            ],
        }
    }

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
                tab2: false,
                tab3: false,
                tab1: true,

            })
        } else if (tab === 'tab2') {
            this.setState({
                color_3: this.state.black,
                color_1: this.state.black,
                color_2: this.state.red,
                tab2: true,
                tab1: false,
                tab3: false,
            })
        } else if (tab === 'tab3') {
            this.setState({
                color_1: this.state.black,
                color_2: this.state.black,
                color_3: this.state.red,
                tab3: true,
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


            <ScrollView contentContainerStyle={styles.ResultItemsPage} >
                <View style={{
                    height: 50,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={styles.humberger}
                        onPress={() => Actions.Support()}
                    >
                        <View style={styles.notification} >
                            <Text style={styles.notification_text} >3</Text>
                        </View>
                        <Icon style={{ position: 'absolute', top: 5 }} name="bell-outline" size={32} color="#B22850" />
                    </TouchableOpacity>
                    <Text style={styles.title} >  نتایج جستجو - 219</Text>
                    <TouchableOpacity
                        style={{
                            padding: 10,
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} onPress={()=>Actions.pop()} >
                        <Icon name="arrow-right" size={28} color="#B22850" />
                    </TouchableOpacity>

                </View>
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
                        <Text style={{
                            position: "absolute",
                            backgroundColor: 'rgba(100,100,100,.7)',
                            width: '100%',
                            color: '#fff',
                            bottom: 0,
                            padding: 5,
                            fontFamily: 'IS',
                            textAlign: 'center'
                        }}>شعاع 5 کیلومتری آمل</Text>
                    </View>
                    <View style={styles.details_right}>

                        <View style={styles.detail_row}>
                            <Text style={styles.detail_view}>  1398/03/31</Text>
                            <Text style={styles.detail_title}>  از تاریخ :</Text>
                        </View>
                        <View style={styles.detail_row}>
                            <Text style={styles.detail_view}>  1398/04/01</Text>
                            <Text style={styles.detail_title}>  تا تاریخ :</Text>
                        </View>
                        <View style={styles.detail_row}>
                            <Text style={styles.detail_view}>  440,000</Text>
                            <Text style={styles.detail_title}>  قیمت :</Text>
                        </View>
                        <View style={styles.detail_row}>
                            <Text style={styles.detail_view}>  3</Text>
                            <Text style={styles.detail_title}>  تعداد :</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.tab}  >
                    <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab('tab1')}>
                        <Icon name="cash" size={20} color={this.state.color_1} />
                        <Text style={[styles.tab_text, { color: this.state.color_1 }]}>  قیمت</Text>
                    </TouchableOpacity>
                    <Text style={styles.line} ></Text>
                    <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab('tab2')}>
                        <Icon name="account-multiple-outline" size={20} color={this.state.color_2} />
                        <Text style={[styles.tab_text, { color: this.state.color_2 }]}>  افراد</Text>
                    </TouchableOpacity>
                    <Text style={styles.line} ></Text>
                    <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab('tab3')}>
                        <Icon name="map-marker-distance" size={20} color={this.state.color_3} />
                        <Text style={[styles.tab_text, { color: this.state.color_3 }]}>  فاصله</Text>
                    </TouchableOpacity>
                </View>

                {this.state.tab1 ?

                    <View>
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

                    <View>
                        <ResultItems navigate={this._showDetail} />
                        <ResultItems navigate={this._showDetail} />
                    </View>
                    : null

                }

                {this.state.tab3 ?

                    <View>
                        <ResultItems navigate={this._showDetail} />
                        <ResultItems navigate={this._showDetail} />
                        <ResultItems navigate={this._showDetail} />
                    </View>
                    : null

                }
            </ScrollView>




        );
    }
}

const styles = ({


    ResultItemsPage: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'column',
        alignItems: 'center',
        // height: Dimensions.get('window').height,
        paddingBottom: 160,


    },
    tab: {
        width: Dimensions.get('window').width - 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,

    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 8,
        top: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },
    humberger: {
        width: 50,
        height: 50,
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        fontFamily: 'IS',
        color: '#333',
        textAlign: 'center',
    },
    tab_box: {
        width: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",

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
        backgroundColor: '#fff'
    },
    details_right: {
        width: '50%',
        height: 150,
        justifyContent: 'space-between',
        padding: 5,
    },
    details_map: {
        width: '50%',
        height: 150

    },
    detail_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    detail_title: {
        fontFamily: 'ISBold',

    },
    detail_view: {
        fontFamily: 'ISF',

    }




})