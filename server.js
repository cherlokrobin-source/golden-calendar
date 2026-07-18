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
// ⏳ GOLDEN TIME ENGINE
// ============================

import { GoldenTimeEngine } from "./engine/GoldenTimeEngine.js";


// ============================
// 🛡️ GUARDIAN SYSTEM
// ============================

import { GuardianSystem } from "./monitor/GuardianSystem.js";


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
// ⏳ GOLDEN ENGINE INIT
// ============================

const goldenEngine =
    new GoldenTimeEngine();

goldenEngine.init();


// ============================
// 🛡️ START GUARDIAN
// ============================

const guardian =
    new GuardianSystem();

guardian.start();


// ============================
// ⚙️ BASIC ENGINES
// ============================

const week =
    new WeekEngine();


const solar =
    new SolarEngine();


const lunar =
    new LunarEngine();


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

        result.push({

            dayNumber:i,

            weekday:
                week.calc(i - 1),

            solar:
                solar.calc(i - 1),

            lunar:
                lunar.calc(i - 1),

            mode:"v10"

        });

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

    ,

    simulateYear(year){

        return this.getYear(year);

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

name:"Golden Calendar Engine",

title:"الرزمانة الذهبية",

version:"1.0",

range:"1 - 50000 years",

core:"Chronology OS v10",

status:"online"

});

});


// ============================
// 🌟 GOLDEN DETAILED API
// ============================

app.get("/golden/day/:n",(req,res)=>{

const dayId =
Number(req.params.n);


const startTime =
guardian.performance.start();

const result =
goldenEngine.searchDay(dayId);

guardian.performance.end(
    startTime,
    "golden/day/" + dayId
);


if(!result){

return res.status(404).json({

error:"Day not found"

});

}


res.json(result);

});


// ============================
// 📅 TIME ROUTES
// ============================

app.get("/day/:n",(req,res)=>{

const dayId =
Number(req.params.n);

const result =
goldenEngine.searchDay(dayId);

if(!result){

return res.status(404).json({

error:"Day not found"

});

}

res.json(result);

});


app.get("/range/:s/:e",(req,res)=>{

const start = Number(req.params.s);
const end = Number(req.params.e);

const result = [];

for(let day = start; day <= end; day++){

    const item =
        goldenEngine.searchDay(day);

    console.log("RANGE DAY:", day, item);

    if(item){
        result.push(item);
    }

}

res.json(result);

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
// 🛡️ GUARDIAN API
// ============================

app.get("/guardian/status",(req,res)=>{

res.json({

system:"GuardianSystem",

status:
guardian.running
?
"active"
:
"stopped",

startedAt:
guardian.startedAt

});

});


app.get("/guardian/report",(req,res)=>{

res.json(
guardian.report()
);

});


app.get("/guardian/health",(req,res)=>{

res.json(
guardian.health.check()
);

});


app.get("/guardian/performance",(req,res)=>{

res.json(
guardian.performance.report()
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

error: err.message,
stack: err.stack

});

});




// ============================
// 🚀 START
// ============================

app.listen(PORT,()=>{

console.log(
"🚀 Golden Calendar Engine + Chronology OS v10 + Guardian running at http://localhost:"+PORT
);

});
