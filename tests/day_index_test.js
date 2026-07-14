import { DayIndex } from "../database/indexes/DayIndex.js";


const index =
    new DayIndex();



console.log(
    "بناء فهرس الأيام..."
);



const result =
    index.build();



console.log(
    "عدد الأيام المفهرسة:",
    result.length
);



index.save();



console.log(
    "تم حفظ فهرس الأيام"
);



// اختبار البحث

console.log(
    "اليوم 1:"
);

console.log(
    index.find(1)
);



console.log(
    "اليوم 100000:"
);

console.log(
    index.find(100000)
);



console.log(
    "اليوم الأخير:"
);

console.log(
    index.find(
        result.length
    )
);
