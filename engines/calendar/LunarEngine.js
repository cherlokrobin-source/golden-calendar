export class LunarEngine {

    constructor() {

        this.year = 1;
        this.month = 1;
        this.day = 1;

    }


    getDate() {

        return {
            year: this.year,
            month: this.month,
            day: this.day
        };

    }


    nextDay() {

        this.day++;


        let daysInMonth =
            this.getDaysInMonth();


        if (this.day > daysInMonth) {

            this.day = 1;
            this.month++;

        }


        if (this.month > 12) {

            this.month = 1;
            this.year++;

        }

    }


    getDaysInMonth() {

        // نموذج قمري أولي:
        // الأشهر الفردية 30 يومًا
        // الأشهر الزوجية 29 يومًا

        return (
            this.month % 2 === 1
            ? 30
            : 29
        );

    }

}
