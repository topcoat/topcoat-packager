var path = require('path')
,   fs   = require('fs')

module.exports = function (pathToRepo, key, value) {
    
    var pkg = path.join(pathToRepo, 'package.json')
    ,   json = require(pkg)
    
    'controls utils theme skins'.split(' ').forEach(function (bit) {
        Object.keys(json.topcoat[bit]).forEach(function (currentKey) {
            if (currentKey === key) {
                json.topcoat[bit][key] = value
                fs.writeFile(pkg, JSON.stringify(json, null, '  '), function (err) {
                    if (err) throw err
                    console.log('Saved canonical package.json')
                })
            }
        })
    })
}
