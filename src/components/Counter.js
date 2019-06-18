import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }


    _count = async (e) => {
        if (e === 'plus') {
            await this.setState((prev) => {
                return {
                    number: prev.number + 1
                }
            })
        } else {
            await this.setState((prev) => {
                return {
                    number: prev.number - 1 < 0 ? prev.number : prev.number - 1
                }
            })

        }

        this.props.counter(this.state.number)

    }


    render() {

        return (
            <View style={styles.Counter} counter={this.props.counter}>
                <TouchableOpacity style={styles.box} onPress={() => this._count('minus')} >
                    <Text style={styles.btn}  >-</Text>
                </TouchableOpacity>
                <Text style={styles.show}>{this.state.number}</Text>
                <TouchableOpacity style={styles.box} onPress={() => this._count('plus')}>
                    <Text style={styles.btn} >+</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = ({
    box: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#aaa',
    },
    btn: {
        fontSize: 32,
        color: '#aaa',
        fontWeight: '100',
    },

    Counter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 60,
        borderWidth:10,
        borderColor:'#f1f1f1',
        shadowColor: "#f7f7f7",
        shadowOpacity: .3,
        elevation: 1,
    },

    show: {
        fontSize: 28,
        color: '#666',
        fontWeight: '900',

    }

})
