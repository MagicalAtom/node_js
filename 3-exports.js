// اکسپورت ماژول ها در نود جی اس
// باید یک نام واسش در نظر بگیریم


function get(){
  
}



module.exports = {
  getfunction:get,
}

یا 

module.exports.getfunction = get



تو صفحات دیگه 
require
میکنیم روی یک متغیر و استفاده میکنیم 


const getPage = require('./get')

get.getfunction()




