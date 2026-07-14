import { MasterArchiveGenerator } from "../engines/MasterArchiveGenerator.js";


const generator =
    new MasterArchiveGenerator();


// استكمال الأرشيف حتى 50000 سنة
generator.generate(
    1,
    50000
);


console.log(
    "تم استكمال أرشيف 50000 سنة"
);
