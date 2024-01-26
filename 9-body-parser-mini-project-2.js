const express = require('express')

// for working with file
const fs = require('fs')

// خروجی های قابل درک برای نود جی اس از مقادیر پست شده توسط فرم
const bodyParser = require('body-parser')


const app = express()

// define bodyParser for reading value posted from all forms

app.use(bodyParser.urlencoded({extended:false}))


// define a route for display a form
app.get('/add',(req,res) => {
    res.send("<center><form method='post' action='/create-record'><input type='text' name='username'><br><br><br><input type='text' name='password'><br><br><br><input type='submit'></form></center>")
})

// make a record ======
app.post('/create-record',(req,res) => {
    var username = req.body.username // readable with body-parser package
    var password = req.body.password
    fs.writeFileSync(`users/${username}.txt`,`username : ${username}\n password : ${password}`)
    res.send('<center><h1>Record Created</h1></center>')
})


app.listen(3000)
