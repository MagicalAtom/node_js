// میدلور ها در اکسپرس به این صورت تعریف میشوند : 
const express = require('express')
const app = express()

app.use((req,res,next) => {
  console.log('this is from middleware');
  next()
});

// در اصل برنامه منتظر میمونه تا
// next()
// صدا زده بشه نگرنه به میدولر بعدی نمیره و برنامه کرش میکنه .
// عملیات رو انجام میدیم و بعد نکست رو صدا میزنیم 

