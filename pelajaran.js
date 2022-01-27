const { request, response } = require("express")
const express = require("express")

const app = express()
// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

app.post("/nilaiSiswa", (request, response) => {
    let nilai = request.body.nilai
    let lulus = [], tidaklulus = []
    let nilai_math = 0, nilai_inggris = 0

    for (let i = 0; i < nilai.length; i++) {
        nilai_math += nilai[i].Math
    }
    nilai_math /= nilai.length

    for (let i = 0; i < nilai.length; i++) {
        nilai_inggris += nilai[i].English
    }
    nilai_inggris /= nilai.length

    let avgTotal = (nilai_math + nilai_inggris)/2

    for (let i = 0; i < nilai.length; i++) {
        // untuk menghitung lulus tidaknya seorang murid
        let avgSiswa = (nilai[i].Math + nilai[i].English)/2
        if (avgSiswa >= avgTotal) {
            lulus.push(
                nilai[i].nama
            )
            
        } else if (avgSiswa < avgTotal){
            tidaklulus.push(
                nilai[i].nama
            )
        }
    }

    return response.json({
        lulus : lulus,
        tidak_lulus : tidaklulus,
        rata_rata : avgTotal
    })

})
app.listen(1700, () => {
    console.log(`Server run on port 1700`);
})