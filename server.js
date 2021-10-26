//declaro las dependencias
const express = require("express")

const axios = require("axios")

const cors = require("cors")

const app = express()
app.use(cors())


//accede al servidor primo que NO TENEMOS TODAVIA 
app.get(async() => {
const { data } = await axios.get(

)    
res.json(data)
})
//nico fijate de hacer alguna base de datos en mysql, por que esto esta poseido
app.listen(3000)
