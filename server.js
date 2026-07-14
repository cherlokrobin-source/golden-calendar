import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { GoldenTimeEngine } from "./engine/GoldenTimeEngine.js";
import { ChronologySearchEngine } from "./engine/ChronologySearchEngine.js";



const app = express();

const PORT = 3000;



// إعداد المسارات
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// تشغيل الواجهة
app.use(
    express.static(
        path.join(__dirname, "public")
    )
);



// المحركات

const timeEngine =
    new GoldenTimeEngine();


const chronologyEngine =
    new ChronologySearchEngine();





// الصفحة الرئيسية API

app.get("/api", (req, res) => {

    res.json({

        name:
        "Golden Calendar Engine",

        title:
        "الرزمانة الذهبية",

        version:
        "1.0",

        range:
        "1 - 50000 years",

        status:
        "online"

    });

});







// البحث برقم اليوم

app.get("/day/:id", (req, res) => {


    const dayId =
        Number(req.params.id);



    const result =
        timeEngine.searchDay(dayId);



    if (!result) {

        return res.status(404).json({

            error:
            "Day not found"

        });

    }



    res.json(result);


});







// البحث بالتاريخ الشمسي

app.get(
"/solar/:year/:month/:day",
(req,res)=>{


    const result =
        chronologyEngine.searchSolar(

            Number(req.params.year),

            Number(req.params.month),

            Number(req.params.day)

        );



    if (!result) {

        return res.status(404).json({

            error:
            "Solar date not found"

        });

    }



    res.json(result);


});







// البحث بالتاريخ القمري

app.get(
"/lunar/:year/:month/:day",
(req,res)=>{


    const result =
        chronologyEngine.searchLunar(

            Number(req.params.year),

            Number(req.params.month),

            Number(req.params.day)

        );



    if (!result) {

        return res.status(404).json({

            error:
            "Lunar date not found"

        });

    }



    res.json(result);


});







// تشغيل السيرفر

app.listen(
    PORT,
    () => {

        console.log(
            `🚀 Golden Calendar Engine running at http://localhost:${PORT}`
        );

    }
);
