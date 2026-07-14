import { DayArchiveReader } from "../database/archive/DayArchiveReader.js";


const reader =
    new DayArchiveReader();



console.log(
    "اليوم 1:"
);

console.log(
    reader.getDay(1)
);



console.log(
    "اليوم 100000:"
);

console.log(
    reader.getDay(100000)
);



console.log(
    "اليوم 18250000:"
);

console.log(
    reader.getDay(18250000)
);
