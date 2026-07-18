#ifndef DATE_H
#define DATE_H

#include <string>


struct SolarDate
{
    int year;
    int month;
    int day;
    std::string monthName;
};


struct LunarDate
{
    int year;
    int month;
    int day;
    std::string monthName;
};


struct CalendarDay
{
    long long dayId;

    std::string weekday;

    SolarDate solar;

    LunarDate lunar;


    long long epochStartYear;

    long long epochEndYear;

    long long epochStartDayId;

    long long epochEndDayId;
};


#endif
