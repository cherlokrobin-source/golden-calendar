export class LunarEngine {

    constructor() {

        this.year = 1;
        this.month = 1;
        this.day = 1;

        // نهاية التسلسل القمري حسب نموذج الرزمانة الذهبية
        this.freezeYear = 49999;
        this.freezeMonth = 12;
        this.freezeDay = 30;

        this.frozen = false;

    }


    getDate() {

        return {

            year: this.year,
            month: this.month,
            day: this.day

        };

    }



    nextDay() {


        // إذا وصل القمر إلى النهاية يتجمد

        if(this.frozen){

            return;

        }



        this.day++;



        let daysInMonth =
            this.getDaysInMonth();



        if(this.day > daysInMonth){


            this.day = 1;

            this.month++;


        }



        if(this.month > 12){


            this.month = 1;

            this.year++;


        }




        // نقطة التجميد

        if(

            this.year >= this.freezeYear &&
            this.month >= this.freezeMonth &&
            this.day >= this.freezeDay

        ){

            this.year = this.freezeYear;
            this.month = this.freezeMonth;
            this.day = this.freezeDay;

            this.frozen = true;

        }


    }





    getDaysInMonth(){


        // نموذج قمري أولي
        // 30 / 29 يوم

        return (

            this.month % 2 === 1
            ? 30
            : 29

        );


    }


}
