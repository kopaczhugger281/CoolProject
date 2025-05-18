let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('<h1>Welcome to CoolProject!</h1>');
});

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});
