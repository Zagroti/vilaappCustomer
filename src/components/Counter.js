import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }


    _count =  (e) => {
        if (e === 'plus') {
            this.setState((prev) => {
                return {
                    number: prev.number + 1 < 11 ? prev.number + 1 : prev.number 
                }
            })
        } else {
             this.setState((prev) => {
                return {
                    number: prev.number - 1 < 0 ? prev.number : prev.number - 1
                }
            })
        }
        this.props.counter(this.state.number)
    }


    render() {

        return (
            <View style={{width:'50%'}} >
                <View style={styles.inside} counter={this.props.counter}>
                    <TouchableOpacity onPress={() => this._count('plus')}  >
                        <View style={styles.box}>
                            <Icon name="plus" size={30} color="#ccc" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.show}>{this.state.number}</Text>
                    <TouchableOpacity onPress={() => this._count('minus')}  >
                        <View style={styles.box}>
                            <Icon name="minus" size={30} color="#ccc" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = ({
    box: {
        width: 40,
        height: 40,
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
        fontSize: 26,
        color: '#555',
        fontFamily: 'SB',
    }

})
