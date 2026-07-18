#include <iostream>

#include "../include/EpochManager.h"


int main()
{

    EpochSegment epoch =
        EpochManager::createEpoch(
            1,
            2083
        );


    std::cout
    << "Epoch Start Year: "
    << epoch.startYear
    << "\n";


    std::cout
    << "Epoch End Year: "
    << epoch.endYear
    << "\n";


    std::cout
    << "Start Day ID: "
    << epoch.startDayId
    << "\n";


    std::cout
    << "End Day ID: "
    << epoch.endDayId
    << "\n";


    return 0;
}
