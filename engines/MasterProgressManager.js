import fs from "fs";
import path from "path";


export class MasterProgressManager {


    constructor() {

        this.file =
            "./database/metadata/generation_progress.json";

        this.init();

    }



    init() {

        const dir =
            path.dirname(this.file);


        if (!fs.existsSync(dir)) {

            fs.mkdirSync(
                dir,
                {
                    recursive:true
                }
            );

        }


        if (!fs.existsSync(this.file)) {

            this.save({

                lastYear: 0,

                lastBatch: 0,

                totalYears: 50000,

                status: "started"

            });

        }

    }



    save(data) {

        fs.writeFileSync(

            this.file,

            JSON.stringify(
                data,
                null,
                2
            ),

            "utf8"

        );

    }



    load() {

        return JSON.parse(

            fs.readFileSync(

                this.file,

                "utf8"

            )

        );

    }



    update(year, batch) {


        this.save({

            lastYear: year,

            lastBatch: batch,

            totalYears: 50000,

            progress:
                ((year / 50000) * 100)
                .toFixed(4) + "%",

            status: "running"

        });


    }



    complete() {


        this.save({

            lastYear: 50000,

            lastBatch: 500,

            totalYears: 50000,

            progress: "100%",

            status: "completed"

        });


    }

}
