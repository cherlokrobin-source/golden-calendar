import fs from "fs";
import path from "path";


export class ArchiveValidator {


    constructor() {

        this.errors = [];

    }



    validateYear(year) {


        if (!year.year) {

            this.errors.push(
                "السنة بدون رقم"
            );

        }



        if (!year.months) {

            this.errors.push(
                `السنة ${year.year} بدون أشهر`
            );

            return false;

        }



        let totalDays = 0;



        for (const month of year.months) {


            if (!month.days) {

                this.errors.push(
                    `الشهر ${month.number} بدون أيام`
                );

                continue;

            }


            totalDays += month.days.length;



            for (const day of month.days) {


                if (!day.weekday) {

                    this.errors.push(
                        `اليوم ${day.day} بدون اسم أسبوع`
                    );

                }



                if (!day.lunar) {

                    this.errors.push(
                        `اليوم ${day.day} بدون تاريخ قمري`
                    );

                }


            }


        }



        if (
            totalDays !== 365 &&
            totalDays !== 366
        ) {

            this.errors.push(
                `السنة ${year.year} تحتوي ${totalDays} يوم`
            );

        }



        return this.errors.length === 0;

    }



    validateBatch(batch) {


        this.errors = [];



        if (!batch.years) {

            this.errors.push(
                "الدفعة لا تحتوي سنوات"
            );

            return false;

        }



        let days = 0;



        for (const year of batch.years) {


            this.validateYear(year);


            for (const month of year.months) {

                days += month.days.length;

            }

        }



        if (days !== batch.totalDays) {

            this.errors.push(
                "عدد الأيام لا يطابق إجمالي الدفعة"
            );

        }



        return this.errors.length === 0;

    }



    report() {

        return {

            valid:
                this.errors.length === 0,

            errors:
                this.errors

        };

    }

}
