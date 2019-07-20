/*

Get TOken Component from localStorg

*/
import AsyncStorage from '@react-native-community/async-storage';


function getToken(token){
    if(token !== null)
        return token
        
    return null
}

const Token = getToken(AsyncStorage.getItem('@token'))


export default Token;


/* How can use it=====>

import Token from '../../../.....';


// console.log(Token);




*/