import { ChronologySearchEngine } from "../engine/ChronologySearchEngine.js";


const engine =
    new ChronologySearchEngine();



console.log(
    "بحث قمري: 1 محرم سنة 1"
);


console.log(
    engine.searchLunar(
        1,
        1,
        1
    )
);



console.log(
    "بحث قمري: رمضان 51554 يوم 2"
);


console.log(
    engine.searchLunar(
        51554,
        9,
        2
    )
);
