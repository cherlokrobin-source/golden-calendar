#include <iostream>

#include "../include/ChronologyEngine.h"


int main()
{

    ChronologyEngine engine;


    for(long long i = 1; i <= 35; i++)
    {

        CalendarDay day =
            engine.getDay(i);


        std::cout
        << "Day "
        << day.dayId
        << " : "
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
