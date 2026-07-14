import { MasterProgressManager } from "../engines/MasterProgressManager.js";


const progress =
    new MasterProgressManager();



console.log(
    "الحالة الأولية:"
);

console.log(
    progress.load()
);



// تحديث التقدم
progress.update(
    500,
    5
);



console.log(
    "بعد التحديث:"
);

console.log(
    progress.load()
);



// إنهاء تجريبي
progress.complete();



console.log(
    "بعد الإكمال:"
);

console.log(
    progress.load()
);
