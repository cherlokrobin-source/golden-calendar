#include "../include/Epoch.h"

CalendarDay Epoch::firstDay()
{
    CalendarDay day;

    day.dayId = 1;

    day.weekday = "الجمعة";

    day.solar.year = 1;
    day.solar.month = 1;
    day.solar.day = 1;
    day.solar.monthName = "يناير";

    day.lunar.year = 1;
    day.lunar.month = 1;
    day.lunar.day = 1;
    day.lunar.monthName = "محرم";

    return day;
}
