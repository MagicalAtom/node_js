const express = require('express')

const application = express()

// from this secion
application.get('/register',(req,res) => {
    res.send("<form method='post' action='/auth'><input type='text' name='name'><input type='submit' name='name' value='register'></form>")
})

// to this section 
application.use('/auth',(req,res,next) => {
    res.redirect('/')
    next()
})



// and redirect to home page
application.get('/',(req,res) => {
    console.log('You are redirect from .auth route')
    res.send('welcome')
})


application.listen(3000)
