import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


const GradientButton = (props) => (
    <TouchableOpacity style={{
        width: props.width,
        marginTop:props.top,
        marginBottom:props.bottom
    }}
        onPress={props.press}
        activeOpacity={.6}>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[props.color_1, props.color_2]}
            style={{
                width: '100%',
                height: props.height,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: props.borderRadius
            }}>
            <Text style={{
                fontFamily: 'ISBold',
                color: props.textColor,
                fontSize: props.size,
            }} >
                {props.title}
            </Text>
        </LinearGradient>
    </TouchableOpacity>
)


export default GradientButton

{/* <GradientButton 
    width="90%"
    press={this._press}
    activeOpacity={.6}
    color_1="red"
    color_2="blue"
    height={50}
    borderRadius={50}
    textColor="#333"
    size={16}
    title="عنوان"
    marginTop={20}
    marginBottom={20}
/> */}
