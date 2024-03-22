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
pool.getConnection((err,conn)=>{
    if(err) throw err
    Router.get('/eventCard',(req,res)=>{
        let response=[]
        let event_status = ["Event Approval","Faculty Approval","Student Registration","Attendance Opening","Attendance Updation","Points Updation","Rewards Results"]
        conn.query(`SELECT name,event_status,id FROM event `,(err,rows)=>{
            if(err) throw err
            console.log(rows)
            for (let i = 0; i < rows.length; i++) {
                if(rows[i]['event_status']<8){
                    response.push({name:rows[i]["name"],status:event_status[rows[i]['event_status']]+" Pending",id:rows[i]["id"]})       
                }
                else{
                    response.push({name:rows[i]["name"],status:"Event is Completed",id:rows[i]["id"]}) 
                }   
            }
           res.send(response)
        })
    })
    Router.get('/getStatus',(req,res)=>{
        let id = req.query.id
        console.log(id) 
        conn.query(`SELECT event_status FROM event WHERE id=${id}`,(err,rows)=>{
            if(err) throw err
            res.send(rows)
        })
    })
    conn.release()
})
Router.get('/event_status', (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err
        var connection = conn
        var response = ""
        var current_status = 0
        var approval_status = ["Event Approval","Faculty Approval","Student Registration","Attendance Opening","Attendance Updation","Points Updation","Rewards Results"]
        connection.query("SELECT e.name ,e.event_status from event e ", (err, rows, fields) => {
            response+=rows[0]["name"]+" "+"--->"+'<br>'+"<hr>"+"<hr>"
            for (let i = 1; i < 9; i++) {
                if(i< rows[0]["event_status"]){
                    response+=approval_status[i-1]+" "+"completed"+" "+"✔"+"<br>"+"<hr>"
                }
                else if(i<8){
                    response+=approval_status[i-1]+" "+"pending"+" "+"𐄂"+"<br>"+"<hr>"
                }
                else if(8 != rows[0]["event_status"] ){
                    response+="Event is not completed fully"+"<br>"+"<hr>"
                }
                else{
                    response+="Event is completed fully"+"<br>"+"<hr>"
                }
            }
            current_status = rows[0]["status"]
            res.send(response);

        })
       

    })
})
Router.put('/change_state', jsonParser, (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err
        let connection = conn
        let status = req.body["status"]
        let id = req.body["id"]
        console.log(status)
        let query = "UPDATE event SET event_status =" + status +"WHERE id="+id
        connection.query(query)
        connection.release()

    })
    console.log()
    res.send("State Changed Successully")
})
module.exports = Router
