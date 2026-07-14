import { GoldenTimeEngine } from "../engine/GoldenTimeEngine.js";


const engine =
    new GoldenTimeEngine();



console.log(
    "معلومات المحرك:"
);

console.log(
    engine.info()
);



console.log(
    "بحث اليوم 1:"
);

console.log(
    engine.searchDay(1)
);



console.log(
    "بحث اليوم 100000:"
);

console.log(
    engine.searchDay(100000)
);



console.log(
    "بحث اليوم 18250000:"
);

console.log(
    engine.searchDay(18250000)
);
