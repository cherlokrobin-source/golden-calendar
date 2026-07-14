import fs from "fs";
import path from "path";

import { GoldenChronologyEngine } from "../engines/GoldenChronologyEngine.js";


export class GenerateGoldenArchive {

    constructor() {

        this.engine = new GoldenChronologyEngine();

        this.archivePath = "./database/archive";

    }



    init() {

        if (!fs.existsSync(this.archivePath)) {

            fs.mkdirSync(
                this.archivePath,
                {
                    recursive: true
                }
            );

        }

    }



    generateYear(yearNumber) {

        const days = [];

        let currentYear =
            this.engine.solarEngine.year;


        // الوصول للسنة المطلوبة
        while (currentYear < yearNumber) {

            this.engine.generateDay();

            currentYear =
                this.engine.solarEngine.year;

        }



        // توليد أيام السنة
        while (
            this.engine.solarEngine.year === yearNumber
        ) {

            days.push(
                this.engine.generateDay()
            );

        }



        const fileName =
            `year_${String(yearNumber).padStart(5,"0")}.json`;


        const filePath =
            path.join(
                this.archivePath,
                fileName
            );


        fs.writeFileSync(
            filePath,
            JSON.stringify(
                days,
                null,
                2
            ),
            "utf8"
        );


        return days.length;

    }



    generateRange(startYear, endYear) {

        this.init();


        let totalDays = 0;


        for (
            let year = startYear;
            year <= endYear;
            year++
        ) {


            const count =
                this.generateYear(year);


            totalDays += count;


            console.log(
                `السنة ${year}: ${count} يوم`
            );

        }


        console.log(
            "إجمالي الأيام:",
            totalDays
        );


        return totalDays;

    }

}
