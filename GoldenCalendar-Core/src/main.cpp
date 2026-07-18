#include <iostream>

#include "../include/ChronologyEngine.h"


int main()
{

    ChronologyEngine engine;


    long long tests[] =
    {
        1,
        32,
        366,
        1155
    };


    for(long long id : tests)
    {

        CalendarDay day =
            engine.getDay(id);


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
        << "\n\n";
    }


    return 0;
}
