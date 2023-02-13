//inisiasi library
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")


const moment = require("moment")
const siswaroute = require("./siswa")
const userroute = require("./user")
const pelanggaranroute = require("./pelanggaran")
const transaksi = require("./transaksi")

//implementasi
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));

app.use(siswaroute)
app.use(userroute)
app.use(pelanggaranroute)
app.use(transaksi)


//<................................SISWA...............................>



//<...........................................USER..................................................>



//<..........................................PELANGGARAN............................................>


//<..........................................TRANSAKSI..............................................>



app.listen(8000, () => {
    console.log("Run on port 8000")
})
