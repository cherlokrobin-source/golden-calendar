import { MasterArchiveReader } from "../database/archive/MasterArchiveReader.js";


const reader =
    new MasterArchiveReader();


console.log(
    "السنة 10000:"
);

console.log(
    reader.getYear(10000)
);


console.log(
    "السنة 20000:"
);

console.log(
    reader.getYear(20000)
);
