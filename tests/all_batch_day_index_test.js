import { BatchDayIndexGenerator } from "../database/indexes/BatchDayIndexGenerator.js";


const generator =
    new BatchDayIndexGenerator();



console.log(
    "بدء بناء فهرس الأيام الكامل..."
);



generator.generateAll();



console.log(
    "اكتمل بناء فهرس الأيام"
);
