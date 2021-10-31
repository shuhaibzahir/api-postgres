const express = require("express")
const app = express()
const db = require("./model/db")


app.use(express.json())

/* --------------------------- databese connection -------------------------- */
db.connect().then((succcess)=>{
    console.log("databasse connected")
}).catch((er)=>{
    console.log(er)
})


/* ---------------------------- getting all taks ---------------------------- */
app.get('/tasks',(req,res)=>{

})



/* ------------------------------ get one task ------------------------------ */

app.get("/task/:id",(req,{send})=>{

})


/* ------------------------------- post a task ------------------------------ */

app.post("/task",({body},{send})=>{

})


/* ------------------------------- edit a task ------------------------------ */


app.put("task/:id",({body},res)=>{

})


/* ------------------------------ delete a task ----------------------------- */

app.delete("/task/:id",(req,{send})=>{


    
})







app.listen(5000,()=>{
    console.log("Server started at 5000")
})