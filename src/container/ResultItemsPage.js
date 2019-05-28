import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';


//components
import ResultItems from '../components/ResultItems';







export default class ResultItemsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            source_1 : require('../../Assets/Images/sort1.png'),
            source_2 : require('../../Assets/Images/sort2.png'),
            image_1 : require('../../Assets/Images/sort1.png'),
            image_2 : require('../../Assets/Images/sort2.png'),
            color_1:'#C72652',
            color_2:'#000',
            red:'#C72652',
            black:'#333'
        }
    }



    _changeTab = (tab) =>{
        if(tab === 'tab1'){
           this.setState({
               image_1 : this.state.source_1,
               image_2 : this.state.source_2,
               color_1:this.state.red,
               color_2:this.state.black

            })
        }else  if(tab === 'tab2') {
            this.setState({
                image_1 : this.state.source_2,
                image_2 : this.state.source_1,
                color_1:this.state.black,
                color_2:this.state.red
             })
        }
       
    }


    _showDetail = () =>{
        Actions.Details()
    }


    render() {

        return (


            <View style={styles.ResultItemsPage} >

                <View style={styles.tab}  >
                    <TouchableOpacity  style={styles.tab_box} onPress={()=>this._changeTab('tab1')}>
                        <Image  style={styles.tab_image} source={this.state.image_1}  />
                        <Text style={[styles.tab_text , {color : this.state.color_1}]}>بر اساس قیمت</Text>
                    </TouchableOpacity>
                    <Text style={styles.line} ></Text>
                    <TouchableOpacity style={styles.tab_box} onPress={()=>this._changeTab('tab2')}>
                        <Image  style={styles.tab_image} source={this.state.image_2} />
                        <Text style={[styles.tab_text , {color : this.state.color_2}]}>بر اساس افراد</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <ResultItems navigate={this._showDetail} />
                    <ResultItems navigate={this._showDetail} />
                    <ResultItems navigate={this._showDetail} />
                    <ResultItems navigate={this._showDetail} />
                    <ResultItems navigate={this._showDetail} />
                    <ResultItems navigate={this._showDetail} />
                </ScrollView>

            </View>




        );
    }
}

const styles = ({


    ResultItemsPage: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'column',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        paddingTop: 20,
        paddingBottom: 80,
        

    },
    tab:{
        width:Dimensions.get('window').width - 100,
        height:50,
        backgroundColor:'#fff',
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
        

    
    },
    tab_box:{
        width:'50%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%"

    },

    tab_text:{
        fontSize:10,
        fontFamily: 'ISBold',
        marginLeft: 5,
    },
    tab_image:{

    },
    line:{
        width:1,
        height:'80%',
        backgroundColor:'#ddd'
    }
    



})