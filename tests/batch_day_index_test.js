import { BatchDayIndexGenerator } from "../database/indexes/BatchDayIndexGenerator.js";


const generator =
    new BatchDayIndexGenerator();



console.log(
    "اختبار فهرس دفعة واحدة..."
);



const count =
    generator.generateBatch(
        "batch_00001_00100.json"
    );



console.log(
    "عدد الأيام المفهرسة:",
    count
);



console.log(
    "تم الاختبار بنجاح"
);
