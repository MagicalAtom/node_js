const express = require('express')
const app = express()


app.get('/home',(request,response) => {
  response.send('');  // write all html code
})

app.listen(3000)
