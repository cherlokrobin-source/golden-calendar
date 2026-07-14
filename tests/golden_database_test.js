import { GoldenChronologyEngine } from "../engines/GoldenChronologyEngine.js";
import { TemporalDatabase } from "../database/master/TemporalDatabase.js";


const engine = new GoldenChronologyEngine();
const database = new TemporalDatabase();


for (let i = 0; i < 100; i++) {

    const day = engine.generateDay();

    database.insert(day);

}


console.log(
    "عدد الأيام المخزنة:",
    database.count()
);


console.log(
    "اليوم رقم 50:",
    database.findDay(50)
);
