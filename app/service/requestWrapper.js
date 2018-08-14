import * as request from './request';
import api from './api'

export function login(account) {
    return request.post(api.staff.login, account);
}

export function checkIn(account) {
    return request.post(api.student.checkIn, account);
}


// export function register(account) {
//     return request.post(api.customer.driver, account);
// }

// export function logout() {
//     return request.post(api.customer.logout);
// }

// export function updateDriver(params) {
//     const { id, data } = params;
//     const uri = `${api.customer.driver}/${id}`;
//     return request.patch(uri, data);
// }

// export function getDriverInfo(params) {
//     const { id } = params;
//     const uri = `${api.customer.driver}/${id}`;
//     return request.get(uri);
// }

// export function passengerRegister(account){
//     return request.post(api.customer.passengerRegister,account);
// }

// export function passengerLogin(account){
//     return request.post(api.customer.passengerLogin,account);
// }

// export function getRoutes(param) {
//     const routerApi = api.routes.getRoutes + '?filter=' + JSON.stringify(param);
//     return request.get(routerApi);
// }

// export function passengerReservation(param){
//     return request.post(api.reservation.passengerReservation,param);
// }

// export function getDriverOrder(params) {
//     const { id, filter } = params;
//     const uri = `${api.order.driverOrder}/${id}?filter=${JSON.stringify(filter)}`
//     return request.get(uri);
// }

// export function getDriverTrip(params) {
//     return request.post(api.getDriverTrips, params);
// }

// export function updateDriverOrder(params) {
//     const { id, data } = params;
//     const uri = `${api.order.driverOrder}/${id}`;
//     return request.patch(uri, data);
// }

// export function changePassword(params) {
//     return request.post(api.customer.changePassword, params);
// }

// export function getNotifications(params) {
//     const { id } = params;
//     const uri = `${api.customer.driver}/${id}/${api.pushNotifications}`
//     return request.get(uri);
// }

// export function deleteSingleNotification(params) {
//     const { id, fkId } = params;
//     const uri = `${api.customer.driver}/${id}/${api.pushNotifications}/${fkId}`
//     return request.deleteData(uri);
// }

// export function uploadUserAvator(params) {
//     const { picture } = params;
//     const uri = `upload/avatar`
//     return request.uploadImage(uri, picture);
// }

// export function submitSuggestion(params) {
//     return request.post(api.submitSuggestion, params);
// }
