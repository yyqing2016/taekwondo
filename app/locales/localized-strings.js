
import { getDeviceLocale } from 'react-native-device-info'

import en from './en'
import zh from './zh'
import { deepMerge } from '../lib/objs'

let GALanguage = 'en' | 'zh'

class LocalizedStrings {
    
    constructor() {
        this.t = this.initLocalizedStrings()
        this.l = this.initLocaleLanguage()
    }

     initLocaleLanguage(){
        let lang = 'en'
        try {
            const locale = getDeviceLocale()
            if (locale.startsWith('zh')) {
                lang = 'zh'
            }
        } catch (error) {
            console.log(error)
        }
        return lang
    }

     initLocalizedStrings() {
        let strings = en
        try {
            const locale = getDeviceLocale()
            if (locale.startsWith('zh')) {
                strings = {} 
                deepMerge(strings, en)
                deepMerge(strings, zh)
            }
        } catch (error) {
            console.log(error)
        }
        return strings
    }
        
}

export const LS = new LocalizedStrings()
