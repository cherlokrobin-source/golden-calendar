import { GoldenChronologyEngine } from "./GoldenChronologyEngine.js";


export class YearGenerator {

    constructor(database) {

        this.database = database;
        this.engine = new GoldenChronologyEngine();

    }


    // توليد سنة واحدة
    generateYear(yearNumber) {

        const days = [];

        let targetYear = this.engine.solar.year;


        // الوصول إلى السنة المطلوبة
        while (targetYear < yearNumber) {

            this.engine.generateDay();

            targetYear = this.engine.solar.year;

        }


        // توليد أيام السنة
        while (this.engine.solar.year === yearNumber) {

            const day = this.engine.generateDay();

            this.database.insert(day);

            days.push(day);

        }


        return days;

    }



    // توليد مجموعة سنوات
    generateRange(startYear, endYear) {

        let total = 0;


        for (
            let year = startYear;
            year <= endYear;
            year++
        ) {

            const result = this.generateYear(year);

            total += result.length;

        }


        return total;

    }

}
