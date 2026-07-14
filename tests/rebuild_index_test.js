import { BatchIndex } from "../database/indexes/BatchIndex.js";
import fs from "fs";


const index =
    new BatchIndex();


const result =
    index.build(
        "./database/archive/batches"
    );


fs.writeFileSync(
    "./database/indexes/master_batch_index.json",
    JSON.stringify(
        result,
        null,
        2
    ),
    "utf8"
);


console.log(
    "تم تحديث الفهرس"
);


console.log(
    "عدد الدفعات:",
    result.length
);
