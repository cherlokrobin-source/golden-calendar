import fs from "fs";
import path from "path";


export class DayIndexReader {

    constructor() {

        this.indexPath =
            "./database/indexes/days";

        this.batches = [];

        this.cacheFile = null;
        this.cacheData = null;

        this.buildMap();

    }



    buildMap() {


        const files =
            fs.readdirSync(this.indexPath)
            .filter(
                file =>
                file.endsWith("_day_index.json")
            )
            .sort();


        let startDay = 1;


        for (const file of files) {


            const fullPath =
                path.join(
                    this.indexPath,
                    file
                );


            const size =
                JSON.parse(
                    fs.readFileSync(
                        fullPath,
                        "utf8"
                    )
                ).length;



            this.batches.push({

                file,

                startDay,

                endDay:
                    startDay + size - 1

            });



            startDay += size;


        }


        console.log(
            "Day index map loaded:",
            this.batches.length,
            "batches"
        );

    }




    find(dayId) {


        const batch =
            this.batches.find(
                b =>
                dayId >= b.startDay &&
                dayId <= b.endDay
            );


        if (!batch) {

            return null;

        }




        let data;


        if (
            this.cacheFile === batch.file
        ) {

            data =
                this.cacheData;


        } else {


            data =
                JSON.parse(
                    fs.readFileSync(
                        path.join(
                            this.indexPath,
                            batch.file
                        ),
                        "utf8"
                    )
                );


            this.cacheFile =
                batch.file;


            this.cacheData =
                data;

        }



        const item =
            data[
                dayId - batch.startDay
            ];



        if (!item) {

            return null;

        }



        return {

            dayId,


            year:
                item.year,


            month:
                item.month,


            day:
                item.day,


            lunar:
                item.lunar || null,


            indexFile:
                batch.file

        };


    }

}
