const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'reward_points'

})

module.exports=pool