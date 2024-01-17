// برای ساخت یک لیستنر که گوش بده هر وقت امیت شد داخلش عمل کنه 

const {EventEmitter} = require('events')


// تعریف لیستنر
const em = new EventEmitter();

em.addListener('get',data => {
  //data for getting data when call Listener
  console.log("data getting  : " + data );
}



// ورودی اول نام لیستنر و ورودی دوم دیتا هستش
               // هر جا نیاز باشه هایر کنیم لیستنر رو میزاریمش
em.emit('get','Hello World');               
