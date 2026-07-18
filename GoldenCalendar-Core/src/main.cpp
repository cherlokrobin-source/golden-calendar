#include <iostream>

#include "../include/ChronologyEngine.h"


int main()
{

    ChronologyEngine engine;


    long long dayId = 10000000;


    CalendarDay day =
        engine.getDay(dayId);



    std::cout
        << "Day ID: "
        << day.dayId
        << "\n";


    std::cout
        << "Weekday: "
        << day.weekday
        << "\n";


    std::cout
        << "Solar: "
        << day.solar.day
        << " "
        << day.solar.monthName
        << " "
        << day.solar.year
        << "\n";


    std::cout
        << "\nEpoch Years: "
        << day.epochStartYear
        << " - "
        << day.epochEndYear
        << "\n";


    std::cout
        << "Epoch Days: "
        << day.epochStartDayId
        << " - "
        << day.epochEndDayId
        << "\n";


    return 0;
}
