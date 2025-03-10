  const express = require('express')

// Create an instance of express and call it "app"
const app = express()

// Listen on port 3000
app.listen(3000, () => {
console.log('Server started on port 3000')
})