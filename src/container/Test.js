import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

componentDidMount(){
    this.setState({ loading: false })

}



    render() {
        return (
            <View>
                {
                    this.state.loading ?
                        <Text>loading</Text> :
                        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 40 }}>TEST</Text>
                        </View>
                }
            </View>
        )
    }
}


export default Test


const styles = ({






})