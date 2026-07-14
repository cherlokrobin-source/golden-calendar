import { DatabaseStorage } from "../database/storage/DatabaseStorage.js";
import { TemporalDatabase } from "../database/master/TemporalDatabase.js";
import { GoldenChronologyEngine } from "../engines/GoldenChronologyEngine.js";


const database = new TemporalDatabase();

const engine = new GoldenChronologyEngine();


// توليد 100 يوم
for (let i = 0; i < 100; i++) {

    const day = engine.generateDay();

    database.insert(day);

}


// استخراج السجلات من الفهرس
const records = [];

for (let i = 1; i <= database.count(); i++) {

    records.push(
        database.findDay(i)
    );

}


// إنشاء التخزين
const storage = new DatabaseStorage(
    "./database/storage/golden_database.json"
);


// حفظ البيانات
storage.save(records);


console.log(
    "تم الحفظ"
);


console.log(
    "حجم الملف:",
    storage.size(),
    "bytes"
);


// تحميل البيانات
const loaded = storage.load();


console.log(
    "عدد السجلات المحملة:",
    loaded.length
);


console.log(
    "أول سجل:",
    loaded[0]
);
