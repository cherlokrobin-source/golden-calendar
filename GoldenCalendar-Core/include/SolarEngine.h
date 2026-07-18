#ifndef SOLAR_ENGINE_H
#define SOLAR_ENGINE_H

#include "Date.h"

class SolarEngine
{

public:

    static bool isLeapYear(long long year);

    static int daysInYear(long long year);

    static int daysInMonth(long long year, int month);

    static SolarDate getDate(long long dayId);

    static long long toDayId(
        long long year,
        int month,
        int day
    );

};

#endif
