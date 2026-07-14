import { GoldenBatchGenerator } from "../engines/GoldenBatchGenerator.js";


const generator =
    new GoldenBatchGenerator();


// اختبار دفعة أولى: 100 سنة
const batch =
    generator.generateBatch(
        1,
        100
    );


console.log(
    "بداية الدفعة:",
    batch.startYear
);


console.log(
    "نهاية الدفعة:",
    batch.endYear
);


console.log(
    "عدد السنوات:",
    batch.years.length
);


console.log(
    "إجمالي الأيام:",
    batch.totalDays
);
