import fs from "fs";
import path from "path";

import { GoldenChronologyEngine } from "./GoldenChronologyEngine.js";


export class PrintableYearGenerator {


    constructor() {

        this.engine =
            new GoldenChronologyEngine();

        this.output =
            "./database/archive/years";

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



    generateYear(yearNumber) {


        this.init();


        const year = {

            year: yearNumber,

            months: []

        };



        let days = [];



        while (
            this.engine.solarEngine.year < yearNumber
        ) {

            this.engine.generateDay();

        }



        while (
            this.engine.solarEngine.year === yearNumber
        ) {

            const day =
                this.engine.generateDay();


            days.push(day);

        }



        let currentMonth = null;



        for (const day of days) {


            if (
                !currentMonth ||
                currentMonth.number !== day.solar.month
            ) {


                currentMonth = {

                    number:
                        day.solar.month,

                    name:
                        day.solar.monthName,

                    days: []

                };


                year.months.push(
                    currentMonth
                );

            }



            currentMonth.days.push({

                day:
                    day.solar.day,

                weekday:
                    day.weekday.name,

                lunar:
                    day.lunar

            });


        }



        const file =
            path.join(
                this.output,
                `year_${String(yearNumber).padStart(5,"0")}.json`
            );



        fs.writeFileSync(
            file,
            JSON.stringify(
                year,
                null,
                2
            ),
            "utf8"
        );


        return year;

    }

}
