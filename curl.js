const request = require('request')

module.exports = (url) => {
  request(url, function (error, body) {
    if(error) throw error;
    process.stdout.write(body)

})
}

