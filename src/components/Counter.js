import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 

 class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.val
        }
    }

    _action  (name,val)   { 
        let count = this.state.counter;
      
        if(val === 'plus')
            count ++
        else if(val === 'minus')
            if(count > 0)
                count --
        
        this.setState({
            counter : count
        }); 
        this.props._returnValue(name,count)
    }



    render() {

        return (
            <View style={{width:'50%'}} >
                <View style={styles.inside}  >

                    <TouchableOpacity onPress={() => this._action(this.props.name,'plus')}  >
                        <View style={styles.box}>
                            <Icon name="plus" size={26} color="#ccc" />
                        </View>
                    </TouchableOpacity>   

                    <Text style={styles.show}>
                        {this.state.counter}
                    </Text>

                    <TouchableOpacity onPress={() => this._action(this.props.name,'minus')}  >
                        <View style={styles.box}>
                            <Icon name="minus" size={26} color="#ccc" />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = ({
    box: {
        width: 35,
        height: 35,
        borderRadius: 25,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
    },


    inside: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 100,

    },

    show: {
        fontSize: 18,
        color: '#555',
        fontFamily: 'ISFBold',
    }

})



export default   Counter