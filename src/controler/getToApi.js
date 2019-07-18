import base from '../api/baseURL';
import Token from '../api/token';
import AppToken from '../api/appToken';
import { browserHistory } from 'react-router';

function GetToApi(key, customHeader) { 
    let url = base.baseUrl + key;
      
    return fetch(url, {
        method: "GET",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", 
            "Authorization":Token,
            ...customHeader
        },
        redirect: "follow",
        referrer: "no-referrer"
    }).then(response => {
        const statusCode = response.status
        const data = response.json()
        return Promise.all([statusCode, data])
    }).then(([res, data]) => {
        //  console.log(res)
         if(res === 401){ 
             console.log("you must login again!")
         }
        return ({'status': res, 'data': data.data, 'error': data.error, 'isLoading': false})
    })
}


export default GetToApi;


/* how can use it ------------------->

import PostData  from './controler/postToApi';


const res = PostData(data,'api url');

  // console.log(res);          // data, error,status
  // console.log(res.status);   // 200 means success
  // console.log(res.error);    // show the error from server
  // console.log(res.data);     // show the data from server


*/

 