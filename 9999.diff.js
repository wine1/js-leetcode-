const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    const result = {}
    syncKeys(current, pre)
    console.log('synckeys',current,pre)
    _diff(current, pre, '', result)
    console.log('result',result)
    return result
}

/** 同步所有 key 到当前 将新的对象中去除的结点 值置为null,key 主要是为了检测 array 中删除的元素或者 obj 中删除的 key */
function syncKeys(current, pre) {
    if (current === pre) return
    const rootCurrentType = type(current)
    const rootPreType = type(pre)
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        //if(Object.keys(current).length >= Object.keys(pre).length){
            for (let key in pre) {
                const currentValue = current[key]
                if (currentValue === undefined) {
                    current[key] = null
                } else {
                    syncKeys(currentValue, pre[key])
                }
            }
        //}
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach((item, index) => {
                syncKeys(current[index], item)
            })
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) return
    const rootCurrentType = type(current)
    const rootPreType = type(pre)
    if (rootCurrentType == OBJECTTYPE) {
        console.log(123,current,pre)
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length && path !== '') {
            setResult(result, path, current)
        } else {
            for (let key in current) {
                const currentValue = current[key]
                const preValue = pre[key]
                const currentType = type(currentValue)
                const preType = type(preValue)
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, concatPathAndKey(path, key), currentValue)
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, concatPathAndKey(path, key), currentValue)
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, concatPathAndKey(path, key), currentValue)
                        } else {
                            currentValue.forEach((item, index) => {
                                _diff(item, preValue[index], concatPathAndKey(path, key) + '[' + index + ']', result)
                            })
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, concatPathAndKey(path, key), currentValue)
                    } else {
                        for (let subKey in currentValue) {
                            const realPath = concatPathAndKey(path, key) + (subKey.includes('.') ? `["${subKey}"]` : `.${subKey}`)
                            _diff(currentValue[subKey], preValue[subKey], realPath, result)
                        }
                    }
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current)
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current)
            } else {
                current.forEach((item, index) => {
                    _diff(item, pre[index], path + '[' + index + ']', result)
                })
            }
        }
    } else {
        setResult(result, path, current)
    }
}
/** 记录对象路径 局部更新数据 */
function concatPathAndKey(path, key) {
    return key.includes('.')
        ? path + `["${key}"]`
        : (path == '' ? '' : path + ".") + key
}

function setResult(result, k, v) {
    // console.log(k)
    const t = type(v)
    if (t != FUNCTIONTYPE) {
        //if (t != OBJECTTYPE && t != ARRAYTYPE) {
        result[k] = v
        // } else {
        //     result[k] = JSON.parse(JSON.stringify(v))
        // }
    }
}

/**获取对象类型 */
function type(obj) {
    return Object.prototype.toString.call(obj)
}

// test

diff({
    a: 1, b: 2, c: "str", d: { e: [2, { a: 4,x:{y:1} }] }, f: true, h: [1], g: { a: [1, 2], j: 111 }
}, {
    a: [], b: "aa", c: 3, d: { e: [3, { a: 3 },5] }, f: false, h: [1, 2], g: { a: [1, 1, 1], i: "delete" }, k: 'del'
})

// { "a": 1, "b": 2, "c": "str", "d.e[0]": 2, "d.e[1].a": 4, "d.e[2]": 5, "f": true, "h": [1], "g.a": [1, 2], "g.j": 111, "g.i": null, "k": null }
console.log(123)
