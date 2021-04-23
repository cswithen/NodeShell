const fs = require('fs');

module.exports = (fileName, done) => {
  fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
    if(err){
      done("Something went wrong..")
  } else {
      done(data);
  }
})
}