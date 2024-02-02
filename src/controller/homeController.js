const connection = require('../config/database');
const { getAllUser, getUserById, updateUserById, deleteUserById } = require('../service/CRUDService');


// use code from CRUDservice.js like a model (MVC)
const getHomepage = async (req, res) => {

    let results = await getAllUser();

    console.log('check row', results);

    return res.render('home.ejs', { listUser: results });
}


//
const EJS = (req, res) => {

    res.render('sample.ejs')
}

// page to create users
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

// Function create a user
const postCreateUser = async (req, res) => {  // can khoi tao app ben viewEngine.js
    console.log('check req.body', req.body);

    let { email, city } = req.body;
    let name = req.body.myname;
    // console.log(`<<<<check>>>>> email: ${email}, name: ${name}, city: ${city}`);

    //++++ promise async await ++++
    let [results, fields] = await connection.query(
        `INSERT INTO users (email,name,city)value (?,?,?)`, [email, name, city]
    );

    // res.send('created a user')
    res.redirect('/')
    console.log(results);
}

// get info user by id
const getUpdatePage = async (req, res) => {

    const UserId = req.params.id;
    let user = await getUserById(UserId);

    // console.log('check req,params', req.params, UserId);
    res.render('edit.ejs', { userEdit: user });
}

//
const postUpdateUser = async (req, res) => {  
    
    let { email, city, userId } = req.body
    let name = req.body.myname;

    await updateUserById(email, name, city, userId);

    res.redirect('/');

}

//to confirm delete
const postDeleteUser = async (req,res) => {
    const UserId = req.params.id;
    let user = await getUserById(UserId);

    res.render('delete.ejs', {userEdit : user})
}

const postHandleDeleteUser = async (req,res) => {
    const Id = req.body.userId
    
    await deleteUserById(Id);

    res.redirect('/')
}

// ***********  EXPORTS  *************
module.exports = {
    getHomepage,
    EJS,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
}