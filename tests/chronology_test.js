import { GoldenChronologyEngine } from "../engines/GoldenChronologyEngine.js";

const engine = new GoldenChronologyEngine();

for (let i = 0; i < 10; i++) {

    const day = engine.generateDay();

    console.log(JSON.stringify(day, null, 2));

}
