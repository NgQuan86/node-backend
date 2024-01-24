
require('dotenv').config();
const { render } = require('ejs');
const express = require('express');
const configViewEngine = require('./config/viewEngine');

const port = process.env.PORT
// console.log(process.env)
const app = express()
const webRouter = require('./routes/web'); // khong can chinh xac ten bien export trong file web.js

//----------------------------------+---------------------------------------------


//config template engine from viewEngine.js
configViewEngine(app); // truyen ham express vao

//khai bao routes
app.use('/',webRouter); // co the them '/' phia truoc de tao them duong dan 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})