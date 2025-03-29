let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

let data = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};

app.post('/api/users', (req, res) => {
  let user = req.body;
  // Save the user to a database or perform other actions with 'user'
  console.log("User added:", user);
  res.status(201).json({ message: "User created successfully" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
