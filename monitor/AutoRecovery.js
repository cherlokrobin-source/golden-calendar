import fs from "fs";


export class AutoRecovery {


    constructor() {

        this.logFile =
            "./logs/errors.log";

        this.enabled = true;

    }



    start() {


        if(!this.enabled){

            return;

        }



        process.on(
            "uncaughtException",
            (error)=>{

                this.capture(
                    "UNCAUGHT_EXCEPTION",
                    error
                );

            }
        );



        process.on(
            "unhandledRejection",
            (reason)=>{

                this.capture(
                    "UNHANDLED_REJECTION",
                    reason
                );

            }
        );


    }




    capture(type, error){


        const message =

            "[" +
            new Date().toISOString() +
            "] " +

            type +

            " : " +

            (
                error.stack ||
                error
            )

            + "\n\n";



        fs.appendFileSync(

            this.logFile,

            message,

            "utf8"

        );


        console.error(
            message
        );


    }



}
