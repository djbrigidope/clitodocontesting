const fs = require('fs');
// console.log('executed b4 thizz');
//
// fs.readFile('./addContacts.json', function read(err, data){
//   if (err){
//     throw err;
//   }
//   content = data;
//   console.log(content);
// });


let data = fs.readFileSync('./addContacts.json','utf8');
console.log(data);
