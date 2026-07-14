import { DayArchiveReader } from "../database/archive/DayArchiveReader.js";


export class GoldenTimeEngine {


    constructor() {

        this.archiveReader = null;


        this.status =
            "Golden Time Engine Ready";

    }



    init() {

        if (!this.archiveReader) {

            this.archiveReader =
                new DayArchiveReader();

        }

    }



    info() {

        return {

            status:
                this.status

        };

    }




    searchDay(dayId) {


        if (
            !Number.isInteger(dayId) ||
            dayId <= 0
        ) {

            return null;

        }



        this.init();



        return this.archiveReader.getDay(dayId);

    }




    searchRange(startDay, endDay) {


        this.init();


        const result = [];


        for (
            let day = startDay;
            day <= endDay;
            day++
        ) {


            const item =
                this.searchDay(day);



            if (item) {

                result.push(item);

            }

        }


        return result;

    }


}
