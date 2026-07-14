import { GoldenArchiveIndex } from "../database/indexes/GoldenArchiveIndex.js";
import { ArchiveReader } from "../database/archive/ArchiveReader.js";


const index = new GoldenArchiveIndex();

index.build(
    "./database/archive"
);


const reader = new ArchiveReader(
    "./database/archive",
    index
);


console.log(
    reader.getDay(1000)
);
