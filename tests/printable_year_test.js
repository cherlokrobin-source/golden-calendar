import { PrintableYearGenerator } from "../engines/PrintableYearGenerator.js";


const generator =
    new PrintableYearGenerator();



const year =
    generator.generateYear(1);



console.log(
    "السنة:",
    year.year
);


console.log(
    "عدد الأشهر:",
    year.months.length
);


console.log(
    "الشهر الأول:"
);

console.log(
    year.months[0]
);


console.log(
    "أول يوم:"
);

console.log(
    year.months[0].days[0]
);


console.log(
    "آخر شهر:"
);

console.log(
    year.months[
        year.months.length - 1
    ]
);
