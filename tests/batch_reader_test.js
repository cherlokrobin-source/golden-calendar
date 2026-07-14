import { BatchIndex } from "../database/indexes/BatchIndex.js";
import { BatchReader } from "../database/archive/BatchReader.js";



// إنشاء الفهرس
const index =
    new BatchIndex();


index.build(
    "./database/archive/batches"
);



// إنشاء القارئ
const reader =
    new BatchReader(
        "./database/archive/batches",
        index
    );



// قراءة السنة 50
console.log(
    "السنة 50:"
);

console.log(
    reader.getYear(50)
);



// قراءة يوم محدد
console.log(
    "اليوم 20 من فبراير سنة 50:"
);

console.log(
    reader.getDay(
        50,
        2,
        20
    )
);
