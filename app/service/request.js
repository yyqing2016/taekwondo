
import _ from 'lodash';
import Config from '../Config';

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

    let fetchOption = {
        method: type,
        headers: headers
    }

    if (type === 'POST') fetchOption.body = JSON.stringify(data);


    console.log('request uri ' + uri + ' type ' + type + ' data ' + fetchOption.body);

    return fetch(uri, fetchOption)
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