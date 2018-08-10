let accessToken = '';
let deviceToken = '';
export function setAccessToken(token = ''){
    accessToken = token;
}

export function getAccessToken(){
    return accessToken;
}

export function setDeviceToken(token = ''){
    deviceToken = token;
}

export function getDeviceToken(){
    return deviceToken;
}