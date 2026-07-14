import { DayArchiveReader } from "../database/archive/DayArchiveReader.js";


export class GoldenTimeEngine {


    constructor() {

        this.archiveReader =
            new DayArchiveReader();

        this.status =
            "Golden Time Engine Ready";

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


        return this.archiveReader.getDay(dayId);

    }




    searchRange(startDay, endDay) {


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
