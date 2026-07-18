#include <iostream>

#include "../include/SolarEngine.h"

int main()
{

    std::cout
    << "1/1/1 = Day "
    << SolarEngine::toDayId(1,1,1)
    << "\n";


    std::cout
    << "31/1/1 = Day "
    << SolarEngine::toDayId(1,1,31)
    << "\n";


    std::cout
    << "1/2/1 = Day "
    << SolarEngine::toDayId(1,2,1)
    << "\n";


    std::cout
    << "1/1/2 = Day "
    << SolarEngine::toDayId(2,1,1)
    << "\n";


    return 0;
}
