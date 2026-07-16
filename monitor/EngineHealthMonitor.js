import fs from "fs";
import os from "os";


export class EngineHealthMonitor {


    constructor() {

        this.startTime = Date.now();

        this.logFile =
            "./logs/engine.log";

        this.maxMemoryMB = 512;

        this.requests = 0;

    }



    request() {

        this.requests++;

    }



    status() {


        const memory =
            process.memoryUsage();


        const uptime =
            Math.floor(
                (Date.now() - this.startTime) / 1000
            );


        return {

            uptime,

            requests:
                this.requests,


            memory: {

                rss:
                    Math.round(
                        memory.rss / 1024 / 1024
                    ),


                heapUsed:
                    Math.round(
                        memory.heapUsed / 1024 / 1024
                    ),


                heapTotal:
                    Math.round(
                        memory.heapTotal / 1024 / 1024
                    )

            },


            cpu:
                os.loadavg()

        };

    }




    check() {


        const state =
            this.status();



        // تسجيل حالة المحرك

        this.log(
            "HEALTH CHECK: " +
            JSON.stringify(state)
        );



        // مراقبة الذاكرة

        if (
            state.memory.heapUsed >
            this.maxMemoryMB
        ) {


            this.log(
                "WARNING: High memory usage: " +
                state.memory.heapUsed +
                " MB"
            );


        }



        return state;


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
