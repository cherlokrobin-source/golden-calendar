#include <iostream>

#include "../include/SolarEngine.h"

int main()
{

    long long tests[] =
    {
        1,
        32,
        365,
        366
    };


    for(long long dayId : tests)
    {

        SolarDate date =
            SolarEngine::getDate(dayId);


        std::cout
        << "Day "
        << dayId
        << " = "
        << date.day
        << " "
        << date.monthName
        << " "
        << date.year
        << "\n";
    }


    return 0;
}
