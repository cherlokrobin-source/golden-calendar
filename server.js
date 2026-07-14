import express from "express";

// ============================
// 🌌 CORE ENGINES
// ============================

import { WeekEngine } from "./src/engines/week/WeekEngine.js";
import { SolarEngine } from "./src/engines/solar/SolarEngine.js";
import { LunarEngine } from "./src/engines/lunar/LunarEngine.js";


// ============================
// 🧠 DATABASE SYSTEM
// ============================

import { ChronologyOS } from "./src/database/ChronologyOS.js";
import { ChronologyCache } from "./src/database/ChronologyCache.js";
import { TimeIndexEngine } from "./src/database/TimeIndexEngine.js";
import { QueryPlannerV10 } from "./src/database/QueryPlannerV10.js";


// ============================
// 📦 ARCHIVE ENGINE
// ============================

import { BatchArchiveEngine } from "./src/archive/BatchArchiveEngine.js";


// ============================
// 🚀 APP
// ============================

const app = express();

const PORT = 3000;

app.use(express.json());


// ============================
// 🌐 FRONTEND
// ============================

app.use(express.static("public"));


// ============================
// ⚙️ BASIC ENGINES
// ============================

const week = new WeekEngine();

const solar = new SolarEngine();

const lunar = new LunarEngine();


// ============================
// ⚡ CACHE + INDEX
// ============================

const cache =
    new ChronologyCache(2000);


const indexEngine =
    new TimeIndexEngine();


// ============================
// 🧠 CHRONOLOGY CORE
// ============================

const chrono =
new ChronologyOS(

{

getDay(day){

return {

dayNumber: day,

weekday:
week.calc(day - 1),

solar:
solar.calc(day - 1),

lunar:
lunar.calc(day - 1),

mode:
"v10"

};

},


getRange(start,end){

const result=[];


for(
let i=start;
i<=end;
i++
){

result.push(
this.getDay(i)
);

}


return result;

},


getYear(year){

const start =
(year - 1) * 365 + 1;


const end =
year * 365;


return this.getRange(
start,
end
);

}


},

cache

);


// ============================
// 🔍 QUERY PLANNER
// ============================

const planner =
new QueryPlannerV10(

cache,

chrono,

indexEngine

);


// ============================
// 📦 BATCH ENGINE
// ============================

const batchEngine =
new BatchArchiveEngine(
week,
solar,
lunar
);


// ============================
// 🔰 PROJECT API
// ============================

app.get("/api",(req,res)=>{

res.json({

name:
"Golden Calendar Engine",

title:
"الرزمانة الذهبية",

version:
"1.0",

range:
"1 - 50000 years",

core:
"Chronology OS v10",

status:
"online"

});

});


// ============================
// 📅 TIME ROUTES
// ============================


app.get("/day/:n",(req,res)=>{

res.json(

planner.plan(
"day",
Number(req.params.n)
)

);

});



app.get("/range/:s/:e",(req,res)=>{

res.json(

planner.plan(

"range",

[
Number(req.params.s),
Number(req.params.e)
]

)

);

});



app.get("/year/:y",(req,res)=>{

res.json(

planner.plan(
"year",
Number(req.params.y)
)

);

});



// ============================
// ⚡ V10 ROUTES
// ============================

app.get("/v10/day/:d",(req,res)=>{

res.json(

planner.plan(
"day",
Number(req.params.d)
)

);

});


// ============================
// 📦 BATCH
// ============================


app.get("/batch/run",(req,res)=>{

const target =
Number(req.query.target || 50000);


const chunk =
Number(req.query.chunk || 10);


res.json(

batchEngine.run(
target,
chunk
)

);

});



app.get("/batch/status",(req,res)=>{

res.json(
batchEngine.status()
);

});


// ============================
// 🔄 MODE
// ============================

let mode="v10";


app.get("/mode/:m",(req,res)=>{

mode=req.params.m;


res.json({
mode
});

});


// ============================
// ❌ ERROR HANDLER
// ============================

app.use((err,req,res,next)=>{

console.error(err);


res.status(500).json({

error:
"Internal Server Error"

});

});


// ============================
// 🚀 START
// ============================

app.listen(PORT,()=>{

console.log(

"🚀 Golden Calendar Engine + Chronology OS v10 running at http://localhost:"+PORT

);

});
