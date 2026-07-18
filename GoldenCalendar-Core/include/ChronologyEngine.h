#ifndef CHRONOLOGY_ENGINE_H
#define CHRONOLOGY_ENGINE_H

#include "Date.h"
#include "EpochSegment.h"
#include <vector>


class ChronologyEngine
{

private:

    std::vector<EpochSegment> epochs;


    EpochSegment findEpoch(long long dayId);


public:

    ChronologyEngine();


    CalendarDay getDay(long long dayId);

};


#endif
