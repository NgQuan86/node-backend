const connection = require('../config/database');


//  Show user
const getUsers = async (req, res) => {

    let [results, fields] = await connection.query('select * from users')

    return res.status(200).json({
        message: 'ok',
        data: results
    })
}


// Create a user
const createNewUser = async (req, res) => {

    let { email, city, name } = req.body;

    if (!email || !name || !city) {
        return res.status(200).json({
            message: 'Missing',
        })
    }

    let [results, fields] = await connection.query(
        `INSERT INTO users (email,name,city)value (?,?,?)`, [email, name, city]
    );
    return res.status(200).json({
        message: 'ok',
        data: results
    })


}


// Update a user
const UpdateUser = async (req,res) => {

    let { email, city, name,id } = req.body;

    if (!email || !name || !city || !id) {
        return res.status(200).json({
            message: 'Err',
        })
    }

    let [results, fields] = await connection.query(
        `UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, id]
    );

    return res.status(200).json({
        message: 'ok',
        data:results
    })
}


// Delete a user
const DeleteNewUser = async (req,res) => {
    
    let userid = req.params.id;
    if (!userid) {
        return res.status(200).json({
            message: 'Err',
        })
    }
    
    let [results, fields] = await connection.query(
        `DELETE FROM  users WHERE id = ?`, [userid]
    );
    return res.status(200).json({
        message: 'ok',
    })

}



module.exports = {
    getUsers,
    createNewUser,
    UpdateUser,
    DeleteNewUser
};
