import { BatchIndex } from "../database/indexes/BatchIndex.js";


const index =
    new BatchIndex();


// بناء الفهرس من الدفعات
index.build(
    "./database/archive/batches"
);



console.log(
    "عدد الدفعات:",
    index.size()
);



console.log(
    "دفعة السنة 1:"
);

console.log(
    index.findYear(1)
);



console.log(
    "دفعة السنة 50:"
);

console.log(
    index.findYear(50)
);



console.log(
    "دفعة السنة 100:"
);

console.log(
    index.findYear(100)
);
