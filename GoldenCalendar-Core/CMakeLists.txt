cmake_minimum_required(VERSION 3.10)

project(GoldenCalendarCore)

set(CMAKE_CXX_STANDARD 17)

include_directories(include)

add_executable(
    GoldenCalendarCore

    src/main.cpp
    src/Epoch.cpp
    src/ChronologyEngine.cpp
    src/DayEngine.cpp
    src/SolarEngine.cpp
)
