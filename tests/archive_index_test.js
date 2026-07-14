import { GoldenArchiveIndex } from "../database/indexes/GoldenArchiveIndex.js";


const index = new GoldenArchiveIndex();


// بناء الفهرس من الأرشيف
index.build(
    "./database/archive"
);


console.log(
    "عدد الأيام المفهرسة:",
    index.size()
);


console.log(
    "موقع اليوم 1:",
    index.find(1)
);


console.log(
    "موقع اليوم 365:",
    index.find(365)
);
