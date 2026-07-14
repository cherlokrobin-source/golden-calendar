import fs from "fs";
import path from "path";

import { PrintableYearGenerator } from "./PrintableYearGenerator.js";


export class Golden50KGenerator {


    constructor() {

        this.generator =
            new PrintableYearGenerator();


        this.output =
            "./database/archive/years";

    }



    init() {

        if (!fs.existsSync(this.output)) {

            fs.mkdirSync(
                this.output,
                {
                    recursive: true
                }
            );

        }

    }



    generate(startYear, endYear) {


        this.init();


        let totalDays = 0;



        for (
            let year = startYear;
            year <= endYear;
            year++
        ) {


            const data =
                this.generator.generateYear(
                    year
                );



            const file =
                path.join(
                    this.output,
                    `year_${String(year).padStart(5,"0")}.json`
                );



            fs.writeFileSync(
                file,
                JSON.stringify(
                    data,
                    null,
                    2
                ),
                "utf8"
            );



            let days = 0;


            for (const month of data.months) {

                days += month.days.length;

            }


            totalDays += days;



            console.log(
                `السنة ${year}: ${days} يوم`
            );

        }



        console.log(
            "إجمالي الأيام:",
            totalDays
        );


        return totalDays;

    }

}
