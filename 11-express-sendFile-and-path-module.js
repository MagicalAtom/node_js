// this file admin.js ( routing project )
// fileroot =>> routes/admin.js
// help(project root)/routes/admin.js

const app = require('express')


const path = require('path')

const router = app.Router()

 // به این صورت میتونیم فایل html رو به عنوان خروجی بفرستیم
// از sendFile به جای send روی res استفاده میکنیم
// این متد یک فایل اچ تی ام ال میگیره و در خروجی نمایش میده
// مسیر کامل فایل رو میگیره .
// به این صورت درست میکنیم مسیر زیر رو نگاه کنید
// از ماژول path استفاده میکنیم


router.get('/home',(req,res) => {
res.sendFile(path.join(__dirname,'../views/index.html'))
    // از ماژول path استفاده کردیم
    // برای اینکه dirname__ رو به اسم فولدر متصل کنیم
    // متغیر dirname__ میگه اسم فولدر تا روت پروژه یعنی نام فولدر پروژه
    // این میچسبونه دایرنیم رو به یکی بیرون از فولدر routes که این فایل داخلشه و یک مسیر کلی خروجی میده
    // __dirname ==> directory root
    // __filename ==> filename built in node js
})




module.exports.AdminRoute = router
