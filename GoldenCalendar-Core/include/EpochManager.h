#ifndef EPOCH_MANAGER_H
#define EPOCH_MANAGER_H

#include "EpochSegment.h"

class EpochManager
{

public:

    static EpochSegment createEpoch(
        long long startYear,
        long long endYear
    );

};

#endif
