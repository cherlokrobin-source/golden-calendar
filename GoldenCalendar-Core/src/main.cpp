#include <iostream>
#include "../include/ChronologyEngine.h"


int main()
{

    ChronologyEngine engine;


    long long testDay = 10000000;


    CalendarDay day =
        engine.getDay(testDay);


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
