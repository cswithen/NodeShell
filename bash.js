process.stdout.write('prompt >');

const done = (output) => {
  process.stdout.write(output)
}
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(" ");
  console.log(cmd)

  if(cmd[0] === 'pwd') {
    pwd(done);
  }
  if(cmd[0] === 'ls'){
    ls(done);
  }
  if(cmd[0] === 'cat'){
    cat(cmd[1], done)
  }
  if(cmd[0] === 'curl') {
    curl(cmd[1], done)
  }
  process.stdout.write('You typed: ' + cmd)
  
});

const pwd = require(`./pwd.js`);
const ls = require('./ls.js')
const cat = require('./cat.js')
const curl = require('./curl.js')
