// load library express
const { response } = require("express")
let express = require("express")
const { status } = require("express/lib/response")

// inisiasi objek baru dari express 
let app = express()

// endpoint pertama
app.use(express.json())
app.post("/kubus", (request, response) => {
    let sisi = request.body.sisi

    let rumusvolume = sisi*sisi*sisi
    let rumusLP = 6*sisi*sisi

    let Volume = null
    let LuasPermukaan = null

    return response.json({
        VolumeKubur: rumusvolume,
        LuasPermukaaKubusn: rumusLP
    })
})
// endpoint 2
app.use(express.json())
app.post("/balok", (request, response) => {
    let panjang = request.body.panjang
    let lebar = request.body.lebar
    let tinggi = request.body.tinggi


    let rumusvolume = panjang*lebar*tinggi
    let rumusLP = 2*((panjang*lebar)+(panjang*tinggi)+(lebar*tinggi))

    let Volume = null
    let LuasPermukaan = null

    return response.json({
        VolumeBalok: rumusvolume,
        LuasPermukaanBalok: rumusLP
    })
})
// endpoint 3
app.use(express.json())
app.post("/tabung", (request, response) => {
    let r = request.body.r
    let tinggi = request.body.tinggi


    let rumusvolume = Math.PI*r*r*tinggi
    let rumusLP = 2*Math.PI*r*(r+tinggi)

    let Volume = null
    let LuasPermukaan = null

    return response.json({
        VolumeTabung: rumusvolume,
        LuasPermukaanTabung: rumusLP
    })
})
// endpoint 4
app.use(express.json())
app.post("/bola", (request, response) => {
    let r = request.body.r

    let rumusvolume = 4/3*Math.PI*r*r*r
    let rumusLP = 4*Math.PI*r*r

    let Volume = null
    let LuasPermukaan = null

    return response.json({
        VolumeBola: rumusvolume,
        LuasBola: rumusLP
    })
})
app.listen(10000, () => {
    console.log('server run on port 10000');
})