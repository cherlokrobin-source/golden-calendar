#ifndef EPOCH_GENERATOR_H
#define EPOCH_GENERATOR_H

#include <vector>
#include "EpochSegment.h"

class EpochGenerator
{

public:

    static std::vector<EpochSegment> generate(
        long long totalYears,
        long long epochLength
    );

};

#endif
