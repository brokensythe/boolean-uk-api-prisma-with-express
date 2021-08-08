const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.listen(4000, ()=>{
    console.log("I'm listening on port 4000");
})

app.get("*", (req, res)=>{
    res.status(404).send("<h1>OOOOOOPPPPPPPPAAAAAAAASSSSSS</h1>")
})

// Need to add route imports and connect the dbClient