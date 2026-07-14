import { MasterArchiveGenerator } from "../engines/MasterArchiveGenerator.js";


const generator =
    new MasterArchiveGenerator();


// اختبار 500 سنة فقط
const result =
    generator.generate(
        1,
        500
    );


console.log(
    "عدد الدفعات المنشأة:",
    result.length
);


console.log(
    result
);
