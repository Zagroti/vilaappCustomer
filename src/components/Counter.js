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
            <View style={styles.Counter} >
                <View style={styles.inside} counter={this.props.counter}>
                    <TouchableOpacity onPress={() => this._count('minus')}  >
                        <View style={styles.box}>
                            <Icon name="minus" size={30} color="#aaa" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.show}>{this.state.number}</Text>
                    <TouchableOpacity onPress={() => this._count('plus')}  >
                        <View style={styles.box}>
                            <Icon name="plus" size={30} color="#aaa" />
                        </View>
                    </TouchableOpacity>
                </View>
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
        borderWidth: 3,
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
        fontSize: 22,
        color: '#666',
        fontWeight: '900',
    }

})
