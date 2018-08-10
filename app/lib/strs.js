import moment from 'moment'
import images from '../assests/images';
import Config  from './../Config'

export function isValidTelNumber(tel) {
    return /^[0-9]{9}$/.test(tel)
}

export function isValidPassword(password){
   return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,8}$/.test(password)
}

export function formatDateTimeToTime(dateTime) {
     let time = moment(dateTime).format('LT')
     return time
}

export function formatDateTimeToDate(dateTime) {
    let date = moment(dateTime).format('HH:mm  D MMMM, YYYY')
    return date
}

export function getCompletePictureAddress(address, type){
    let  pictureAddress = images.head
    if(!!address){
        pictureAddress = {uri:`${Config.domain}${address}`}
    }
    return pictureAddress
}