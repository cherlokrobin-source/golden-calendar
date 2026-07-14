import fs from "fs";
import path from "path";


export class ChronologySearchEngine {


    constructor() {

        this.indexPath =
            "./database/indexes/days";

    }




    loadIndexFiles() {

        return fs.readdirSync(
            this.indexPath
        )
        .filter(
            file =>
            file.endsWith("_day_index.json")
        )
        .sort();

    }





    searchSolar(
        year,
        month,
        day
    ) {


        const files =
            this.loadIndexFiles();



        let dayId = 0;



        for (const file of files) {


            const data =
                JSON.parse(
                    fs.readFileSync(
                        path.join(
                            this.indexPath,
                            file
                        ),
                        "utf8"
                    )
                );



            for (const item of data) {


                dayId++;



                if (

                    item.year === year &&

                    item.month === month &&

                    item.day === day

                ) {


                    return {

                        dayId,

                        solar: {

                            year,
                            month,
                            day

                        },


                        lunar:
                            item.lunar || null,


                        indexFile:
                            file

                    };

                }


            }


        }



        return null;

    }






    searchLunar(
        year,
        month,
        day
    ) {


        const files =
            this.loadIndexFiles();



        let dayId = 0;



        for (const file of files) {


            const data =
                JSON.parse(
                    fs.readFileSync(
                        path.join(
                            this.indexPath,
                            file
                        ),
                        "utf8"
                    )
                );



            for (const item of data) {


                dayId++;



                if (

                    item.lunar &&

                    item.lunar.year === year &&

                    item.lunar.month === month &&

                    item.lunar.day === day

                ) {


                    return {

                        dayId,


                        lunar: {

                            year,
                            month,
                            day

                        },


                        solar: {

                            year:
                                item.year,

                            month:
                                item.month,

                            day:
                                item.day

                        },


                        indexFile:
                            file

                    };

                }


            }


        }



        return null;

    }






    searchYear(year) {


        const result = [];


        const files =
            this.loadIndexFiles();



        for (const file of files) {


            const data =
                JSON.parse(
                    fs.readFileSync(
                        path.join(
                            this.indexPath,
                            file
                        ),
                        "utf8"
                    )
                );



            for (const item of data) {


                if (
                    item.year === year
                ) {

                    result.push(item);

                }


            }


        }



        return result;

    }



}
