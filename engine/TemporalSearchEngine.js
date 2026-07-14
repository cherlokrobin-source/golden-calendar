import { GoldenArchiveIndex } from "../database/indexes/GoldenArchiveIndex.js";
import { ArchiveReader } from "../database/archive/ArchiveReader.js";


export class TemporalSearchEngine {

    constructor() {

        this.index = new GoldenArchiveIndex();

        this.archivePath = "./database/archive";


        this.index.build(
            this.archivePath
        );


        this.reader = new ArchiveReader(
            this.archivePath,
            this.index
        );

    }



    // البحث برقم اليوم
    searchByDayId(dayId) {

        return this.reader.getDay(dayId);

    }



    // البحث بالتاريخ الشمسي
    searchSolar(year, month, day) {


        for (
            let id = 1;
            id <= this.index.size();
            id++
        ) {

            const record =
                this.reader.getDay(id);


            if (
                record &&
                record.solar.year === year &&
                record.solar.month === month &&
                record.solar.day === day
            ) {

                return record;

            }

        }


        return null;

    }



    // البحث بالتاريخ القمري
    searchLunar(year, month, day) {


        for (
            let id = 1;
            id <= this.index.size();
            id++
        ) {

            const record =
                this.reader.getDay(id);


            if (
                record &&
                record.lunar.year === year &&
                record.lunar.month === month &&
                record.lunar.day === day
            ) {

                return record;

            }

        }


        return null;

    }

}
