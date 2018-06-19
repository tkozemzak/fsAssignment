var fs = require('fs');
var infoTextOne = fs.readFileSync('./challenge1/info.txt', 'utf-8')
console.log(infoTextOne)



var names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
names = 'Tim\nJosh\nSmrita\nDonnie\nTyler\nLocke'

var changeTextTwo = fs.writeFileSync('./challenge2/info.txt', names)
console.log(names)



var nameChange = fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', function(err) {
  if (err) throw err;
  console.log('File Renamed.');
});



var newFolder = fs.mkdir('./challenge4/copyfolder', function(err) {
  if (err) throw err;
  console.log('folder created');
});

var moveFile = fs.rename('./challenge4/info.txt', './challenge4/copyfolder/info.txt', function(err) {
  if (err) throw err;
  console.log('file moved');
});





var challengeFiveText = fs.readFileSync('./challenge5/info.txt', 'utf-8')

challengeFiveText = challengeFive(challengeFiveText)

function challengeFive(str) {
  let newStr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (newStr[i] === '-') {
      newStr[i] = ' '
    }
  }
  return newStr.join('')
}
console.log(challengeFiveText);




var challengeSix = fs.readdirSync('./challenge6')
challengeSix = challengeSixFunc(challengeSix)

function challengeSixFunc(array){
  let newArr = []
for(let i=0; i<array.length; i++){
  if(array[i].includes('txt')){
    newArr.push(array[i])
  }
}
console.log(newArr);
  return newArr
}
