const connection = require('../config/database');


const getHomepage = (req,res)=> {
    return res.render('home.ejs')
}
const abc = (req,res)=> {
    
    res.send('Hello ABC')
}
const EJS = (req,res)=> {
    
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    abc,
    EJS
}