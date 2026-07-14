import fs from "fs";

import { ArchiveValidator } from "../validator/ArchiveValidator.js";



const file =
    "./database/archive/batches/batch_00001_00100.json";



const batch =
    JSON.parse(
        fs.readFileSync(
            file,
            "utf8"
        )
    );



const validator =
    new ArchiveValidator();



const result =
    validator.validateBatch(
        batch
    );



console.log(
    "حالة الأرشيف:"
);

console.log(
    result
);



console.log(
    "التقرير:"
);

console.log(
    validator.report()
);
