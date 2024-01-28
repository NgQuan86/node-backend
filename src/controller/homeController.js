const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const abc = (req, res) => {

    res.send('Hello ABC')
}
const EJS = (req, res) => {

    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {  // can khoi to app ben viewEngine.js
    console.log('check req.body', req.body);

    let { email, city } = req.body;
    let name = req.body.myname;

    console.log(`<<<<check>>>>> email: ${email}, name: ${name}, city: ${city}`);


    connection.query(
        `INSERT INTO users (email,name,city)
                     value (?,?,?)`,
                     [email, name, city],

        (err, results) => { //funtion arrow
            console.log(results);
            res.send('created a user')
        }
    )
}

module.exports = {
    getHomepage,
    abc,
    EJS,
    postCreateUser
}