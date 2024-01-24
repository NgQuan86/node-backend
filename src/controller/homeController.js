
const getHomepage = (req,res)=> {
    res.send('Hello world with nodemon')
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