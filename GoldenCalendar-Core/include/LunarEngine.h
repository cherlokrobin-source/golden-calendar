#ifndef LUNAR_ENGINE_H
#define LUNAR_ENGINE_H

#include "Date.h"


class LunarEngine
{

public:

    static LunarDate getDate(long long dayId);

    static int daysInMonth(
        int year,
        int month
    );


    static bool isLeapYear(
        int year
    );

};


#endif
