const express = require('express');
const router = express.Router();
const {getUsers,createNewUser,UpdateUser,DeleteNewUser} = require('../controller/APIController');


const initAPIRoute = (app) => {
    router.get('/Users', getUsers);  // methode get
    router.post('/create-a-user', createNewUser);  // methode get
    router.put('/update-a-user', UpdateUser);  // methode get
    router.delete('/delete-user/:id', DeleteNewUser);  // methode get

    return app.use('/api/v1/',router)
}


module.exports = initAPIRoute;