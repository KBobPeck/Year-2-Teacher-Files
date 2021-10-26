const fs = require('fs')

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi0123456789jklmnopqrstuvwxyz0123456789_ ,=#$%^&*()-+"; //@ {} [] ' . " ° !
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


fs.writeFileSync('./jenkins.txt', makeid(10000), {flag: 'w'})