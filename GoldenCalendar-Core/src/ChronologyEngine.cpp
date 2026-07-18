#include "../include/ChronologyEngine.h"
#include "../include/Epoch.h"
#include "../include/DayEngine.h"
#include "../include/SolarEngine.h"
#include "../include/EpochGenerator.h"


ChronologyEngine::ChronologyEngine()
{
    epochs =
        EpochGenerator::generate(
            50000,
            2083
        );
}


CalendarDay ChronologyEngine::getDay(long long dayId)
{
    if(dayId == 1)
    {
        return Epoch::firstDay();
    }

    CalendarDay day;

    day.dayId = dayId;

    day.weekday =
        DayEngine::getWeekday(dayId);

    day.solar =
        SolarEngine::getDate(dayId);

    return day;
}
