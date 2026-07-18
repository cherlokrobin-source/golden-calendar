#include "../include/LunarEngine.h"


bool LunarEngine::isLeapYear(int year)
{

    // نظام قمري أولي (سيتم تطويره لاحقًا)
    return (year % 3 == 0);

}



int LunarEngine::daysInMonth(
    int year,
    int month
)
{

    // تناوب 30 و29 يومًا
    if(month % 2 == 1)
        return 30;

    return 29;

}



LunarDate LunarEngine::getDate(long long dayId)
{

    LunarDate date;


    long long days =
        dayId - 1;


    int year = 1;


    int daysPerYear = 354;


    while(days >= daysPerYear)
    {
        days -= daysPerYear;
        year++;
    }


    int month = 1;


    while(days >= daysInMonth(year, month))
    {
        days -= daysInMonth(year, month);
        month++;
    }


    date.year = year;

    date.month = month;

    date.day = days + 1;


    date.monthName =
        "شهر قمري";


    return date;

}
