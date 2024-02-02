const express = require('express');
const router = express.Router();
const { getHomepage, postUpdateUser, EJS, postCreateUser, getCreatePage, getUpdatePage, postDeleteUser, postHandleDeleteUser } = require('../controller/homeController');

//khai bao route

// app.get('/', (req, res) => { khong can dung app de khai bao nhu trong server
//     res.send('Hello World with nodemon!')
// })


router.get('/', getHomepage); // goi ham da thuc thi o homeController

router.get('/xyz', EJS);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage ); // them ( /:id -> cach khai bao route dong) de access vao trang co id tuong ung

router.post('/create-user', postCreateUser); 

router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser); 

router.post('/delete-user', postHandleDeleteUser); 

module.exports = router;