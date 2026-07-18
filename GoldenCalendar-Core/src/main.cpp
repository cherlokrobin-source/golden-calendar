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
        << "\n\n";



    std::cout
        << "Solar: "
        << day.solar.day
        << " "
        << day.solar.monthName
        << " "
        << day.solar.year
        << "\n";



    std::cout
        << "Lunar: "
        << day.lunar.day
        << " "
        << day.lunar.monthName
        << " "
        << day.lunar.year
        << "\n\n";



    std::cout
        << "Epoch Years: "
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
