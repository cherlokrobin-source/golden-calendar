import { GoldenTimeEngineV2 } from "../engine/GoldenTimeEngineV2.js";


const engine = new GoldenTimeEngineV2();



console.log(
    "معلومات المحرك:"
);

console.log(
    engine.info()
);



console.log(
    "\nبحث باليوم 1000:"
);

console.log(
    engine.searchDay(1000)
);



console.log(
    "\nبحث شمسي مباشر:"
);

console.log(
    engine.searchSolar(
        3,
        9,
        27
    )
);



console.log(
    "\nبحث قمري مباشر:"
);

console.log(
    engine.searchLunar(
        3,
        10,
        26
    )
);
