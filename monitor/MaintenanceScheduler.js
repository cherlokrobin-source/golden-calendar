import fs from "fs";


export class MaintenanceScheduler {


    constructor(interval = 3600000) {

        this.interval = interval;

        this.tasks = [];

        this.logFile =
            "./logs/maintenance.log";

        this.timer = null;

    }



    addTask(name, callback) {

        this.tasks.push({
            name,
            callback
        });

    }



    start() {


        if(this.timer){

            return;

        }


        this.timer =
            setInterval(
                ()=>{

                    this.run();

                },
                this.interval
            );


    }




    run(){


        for(const task of this.tasks){


            try {


                task.callback();


                this.log(
                    "SUCCESS: " +
                    task.name
                );


            } catch(error){


                this.log(
                    "FAILED: " +
                    task.name +
                    " - " +
                    error.message
                );


            }

        }

    }



    log(message){


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
