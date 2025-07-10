const fs = require('fs');
fs.readFile('index.txt','utf8', (err,content) => {
    if (err) throw err;
    console.log(content);
});


fs.writeFile('output.txt', "Writing Into the file", (err,data) => {
      if (err) throw err;
      console.log("Succesfully written into the file");
})


fs.appendFile('output.txt', '\nAppending a piece of text', (err,data) => {
    if (err) throw err;
    console.log("Appended the text");
})