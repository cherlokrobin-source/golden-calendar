#include "../include/EpochManager.h"
#include "../include/SolarEngine.h"


EpochSegment EpochManager::createEpoch(
    long long startYear,
    long long endYear
)
{

    EpochSegment epoch;


    epoch.startYear = startYear;
    epoch.endYear = endYear;


    epoch.startDayId =
        SolarEngine::toDayId(
            startYear,
            1,
            1
        );


    epoch.endDayId =
        SolarEngine::toDayId(
            endYear,
            12,
            31
        );


    return epoch;
}
