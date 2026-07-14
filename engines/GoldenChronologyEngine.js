import { SolarEngine } from "./calendar/SolarEngine.js";
import { LunarEngine } from "./calendar/LunarEngine.js";
import { NamesEngine } from "./calendar/NamesEngine.js";


export class GoldenChronologyEngine {

    constructor() {

        this.dayId = 1;

        this.solarEngine = new SolarEngine();
        this.lunarEngine = new LunarEngine();
        this.names = new NamesEngine();


        this.weekdayIndex = 0;

    }



    generateDay() {

        const solar = this.solarEngine.getDate();
        const lunar = this.lunarEngine.getDate();


        const record = {

            dayId: this.dayId,


            weekday: {
                index: this.weekdayIndex,
                name: this.names.weekday(this.weekdayIndex)
            },


            solar: {
                year: solar.year,
                month: solar.month,
                monthName: this.names.solarMonth(solar.month),
                day: solar.day
            },


            lunar: {
                year: lunar.year,
                month: lunar.month,
                monthName: this.names.lunarMonth(lunar.month),
                day: lunar.day
            }

        };


        this.dayId++;

        this.weekdayIndex++;

        if (this.weekdayIndex > 6) {
            this.weekdayIndex = 0;
        }


        this.solarEngine.nextDay();
        this.lunarEngine.nextDay();


        return record;

    }

}
