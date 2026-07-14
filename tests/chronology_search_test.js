import { ChronologySearchEngine } from "../engine/ChronologySearchEngine.js";


const engine =
    new ChronologySearchEngine();



console.log(
    "بحث 1/1/1:"
);

console.log(
    engine.searchSolar(
        1,
        1,
        1
    )
);



console.log(
    "بحث 21/10/49967:"
);

console.log(
    engine.searchSolar(
        49967,
        10,
        21
    )
);



console.log(
    "عدد أيام السنة 50000:"
);

console.log(
    engine.searchYear(50000).length
);
