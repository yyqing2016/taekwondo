import * as request from './request';
import api from './api'

export function login (account){
    return request.post(api.customer.login,account);
}