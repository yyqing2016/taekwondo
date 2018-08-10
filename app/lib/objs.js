export function deepMerge(target, src) {
    for (const k in src ) {
        const item = (src)[k]
        if (typeof item == 'object') {
            const cur = (target)[k]
            if (typeof cur === 'object') {
                deepMerge(cur, item)
            } else {
                (target)[k] = deepMerge({}, item)
            }
        } else {
            (target)[k] = item
        }
    }
    return target
}


export function array_indexBy(array, test, fromIndex) {
    if (array) {
        const size = array.length
        if (fromIndex == null)
            fromIndex = 0
        for (let i = fromIndex; i < size; i++) {
            if (test(array[i]))
                return i
        }
    }
    return -1
}
