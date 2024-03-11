const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const pool = require('../database')
const Router = express.Router()
const app = express()
var jsonParser = bodyParser.json()

Router.get('/events', (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err
        var connection = conn

        connection.query("SELECT * from event", (err, rows, fields) => {
            res.send(rows)
        })
        connection.release()

    })
})
Router.get('/event_status', (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err
        var connection = conn
        var response = ""
        var current_status = 0
        connection.query("SELECT e.name ,e.event_status,es.name status from event e inner join event_status es ON e.event_status = es.id ", (err, rows, fields) => {
            response+=rows[0]["name"]+"--->"+rows[0]["status"]+" "+"pending"
            current_status = rows[0]["status"]
            res.send(response);

        })
       

    })
})
Router.put('/change_state', jsonParser, (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err
        var connection = conn
        var status = req.body["status"]
        console.log(status)
        let query = "UPDATE event SET event_status =" + status
        connection.query(query)
        connection.release()

    })
    console.log()
    res.send("State Changed Successully")
})
module.exports = Router
