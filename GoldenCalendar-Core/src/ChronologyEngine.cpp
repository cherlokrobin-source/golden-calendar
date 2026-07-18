#include "../include/ChronologyEngine.h"
#include "../include/Epoch.h"
#include "../include/DayEngine.h"
#include "../include/SolarEngine.h"
#include "../include/LunarEngine.h"
#include "../include/EpochGenerator.h"



ChronologyEngine::ChronologyEngine()
{
    epochs =
        EpochGenerator::generate(
            50000,
            2083
        );
}




EpochSegment ChronologyEngine::findEpoch(long long dayId)
{

    for(auto &epoch : epochs)
    {

        if(dayId >= epoch.startDayId &&
           dayId <= epoch.endDayId)
        {
            return epoch;
        }

    }


    return epochs.back();

}




CalendarDay ChronologyEngine::getDay(long long dayId)
{

    EpochSegment epoch =
        findEpoch(dayId);



    CalendarDay day;


    day.dayId = dayId;



    day.weekday =
        DayEngine::getWeekday(dayId);



    day.solar =
        SolarEngine::getDate(dayId);



    day.lunar =
        LunarEngine::getDate(dayId);



    day.epochStartYear =
        epoch.startYear;


    day.epochEndYear =
        epoch.endYear;


    day.epochStartDayId =
        epoch.startDayId;


    day.epochEndDayId =
        epoch.endDayId;



    return day;

}
