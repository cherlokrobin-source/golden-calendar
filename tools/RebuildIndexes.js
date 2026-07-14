import fs from "fs";
import path from "path";

import { GoldenArchiveIndex } from "../database/indexes/GoldenArchiveIndex.js";
import { SolarDateIndex } from "../database/indexes/SolarDateIndex.js";
import { LunarDateIndex } from "../database/indexes/LunarDateIndex.js";
import { IndexStorage } from "../database/indexes/IndexStorage.js";


const archivePath = "./database/archive";


const archiveIndex =
    new GoldenArchiveIndex();


archiveIndex.build(
    archivePath
);


const solar =
    new SolarDateIndex();


const lunar =
    new LunarDateIndex();



for (let id = 1; id <= archiveIndex.size(); id++) {

    const location =
        archiveIndex.find(id);


    const file =
        path.join(
            archivePath,
            location.file
        );


    const days =
        JSON.parse(
            fs.readFileSync(
                file,
                "utf8"
            )
        );


    const record =
        days.find(
            d => d.dayId === id
        );


    if (record) {

        solar.add(record);

        lunar.add(record);

    }

}



const storage =
    new IndexStorage(
        "./database/indexes/storage"
    );


storage.save(
    "solar_index",
    solar.index
);


storage.save(
    "lunar_index",
    lunar.index
);



console.log("تم تحديث الفهارس");
console.log("شمسي:", solar.size());
console.log("قمري:", lunar.size());
