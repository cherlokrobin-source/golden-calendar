import { DayIndexReader } from "../database/indexes/DayIndexReader.js";


const reader =
    new DayIndexReader();



console.log(
    "اليوم 1:"
);

console.log(
    reader.find(1)
);



console.log(
    "اليوم 100000:"
);

console.log(
    reader.find(100000)
);



console.log(
    "اليوم 18250000:"
);

console.log(
    reader.find(18250000)
);
