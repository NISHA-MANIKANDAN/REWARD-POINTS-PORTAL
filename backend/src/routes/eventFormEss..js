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
    Router.get('/designations',(req,res)=>{
        conn.query('SELECT name from designation',(err,rows,fields)=>{
            if(err) throw err
            res.send(rows)
        })
    })
    Router.get('/typesofevent',(req,res)=>{
        conn.query('SELECT name from event_type',(err,rows,fields)=>{
            if(err) throw err
            res.send(rows)
        })
    })
    Router.get('/categories',(req,res)=>{
        conn.query('SELECT name from event_category',(err,rows,fields)=>{
            if(err) throw err
            res.send(rows)
        })
    })
})


module.exports = Router