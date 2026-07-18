#include <iostream>

#include "../include/ChronologyEngine.h"
#include "../include/SolarEngine.h"


int main()
{

    long long dayId =
        SolarEngine::toDayId(2083,12,31);


    std::cout
    << "Day ID for 31 December 2083: "
    << dayId
    << "\n\n";


    ChronologyEngine engine;


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


    return 0;
}
