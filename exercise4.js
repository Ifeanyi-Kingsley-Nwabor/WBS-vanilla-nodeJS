const fs = require('fs');

fs.readFile('./test.html', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
