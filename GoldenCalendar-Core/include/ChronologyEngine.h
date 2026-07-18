#ifndef CHRONOLOGY_ENGINE_H
#define CHRONOLOGY_ENGINE_H

#include "Date.h"

class ChronologyEngine {

public:

    ChronologyEngine();

    CalendarDay getDay(long long dayId);

};

#endif
