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

const postCreateUser = async (req, res) => {  // can khoi to app ben viewEngine.js
    console.log('check req.body', req.body);

    let { email, city } = req.body;
    let name = req.body.myname;

    console.log(`<<<<check>>>>> email: ${email}, name: ${name}, city: ${city}`);

    //+++++ CALLBACK ++++
    // connection.query(
    //     `INSERT INTO users (email,name,city)
    //                  value (?,?,?)`,
    //                  [email, name, city],

    //     (err, results) => { //funtion arrow
    //         console.log(results);
    //         res.send('created a user')
    //     }
    // )


    //++++ promise async await ++++
    let [results, fields] = await connection.query(
        `INSERT INTO users (email,name,city)value (?,?,?)`, [email, name, city]
    );
    
    res.send('created a user')
    console.log(results);

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    abc,
    EJS,
    postCreateUser,
    getCreatePage
}