const express = require('express');
const app = express();
require('dotenv').config() // Allow .env files
//5000 by default but can be set via .env if you want to override for different machines such as dev environments
const PORT = process.env.PORT || 5000 

// Log each incoming request
const requestLogger = (req, res, nxt) => {
  console.log('Method:', req.method)
  console.log('Path:', req.path)
  console.log('Body:', req.body)
  console.log('_____')
  nxt()
}

app.use(express.static(__dirname + '/public')) // Make files available without specifying a route for them
app.use(requestLogger) // log incoming requests

// app.get('/public/assets/images/:image', (req, res) => { 
//   res.set("Content-Type", "image/jpeg")
//   res.send(resp.body)
// })

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`)
})