export class SolarEngine {

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

        let daysInMonth = this.getDaysInMonth(
            this.month,
            this.year
        );


        if (this.day > daysInMonth) {

            this.day = 1;
            this.month++;

        }


        if (this.month > 12) {

            this.month = 1;
            this.year++;

        }

    }


    getDaysInMonth(month, year) {

        const months = [
            31,28,31,30,
            31,30,31,31,
            30,31,30,31
        ];


        let days = months[month - 1];


        if (
            month === 2 &&
            this.isLeapYear(year)
        ) {
            days = 29;
        }


        return days;

    }


    isLeapYear(year) {

        return (
            year % 4 === 0 &&
            (
                year % 100 !== 0 ||
                year % 400 === 0
            )
        );

    }

}
