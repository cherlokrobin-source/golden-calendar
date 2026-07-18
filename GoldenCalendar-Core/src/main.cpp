#include <iostream>

#include "../include/SolarEngine.h"

void printDate(long long dayId)
{
    SolarDate date = SolarEngine::getDate(dayId);

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


int main()
{

    long long feb28 =
        SolarEngine::toDayId(4,2,28);

    long long feb29 =
        SolarEngine::toDayId(4,2,29);

    long long march1 =
        SolarEngine::toDayId(4,3,1);


    printDate(feb28);
    printDate(feb29);
    printDate(march1);


    long long endYear =
        SolarEngine::toDayId(4,12,31);

    long long nextYear =
        SolarEngine::toDayId(5,1,1);


    printDate(endYear);
    printDate(nextYear);


    return 0;
}
