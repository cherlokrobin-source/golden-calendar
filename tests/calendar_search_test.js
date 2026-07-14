import { TemporalDatabase } from "../database/master/TemporalDatabase.js";
import { GoldenChronologyEngine } from "../engines/GoldenChronologyEngine.js";


const database = new TemporalDatabase();

const engine = new GoldenChronologyEngine();


// توليد 100 يوم وتخزينها
for (let i = 0; i < 100; i++) {

    const day = engine.generateDay();

    database.insert(day);

}


// البحث بالتاريخ الشمسي
const solarResult = database.findSolar(
    1,
    1,
    1
);


console.log(
    "البحث الشمسي:",
    solarResult
);


// البحث بالتاريخ القمري
const lunarResult = database.findLunar(
    1,
    1,
    1
);


console.log(
    "البحث القمري:",
    lunarResult
);


// البحث عن اليوم رقم 50
console.log(
    "اليوم 50:",
    database.findDay(50)
);


console.log(
    "عدد السجلات:",
    database.count()
);
