module.exports = function (currentVersion) {
    
    var bits = currentVersion.split('.')
    ,   major = bits[0]
    ,   minor = ++bits[1]
    ,   patch = '0'

    console.log(major + '.' + minor + '.' + patch)
}
