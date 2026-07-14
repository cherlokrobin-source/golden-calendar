import { TemporalDatabase } from "../database/master/TemporalDatabase.js";
import { YearGenerator } from "../engines/YearGenerator.js";


const database = new TemporalDatabase();

const generator = new YearGenerator(database);


// توليد السنة الأولى
const days = generator.generateYear(1);


console.log(
    "عدد أيام السنة:",
    days.length
);


console.log(
    "أول يوم:",
    database.findDay(1)
);


console.log(
    "آخر يوم:",
    database.findDay(days.length)
);


console.log(
    "إجمالي السجلات:",
    database.count()
);
