import { TemporalDatabase } from "../database/master/TemporalDatabase.js";

const db = new TemporalDatabase();

db.insert({
    dayId: 1,
    weekday: "Friday",
    solar: {
        year: 1,
        month: 1,
        day: 1
    },
    lunar: {
        year: 1,
        month: 1,
        day: 1
    },
    cycle: 1
});


console.log("عدد الأيام:", db.count());

console.log(
    "اليوم رقم 1:",
    db.findDay(1)
);
