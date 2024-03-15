const express = require('express')
const app =  express()
const pool =  require('../database')
const Router = express.Router()

pool.getConnection((err,conn)=>{
    Router.get('/departments',(req,res)=>{
        conn.query('SELECT name from department',(err,rows,fields)=>{
            if(err) throw err
            res.send(rows)
        })
    })
})


module.exports = Router