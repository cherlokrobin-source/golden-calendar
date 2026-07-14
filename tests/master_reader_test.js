import { MasterArchiveReader } from "../database/archive/MasterArchiveReader.js";


const reader =
    new MasterArchiveReader();



console.log(
    "السنة 1:"
);

console.log(
    reader.getYear(1)
);



console.log(
    "السنة 250:"
);

console.log(
    reader.getYear(250)
);



console.log(
    "السنة 500:"
);

console.log(
    reader.getYear(500)
);
