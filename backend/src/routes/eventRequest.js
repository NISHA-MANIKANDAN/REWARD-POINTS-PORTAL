const express = require('express')
const app =  express()
const pool =  require('../database')
const Router = express.Router()

pool.getConnection((err,conn)=>{
    if(err) throw err
        Router.post('/event/request',async(req,res)=>{
            console.log(req.body)
            let event_type,event_category
            conn.query(`SELECT id FROM event_type WHERE name=?`,[req.body["Type"]],(err,rows)=>{
                if(err) throw err
                event_type = rows[0]["id"]
                console.log(`set event type value ${event_type}`)
                addEvent()
            })
            conn.query(`SELECT id from event_category WHERE name=?`,[req.body["Category"]],(err,rows)=>{
                if(err) throw err
                event_category = rows[0]["id"]
                console.log(`set  type value ${event_category}`)
                addEvent()
            })
            function addEvent(){
                if(event_category && event_type){
                    const startDateTime = new Date(req.body["Start_Date"]).toISOString().slice(0, 19).replace('T', ' ');
                    const endDateTime = new Date(req.body["End_Date"]).toISOString().slice(0, 19).replace('T', ' ');
                    conn.query(`INSERT INTO event (type,category,name,details,mode,activity,start_date_time,end_date_time,
                        duration,no_of_students_expected,total_points,max_points)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                         [event_type,event_category,req.body["Event_Name"],req.body["Details"],req.body["Mode"],req.body["Activity"]
                        ,startDateTime,endDateTime,req.body["Duration"],req.body["Number"],req.body["Number"]*req.body["Points"],req.body["Points"]
                        ],(err)=>{
                            if(err) throw err
                            console.log("Success")
                            res.send("Sucessfully added event")
                        })
                    
                }
                else{
                    console.log("still waiting")
                }
            }
            

            
        })
})

module.exports=Router