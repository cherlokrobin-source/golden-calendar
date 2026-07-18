cmake_minimum_required(VERSION 3.10)

project(GoldenCalendarCore)


set(CMAKE_CXX_STANDARD 17)

set(CMAKE_CXX_STANDARD_REQUIRED ON)


include_directories(include)


add_executable(
    GoldenCalendarCore

    src/main.cpp

    src/Epoch.cpp

    src/EpochManager.cpp

    src/EpochSegment.cpp

    src/EpochGenerator.cpp

    src/ChronologyEngine.cpp

    src/DayEngine.cpp

    src/LunarEngine.cpp
    src/SolarEngine.cpp
)
