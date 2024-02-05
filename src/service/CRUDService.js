const connection = require('../config/database');

//
const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from users')
    return results;
}


//
const getUserById = async (UserId) => { //  function query take info from database by Id UserId

    let [results, fields] = await connection.query('select * from users where id = ?', [UserId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}


//
const updateUserById = async (email, name, city, userId) => {

    let [results, fields] = await connection.query(
        `UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, userId]
    );
}


//
const deleteUserById = async (Id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM  users WHERE id = ?`, [Id]
    );
}



//************ EXPORTS ************** */
module.exports = {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}