#include "../include/EpochGenerator.h"
#include "../include/EpochManager.h"


std::vector<EpochSegment> EpochGenerator::generate(
    long long totalYears,
    long long epochLength
)
{

    std::vector<EpochSegment> epochs;


    long long startYear = 1;


    while(startYear <= totalYears)
    {

        long long endYear =
            startYear + epochLength - 1;


        if(endYear > totalYears)
            endYear = totalYears;


        epochs.push_back(
            EpochManager::createEpoch(
                startYear,
                endYear
            )
        );


        startYear = endYear + 1;
    }


    return epochs;
}
