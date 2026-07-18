#include <iostream>
#include "../include/EpochGenerator.h"

int main()
{

    auto epochs =
        EpochGenerator::generate(
            50000,
            2083
        );


    int index = 1;


    for(auto &epoch : epochs)
    {

        std::cout
        << "Epoch "
        << index++
        << "\n";


        std::cout
        << "Years: "
        << epoch.startYear
        << " - "
        << epoch.endYear
        << "\n";


        std::cout
        << "Days: "
        << epoch.startDayId
        << " - "
        << epoch.endDayId
        << "\n\n";
    }


    return 0;
}
