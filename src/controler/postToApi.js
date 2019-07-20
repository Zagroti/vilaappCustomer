import base from '../api/baseURL';
import Token from '../api/token'; 


function postApi(data, key,  customeHeader) {
    // console.log(customeHeader)

    let url = base.baseUrl + key;
    console.log(url)

    return fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "agent": "web",
            // "X-Debug": 1,
            "Authorization": Token,
            ...customeHeader
        },
        redirect: "follow",
        referrer: "no-referrer",
        // body: JSON.stringify(data), 
        body: data
    }).then(response => {
        const statusCode = response.status
        const data = response.json()
        return Promise.all([statusCode, data])
    }).then(([res, data]) => {
        //// console.log(res, data)
        return ({'status': res, 'data': data.data, 'error': data.error, 'isLoading': false})
    })

}


export default postApi;


/* how can use it ------------------->

import PostData  from './controler/postToApi';


const res = PostData(data,'api url', type , AppName);

  // console.log(res);          // data, error,status
  // console.log(res.status);   // 200 means success
  // console.log(res.error);    // show the error from server
  // console.log(res.data);     // show the data from server


*/

 