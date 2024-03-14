const express = require('express')
const app =  express()
const pool =  require('../database')
const Router = express.Router()

pool.getConnection((err,conn)=>{
    if(err) throw err
        Router.post('/event/request',(req,res)=>{
            console.log(req.body)
            var department,designation
            conn.query(`SELECT id from designation WHERE name="${req.body.Designation}"`,(err,rows)=>{
                console.log(rows)
                designation=rows[0]["id"]
                console.log(designation)
                updateFaculty()
            })
            conn.query(`SELECT id from department WHERE name="${req.body.Dept}"`,(err,rows)=>{
                console.log(rows)
                department=rows[0]["id"]
                console.log(department)
                updateFaculty()
            })
            function updateFaculty(){
                if(department !==undefined && designation !== undefined){
                    conn.query("INSERT INTO faculty (salutation,name,faculty_id,designation,department,mobile) VALUES (?,?,?,?,?,?)",[req.body.saluation, req.body.Faculty_name, req.body.Faculty_id, designation, department, req.body.Mobile],(err)=>{
                           if(err) throw err
                           res.send("Successfully added faculty details")
                       })
                }
        
                else{
                    console.log("Still waiting...")
                }
            }
            
             
        })
})

module.exports=Router