import fs from "fs";
import path from "path";


export class PerformanceMonitor {


    constructor() {

        this.operations = 0;

        this.totalTime = 0;

        this.fastest = null;

        this.slowest = 0;


        this.logDir =
            "./logs";


        this.logFile =
            path.join(
                this.logDir,
                "performance.log"
            );


        this.init();

    }



    init() {

        if (!fs.existsSync(this.logDir)) {

            fs.mkdirSync(
                this.logDir,
                {
                    recursive: true
                }
            );

        }

    }



    start() {

        return Date.now();

    }



    end(startTime, name="operation") {


        const duration =
            Date.now() - startTime;


        this.operations++;

        this.totalTime += duration;



        if (
            this.fastest === null ||
            duration < this.fastest
        ) {

            this.fastest = duration;

        }



        if (
            duration > this.slowest
        ) {

            this.slowest = duration;

        }



        this.log(
            `${name}: ${duration} ms`
        );


        return duration;

    }



    report() {


        const average =

            this.operations === 0
            ? 0
            :
            (
                this.totalTime /
                this.operations
            ).toFixed(2);



        return {

            operations:
                this.operations,

            averageMs:
                Number(average),

            fastestMs:
                this.fastest,

            slowestMs:
                this.slowest

        };

    }




    log(message) {


        const line =

            "[" +
            new Date().toISOString() +
            "] " +

            message +

            "\n";


        fs.appendFileSync(

            this.logFile,

            line,

            "utf8"

        );


    }


}
