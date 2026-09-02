# Golden Calendar
# Lunar/Solar synchronization test
# Epoch:
# Friday 1 January Year 1 Solar
# = 1 Muharram Year 1 Lunar


SOLAR_MONTHS = [
    31,28,31,30,
    31,30,31,31,
    30,31,30,31
]


LUNAR_MONTHS = [
    30,29,30,29,
    30,29,30,29,
    30,29,30,29
]


# سنوات كبيسة قمرية داخل دورة 33 سنة
LUNAR_LEAP_YEARS = [
    3,6,9,11,14,
    17,20,22,25,
    28,31
]


solar_year = 1
solar_month = 1
solar_day = 1


lunar_year = 1
lunar_month = 1
lunar_day = 1


total_days = 1



def solar_leap(year):

    if year % 400 == 0:
        return True

    if year % 100 == 0:
        return False

    return year % 4 == 0



def solar_days_in_month(year, month):

    if month == 2:
        return 29 if solar_leap(year) else 28

    return SOLAR_MONTHS[month-1]



def lunar_leap(year):

    cycle = ((year-1) % 33) + 1

    return cycle in LUNAR_LEAP_YEARS



def lunar_year_days(year):

    return 355 if lunar_leap(year) else 354



def lunar_days_in_month(year, month):

    if month == 12 and lunar_leap(year):
        return 30

    return LUNAR_MONTHS[month-1]



def advance_solar():

    global solar_year, solar_month, solar_day

    solar_day += 1

    if solar_day > solar_days_in_month(
        solar_year,
        solar_month
    ):

        solar_day = 1
        solar_month += 1

        if solar_month > 12:
            solar_month = 1
            solar_year += 1



def advance_lunar():

    global lunar_year, lunar_month, lunar_day

    lunar_day += 1

    if lunar_day > lunar_days_in_month(
        lunar_year,
        lunar_month
    ):

        lunar_day = 1
        lunar_month += 1

        if lunar_month > 12:

            lunar_month = 1
            lunar_year += 1



print("Golden Calendar Lunar Cycle Test")
print("--------------------------------")

print(
    "Start:",
    "Friday 1 January Year 1",
    "=",
    "1 Muharram Year 1"
)

print()


target = 40


while lunar_year <= target:


    if lunar_month == 1 and lunar_day == 1:

        print(
            "Lunar Year",
            lunar_year,
            "=> Solar:",
            solar_day,
            "/",
            solar_month,
            "/",
            solar_year,
            "| Days:",
            total_days
        )


    advance_solar()
    advance_lunar()

    total_days += 1
