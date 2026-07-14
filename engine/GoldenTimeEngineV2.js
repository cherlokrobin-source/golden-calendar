import { ArchiveReader } from "../database/archive/ArchiveReader.js";
import { GoldenArchiveIndex } from "../database/indexes/GoldenArchiveIndex.js";
import { SolarDateIndex } from "../database/indexes/SolarDateIndex.js";
import { LunarDateIndex } from "../database/indexes/LunarDateIndex.js";
import { IndexStorage } from "../database/indexes/IndexStorage.js";


export class GoldenTimeEngineV2 {


    constructor() {

        this.archivePath = "./database/archive";

        this.storage =
            new IndexStorage(
                "./database/indexes/storage"
            );


        this.archiveIndex =
            new GoldenArchiveIndex();


        this.archiveIndex.build(
            this.archivePath
        );


        this.solarIndex =
            new SolarDateIndex();


        this.lunarIndex =
            new LunarDateIndex();


        this.loadIndexes();


        this.reader =
            new ArchiveReader(
                this.archivePath,
                this.archiveIndex
            );

    }



    loadIndexes() {


        const solar =
            this.storage.load(
                "solar_index"
            );


        const lunar =
            this.storage.load(
                "lunar_index"
            );


        this.solarIndex.index =
            solar;


        this.lunarIndex.index =
            lunar;

    }



    searchDay(dayId) {

        return this.reader.getDay(dayId);

    }



    searchSolar(year, month, day) {


        const dayId =
            this.solarIndex.find(
                year,
                month,
                day
            );


        if (!dayId) {

            return null;

        }


        return this.searchDay(
            Number(dayId)
        );

    }



    searchLunar(year, month, day) {


        const dayId =
            this.lunarIndex.find(
                year,
                month,
                day
            );


        if (!dayId) {

            return null;

        }


        return this.searchDay(
            Number(dayId)
        );

    }



    info() {

        return {

            days:
                this.archiveIndex.size(),

            solarIndex:
                this.solarIndex.size(),

            lunarIndex:
                this.lunarIndex.size(),

            status:
                "Golden Time Engine V2 Ready"

        };

    }

}
