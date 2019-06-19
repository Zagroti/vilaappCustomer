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
            <View style={styles.Counter} >
                <View style={styles.inside} counter={this.props.counter}>
                    <TouchableOpacity onPress={() => this._count('minus')}  >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#f1f1f1', '#c1c1c1']}
                            style={styles.box}
                        >
                            <Text style={styles.btn}  >-</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.show}>{this.state.number}</Text>
                    <TouchableOpacity  onPress={() => this._count('plus')}  >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#f1f1f1', '#c1c1c1']}
                            style={styles.box}
                        >
                            <Text style={styles.btn}  >+</Text>
                        </LinearGradient>
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
        borderWidth: 4,
        borderColor: '#ccc',
    },
    btn: {
        fontSize: 32,
        color: '#aaa',
        fontWeight: '100',
    },

    Counter: {
        backgroundColor: '#fff',
                padding: 5,
                borderRadius: 5,
                shadowColor: "#f7f7f7",
                shadowOpacity: .3,
                elevation: 1,
       

    },
    inside:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 60,
        // borderWidth: 10,
        borderColor: '#f1f1f1',
    },

    show: {
        fontSize: 28,
        color: '#666',
        fontWeight: '900',
    }

})
