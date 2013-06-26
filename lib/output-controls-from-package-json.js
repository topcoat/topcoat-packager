module.exports = function (pathToPackage) {
    
    if (!pathToPackage) {
        console.error('Please provide a path to the package json you want to read.')
        return
    }
    
    // start walking the various repos 
    var json = require(pathToPackage)
    ,   bits = 'controls utils theme skins'.split(' ')
    ,   result = []

    // concat all the repos to a single result array
    bits.forEach(function(bit) {
        var repos = Object.keys(json.topcoat[bit])
        result = result.concat(repos)
    })

    // output them line on line
    result.forEach(function(repo) { console.log(repo) })
}

if (require.main === module) module.exports(process.argv[2] || null)
