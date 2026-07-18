#include "../include/SolarEngine.h"


bool SolarEngine::isLeapYear(long long year)
{
    if(year % 400 == 0)
        return true;

    if(year % 100 == 0)
        return false;

    return (year % 4 == 0);
}


int SolarEngine::daysInYear(long long year)
{
    return isLeapYear(year) ? 366 : 365;
}


int SolarEngine::daysInMonth(long long year, int month)
{
    const int days[] =
    {
        31,28,31,30,31,30,
        31,31,30,31,30,31
    };

    if(month == 2 && isLeapYear(year))
        return 29;

    return days[month - 1];
}


SolarDate SolarEngine::getDate(long long dayId)
{
    SolarDate date;

    date.year = 1;
    date.month = 1;
    date.day = 1;
    date.monthName = "يناير";

    return date;
}


long long SolarEngine::toDayId(
    long long year,
    int month,
    int day)
{

    long long total = 0;


    // حساب أيام السنوات السابقة
    for(long long y = 1; y < year; y++)
    {
        total += daysInYear(y);
    }


    // حساب أيام الأشهر السابقة
    for(int m = 1; m < month; m++)
    {
        total += daysInMonth(year, m);
    }


    // إضافة اليوم الحالي
    total += day;


    return total;
}
