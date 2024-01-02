const express =require("express")
const mongoose= require("mongoose")
const app = express();
const port= 3000

app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://127.0.1:27017/UserData')

.then(()=>{
        console.log("done")
    })
 .catch(()=>{
        console.log("err")
    })

const User=require("./model/user")
app.set("view engine","ejs")
app.get("/", (req, res) => { res.render("index") 
})
app.post("/", async(req,res) =>{
    const data= new User(req.body)
    await data.save()
    res.send("YOUT DETAILS HAVE BEEN SAVED AND REFERENCES CODE WILL BE GENERATED "  )
}) 
app.listen(port, () => { console.log(`Example app listening on port ${port}`)

})