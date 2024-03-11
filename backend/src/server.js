const express = require('express')
const mysql = require('mysql')
const app = express()
const dbConnection = require('./database.js')
const event = require('./routes/event.js')
app.use('/',event)
dbConnection.getConnection(function(err,conn){
       if(err) throw err
       var connection=conn
       app.get('/', (req, res) => {
        res.send('hello ')
      })
    app.get('/students',(req,res)=>{
        var response = "The Student List :"+"<br><br>"
        connection.query('SELECT s.name name ,s.reward_points, d.name designation, dept.name department FROM students s INNER JOIN designation d ON s.designation = d.id INNER JOIN department dept ON s.department = dept.id',(err,rows,fields)=>{
             for(let i=0;i<rows.length;i++){
                let row = rows[i];
                response+=row["name"]+" "+row["designation"]+" "+row["department"]+" "+row["reward_points"]+"<br>"
                
             }
             res.send(response)
        })
    })
    app.post('/add_points',(req,res)=>{
        connection.query("UPDATE students SET reward_points=reward_points+1000",(err)=>{
            if (err) throw err
            res.send("Successfully updated")
        })
    })

    

})


app.listen(3000,(err)=>{
    if (err) throw err
    console.log("Server is listening to the port 3000")
})

  