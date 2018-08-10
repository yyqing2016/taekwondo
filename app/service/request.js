
import _ from 'lodash';
import Config from '../Config';
import { getAccessToken} from './driver';

const appDomain = Config.apiDomain;


function parseJSON(response) {
    return response.json()
}


function checkStatus(response) {
    if (response.status >= 200 && response.status <= 304) {
        return response;
    }
    if (response.status == 401) {
        
    }
    throw JSON.parse(response._bodyText);
}

function request(uri, { type = 'POST', data = {} }) {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (!_.startsWith(uri, 'http')) {
        uri = Config.apiDomain + uri;
    }

    if(getAccessToken()){
        uri = uri +  (uri.includes('?') ? '&access_token=':'?access_token=') + getAccessToken();
    }
    
    let fetchOption = {
        method: type,
        headers: headers
    }

    if (type === 'POST') fetchOption.body = JSON.stringify(data);
    if (type === 'PATCH') fetchOption.body = JSON.stringify(data);

    console.log('request uri ' + uri + ' type ' + type + ' data ' + fetchOption.body);

    return fetch(uri, fetchOption)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({ data }))
        .catch(err => ({ err }));
}

export function uploadImage(uri,picture){
    // console.log("lll uri",uri)
    // console.log("lll pic",picture)
    let formData = new FormData();
    let file = {uri: picture.url, type: 'multipart/form-data', name:picture.name};
    console.log(file)
    formData.append("images",file);

    if (!_.startsWith(uri, 'http')) {
        uri = Config.apiDomain + uri;
    }

    if(getAccessToken()){
        uri = uri +  (uri.includes('?') ? '&access_token=':'?access_token=') + getAccessToken();
    }

    console.log('request uri ' + uri + ' data ');

   return fetch(uri,{
      method:'POST',
      headers:{
      	'Content-Type':'multipart/form-data',
      },
      body:formData,
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
 
  }

export function get(uri) {
    return request(uri, { type:"GET"});
}

export function post(uri, data = "") {
    return request(uri, { type: "POST", data: data });
}

export function patch(uri , data = ""){
    return request(uri , {type: "PATCH" , data: data});
}

export function deleteData(uri , data = ""){
    return request(uri , {type: "DELETE" , data: data});
}
