import base from '../api/baseURL';
import Token from '../api/token';
import AppToken from '../api/appToken';

function deleteToApi(key, customeHeader) { 

    // console.log(type)
    let url = base.baseUrl + key;

    return fetch(url, {
        method: "DELETE",
        cache: "no-cache",
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "agent": "web",
            "X-Debug": 1,
            "Authorization": Token,
            ...customeHeader
        },
        redirect: "follow",
        referrer: "no-referrer", 

    }).then(response => {
        const statusCode = response.status
        // console.log(response)
        const data = response.json()
        return Promise.all([statusCode, data])
    }).then(([res, data]) => {
        // console.log(res, data)
        return ({'status': res, 'data': data.data, 'error': data.error, 'isLoading': false})
    })

}


export default deleteToApi;


/* how can use it ------------------->

import PostData  from './controler/postToApi';


const res = PostData(data,'api url', type , AppName);

  // console.log(res);          // data, error,status
  // console.log(res.status);   // 200 means success
  // console.log(res.error);    // show the error from server
  // console.log(res.data);     // show the data from server


*/

 