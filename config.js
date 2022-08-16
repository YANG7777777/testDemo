const fs = require('fs')
const env = process.env.NODE_ENV

const path = {
    serve: './.env.development', // 开发环境
    develop: './.env.develop', // 测试环境
    development: './.env.development', // 开发环境
    production: './.env.production' // 生产环境
}

fs.readFile(path[env], 'utf8', function(err, data) {
    if(err) throw new Error(err)
    //  \n 代表换行    \r 代表回车
    const arr = data.split('\n')
    let obj = {}
    arr.forEach(item => {
        // 判断有无注释掉的
        if(item.indexOf('=') > -1 && !item.startsWith('#')) {
            const a = item.split('=')
            obj[a[0]] = a[1].replace('\r', '').trim()
        }
    })

    obj = {
        env: obj
    }

    const str = `var process = ${JSON.stringify(obj)}`

    fs.writeFile('./public/config.js', str, function() {
        console.log('配置文件已生成')
    })
})