import {
    Dimensions,
    Platform,
    StyleSheet,
} from 'react-native'
import { getDeviceCountry, getDeviceLocale } from 'react-native-device-info'

const SMALLEST_BORDER_WIDTH = StyleSheet.hairlineWidth
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const IMAGE_PICKER_ALBUMS = ['UserLibrary', 'PhotoStream', 'RecentlyAdded', 'Screenshots', 'Favorites']
export { SMALLEST_BORDER_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, IMAGE_PICKER_ALBUMS }

// iPhone X 安全区：上44 下34
export function isIphoneX() {
    const X_WIDTH = 375
    const X_HEIGHT = 812

    return (
        Platform.OS === 'ios' &&
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
        (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
    )
}

function isIpad() {
    if (Platform.OS !== 'ios') {
        return false
    }
    const aspectRatio = SCREEN_HEIGHT >= SCREEN_WIDTH ? SCREEN_HEIGHT / SCREEN_WIDTH : SCREEN_WIDTH / SCREEN_HEIGHT
    if (aspectRatio < 1.55) {
        return true
    } else {
        return false
    }
}

export const G_IsIPad = isIpad()

/**
 * 获取系统的语言表述。
 */
export function getSysLanguageDesc() {
    let desc = getDeviceLocale()
    const country = getDeviceCountry()
    if (desc.includes(country)) {
        return desc
    } else {
        return `${desc}-${country}`
    }
}