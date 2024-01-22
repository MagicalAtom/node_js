// libraries
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

// express
const application = express()



// start the project


// init bodyParser
application.use(bodyParser.urlencoded({extended: false}))


// define routes
application.get('/filename',(req,res) => {
    res.send("<center><form method='post' action='/create'><input type='text' name='filename'><input type='submit' value='send'></form></center>")
})


application.use('/create',(req,res,next) => {
    var filename = req.body.filename
    fs.writeFileSync('hello.txt',filename)
    console.log('you are redirect to home page very soon ... ')
    // متغیر res کار هایی که ما میخوایم از سمت سرور انجام بدیم و متغیر req از سمت کاربر میاد همینطور که دیدین در بالا گرفتیم
    res.redirect('/')

})

// define a route home page  the end of file
application.get('/',(req,res) => {
    console.log('you are in home page , ')
    res.send('You are welcome')
})




// create a server
application.listen(3000)
