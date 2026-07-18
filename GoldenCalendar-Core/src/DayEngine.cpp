#include "../include/DayEngine.h"

std::string DayEngine::getWeekday(long long dayId)
{

    const char* weekdays[] = {
        "الجمعة",
        "السبت",
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس"
    };

    int index = (dayId - 1) % 7;

    return weekdays[index];
}
