import { TemporalSearchEngine } from "../engine/TemporalSearchEngine.js";


const searchEngine = new TemporalSearchEngine();


// البحث برقم اليوم
console.log(
    "بحث اليوم 1000:"
);

console.log(
    searchEngine.searchByDayId(1000)
);



// البحث بالتاريخ الشمسي
console.log(
    "بحث شمسي: السنة 3 - الشهر 9 - اليوم 27"
);

console.log(
    searchEngine.searchSolar(
        3,
        9,
        27
    )
);



// البحث بالتاريخ القمري
console.log(
    "بحث قمري: السنة 3 - الشهر 10 - اليوم 26"
);

console.log(
    searchEngine.searchLunar(
        3,
        10,
        26
    )
);
