#include "../include/SolarEngine.h"

SolarDate SolarEngine::getDate(long long dayId)
{

    SolarDate date;

    date.year = 1;

    const char* months[] = {
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر"
    };

    int daysInMonth[] = {
        31,28,31,30,31,30,
        31,31,30,31,30,31
    };


    long long remaining = dayId;

    int month = 1;


    while(remaining > daysInMonth[month-1])
    {
        remaining -= daysInMonth[month-1];
        month++;
    }


    date.month = month;
    date.day = remaining;
    date.monthName = months[month-1];


    return date;

}
