import { Golden50KGenerator } from "../engines/Golden50KGenerator.js";


const generator =
    new Golden50KGenerator();


// اختبار أولي: 10 سنوات
const total =
    generator.generate(
        1,
        10
    );


console.log(
    "إجمالي الأيام المولدة:",
    total
);
