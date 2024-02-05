
require('dotenv').config();
const { render } = require('ejs');
const express = require('express');

const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database');
const webRouter = require('./routes/web');
const port = process.env.PORT

const initAPIRoute = require('./routes/api')

 // khong can chinh xac ten bien export trong file web.js
const app = express()
//----------------------------------+---------------------------------------------


//config template engine from viewEngine.js (nen khai bao tren routers)
configViewEngine(app); // truyen ham express vao

//khai bao routes
app.use('/',webRouter); // co the them '/' phia truoc de tao them duong dan 

initAPIRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})