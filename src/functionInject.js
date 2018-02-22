/**
 * 埋点事件注入
 */

//埋点事件
let log = null

//事件注入
const inject = (fn) => {
    if (fn && typeof (fn) == 'function') {
        log = fn
    }
}

module.exports = {
    get log() {
        return log
    },
    inject
}