import { IndexStorage } from "../database/indexes/IndexStorage.js";
import { TemporalDatabase } from "../database/master/TemporalDatabase.js";
import { GoldenChronologyEngine } from "../engines/GoldenChronologyEngine.js";


const database = new TemporalDatabase();

const engine = new GoldenChronologyEngine();


// توليد 100 يوم
for (let i = 0; i < 100; i++) {

    const day = engine.generateDay();

    database.insert(day);

}


// إنشاء التخزين
const storage = new IndexStorage(
    "./database/indexes/storage"
);


// حفظ الفهارس
storage.save(
    "solar_index",
    database.solarIndex.index
);


storage.save(
    "lunar_index",
    database.lunarIndex.index
);


console.log(
    "تم حفظ الفهارس"
);


// تحميل الفهارس
const solarLoaded =
    storage.load("solar_index");


const lunarLoaded =
    storage.load("lunar_index");


console.log(
    "عدد الفهرس الشمسي:",
    solarLoaded.size
);


console.log(
    "عدد الفهرس القمري:",
    lunarLoaded.size
);


console.log(
    "بحث شمسي:",
    solarLoaded.get("1-1-1")
);


console.log(
    "بحث قمري:",
    lunarLoaded.get("1-1-1")
);
