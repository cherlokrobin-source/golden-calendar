import { GoldenTimeEngine } from "../engine/GoldenTimeEngine.js";


const engine = new GoldenTimeEngine();


// معلومات المحرك
console.log(
    "معلومات المحرك:"
);

console.log(
    engine.info()
);



// البحث باليوم
console.log(
    "البحث عن اليوم 1000:"
);

console.log(
    engine.searchDay(1000)
);



// البحث بالتاريخ الشمسي
console.log(
    "البحث الشمسي 3-9-27:"
);

console.log(
    engine.searchSolar(
        3,
        9,
        27
    )
);



// البحث بالتاريخ القمري
console.log(
    "البحث القمري 3-10-26:"
);

console.log(
    engine.searchLunar(
        3,
        10,
        26
    )
);
