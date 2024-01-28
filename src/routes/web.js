const express = require('express');
const router = express.Router();
const { getHomepage, abc, EJS, postCreateUser } = require('../controller/homeController');

//khai bao route

// app.get('/', (req, res) => { khong can dung app de khai bao nhu trong server
//     res.send('Hello World with nodemon!')
// })


router.get('/', getHomepage); // goi ham da thuc thi o homeController

router.get('/abc', abc );

router.get('/xyz', EJS);

router.post('/create-user', postCreateUser); 

module.exports = router;