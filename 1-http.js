برای بخش سرور : 
const http = require('http')
const fs = require('fs')
const route = require('./router')

const server = http.createServer((request, response) => {
    // دریافت http Method و url و headers ها از طریق ورودی اول یعنی req
    const {method,url,headers} = request;
        // این میاد سه تا متغیر با این اسم ها میسازه . بعد از آبجکتی که جلوش میدیم میاد مقادیری که کلیدی برابر با این متغیر ها دارن رو میریزه داخلش خودشون
    console.log(method);
    console.log(url)
    console.log(headers)
    // ====================================================== //
    // متغیر دوم یا res برای مشخص کردن خروجی هست
    // Writing string data
  response.write(route.Route(url))
    // Prints Output on the browser in response
    response.end(' ok');

})


server.listen(3000)


برای بخش روتر : 



function router(route) {
    switch (route) {
        case '/':
            return '<h1>Home Page</h1>'
        break;
        case '/login':
            return '<h1>Login Page</h1>';
            break;
        case '/shop':
            return '<h1>Shop Page</h1>';
            break;
        default:
            return '<h1>404 not found</h1>';
            break;

    }
}


module.exports.Route = router;







// ریدایرکت کاربر 
response.statusCode = 302; // استتوس کد ریدایرکت کاربر
response.setHeader('Location','/login');
response.end();


یا 
response.writeHead(302,{Location:'/'});












