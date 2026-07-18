#include <iostream>

#include "../include/SolarEngine.h"

int main()
{

    long long years[] =
    {
        4,
        100,
        400
    };


    for(long long year : years)
    {

        std::cout
        << "Year "
        << year
        << " : ";

        if(SolarEngine::isLeapYear(year))
            std::cout << "Leap";
        else
            std::cout << "Normal";

        std::cout
        << " - Days: "
        << SolarEngine::daysInYear(year)
        << "\n";
    }


    return 0;
}
