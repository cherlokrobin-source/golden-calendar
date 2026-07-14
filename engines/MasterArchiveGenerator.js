import { GoldenBatchGenerator } from "./GoldenBatchGenerator.js";
import { MasterProgressManager } from "./MasterProgressManager.js";



export class MasterArchiveGenerator {


    constructor() {

        this.batchGenerator =
            new GoldenBatchGenerator();


        this.progress =
            new MasterProgressManager();


        this.batchSize = 100;

    }




    generate(startYear, endYear) {


        const state =
            this.progress.load();



        let currentYear =
            startYear;



        let batchNumber =
            Math.ceil(
                currentYear /
                this.batchSize
            );



        // استكمال بعد توقف سابق
        if (
            state.status === "running" &&
            state.lastYear >= startYear
        ) {


            currentYear =
                state.lastYear + 1;


            batchNumber =
                state.lastBatch + 1;



            console.log(
                "استكمال من السنة:",
                currentYear
            );

        }




        while (
            currentYear <= endYear
        ) {



            let batchEnd =
                currentYear +
                this.batchSize -
                1;



            if (
                batchEnd > endYear
            ) {

                batchEnd =
                    endYear;

            }




            console.log(
                `إنشاء الدفعة ${currentYear} - ${batchEnd}`
            );



            const batch =
                this.batchGenerator.generateBatch(
                    currentYear,
                    batchEnd
                );



            this.progress.update(
                batchEnd,
                batchNumber
            );



            console.log(
                `تم تحديث التقدم: السنة ${batchEnd}`
            );



            currentYear =
                batchEnd + 1;



            batchNumber++;

        }




        // اكتمال حقيقي فقط عند بلوغ 50000 سنة
        if (
            endYear >= 50000
        ) {


            this.progress.complete();


            console.log(
                "اكتمل أرشيف 50000 سنة"
            );


        } else {


            console.log(
                "تم إنهاء النطاق المطلوب فقط"
            );

        }



        return true;


    }


}
