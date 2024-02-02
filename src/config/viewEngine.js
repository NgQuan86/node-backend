//dung de cau hinh bo khung

const path = require('path'); // de su dung path.join cho viec fix loi localhost
const express = require('express'); // de dung express

//FUNCTION CONFIGURE 
const configViewEngine = (app) => { //tao ham de chay ung dung app


    //config template engine (khai bao noi luu tru)
    app.set('views', path.join('./src', 'views')) //set vao ('./src', 'views')
    app.set('view engine', 'ejs') // thay pugs bang ejs

    //config static file : css, image, js (thuan tien cho viec lay du lieu trong public, manage files static)
    // app.use(express.static(path.join(__dirname, 'public'))); neu trong phan server.js can dung __dirname delay truc tiep tu folder src 
    app.use(express.static(path.join('./src', 'public')));

    //config req.body 
    app.use(express.json())
    app.use(express.urlencoded({ extended: true })) //urlencoded là một middleware trong Express.js được sử dụng để xử lý dữ liệu được gửi từ biểu mẫu HTML khi sử dụng phương thức POST.
}

module.exports = configViewEngine;