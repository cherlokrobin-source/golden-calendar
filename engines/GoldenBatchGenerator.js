import fs from "fs";
import path from "path";

import { PrintableYearGenerator } from "./PrintableYearGenerator.js";


export class GoldenBatchGenerator {


    constructor() {

        this.yearGenerator =
            new PrintableYearGenerator();


        this.output =
            "./database/archive/batches";

    }



    init() {

        if (!fs.existsSync(this.output)) {

            fs.mkdirSync(
                this.output,
                {
                    recursive:true
                }
            );

        }

    }



    generateBatch(startYear, endYear) {


        this.init();


        const batch = {

            startYear,
            endYear,

            years: []

        };


        let totalDays = 0;



        for (
            let year = startYear;
            year <= endYear;
            year++
        ) {


            const data =
                this.yearGenerator.generateYear(
                    year
                );


            let days = 0;


            for (const month of data.months) {

                days += month.days.length;

            }


            totalDays += days;


            batch.years.push(data);


            console.log(
                `السنة ${year}: ${days} يوم`
            );

        }



        batch.totalDays =
            totalDays;



        const file =
            path.join(
                this.output,
                `batch_${String(startYear).padStart(5,"0")}_${String(endYear).padStart(5,"0")}.json`
            );



        fs.writeFileSync(
            file,
            JSON.stringify(
                batch,
                null,
                2
            ),
            "utf8"
        );


        console.log(
            "تم حفظ الدفعة:",
            file
        );


        console.log(
            "إجمالي أيام الدفعة:",
            totalDays
        );


        return batch;

    }

}
