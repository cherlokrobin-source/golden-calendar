export class NamesEngine {

    constructor() {

        this.weekdays = [
            "الجمعة",
            "السبت",
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس"
        ];


        this.solarMonths = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "ماي",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر"
        ];


        this.lunarMonths = [
            "محرم",
            "صفر",
            "ربيع الأول",
            "ربيع الآخر",
            "جمادى الأولى",
            "جمادى الآخرة",
            "رجب",
            "شعبان",
            "رمضان",
            "شوال",
            "ذو القعدة",
            "ذو الحجة"
        ];

    }


    weekday(index) {
        return this.weekdays[index];
    }


    solarMonth(index) {
        return this.solarMonths[index - 1];
    }


    lunarMonth(index) {
        return this.lunarMonths[index - 1];
    }

}
