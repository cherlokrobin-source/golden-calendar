import { MasterArchiveReader } from "../database/archive/MasterArchiveReader.js";


const reader =
    new MasterArchiveReader();



console.log("السنة 1:");
console.log(reader.getYear(1));


console.log("السنة 25000:");
console.log(reader.getYear(25000));


console.log("السنة 50000:");
console.log(reader.getYear(50000));
