const str = 'test.js, this.js, style.css, script.html, another.js'

const re = /(\w+)\.js/g

let match = re.exec(str)

while(match){
  const filename = match[1]
  console.log(filename);
  match = re.exec(str)
}