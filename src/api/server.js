import wp from 'wepy'

let testUrl = ''

function querySting(obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return ''
    }
    let querystr = ''
    for(let item in obj){
        querystr += (item + '=' + obj[item] + '&')
    }
    return querystr.slice(0, (querystr.length - 1))
}

export default function (opt) {
    let reqUrl = testUrl + querySting({
        action: 'service',
        openId: '79e10b2e-b8c3-11e3-8d13-e41f137ad9f4',
        dbid: '7950957592',
        method: opt.interface
    })
    return new Promise((resolve, reject) => {
        wp.request({
            url: reqUrl,
            data: opt.data || {},
            method: opt.method,
            dataType: opt.dataType || 'json',
            header: {
                'content-type': opt.dataType == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                resolve(res)
            },
            fail: function (res) {
                reject(res)
            }
        })
    })
}
