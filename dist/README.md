# Windrose panel plugin

Example query:

    SELECT
        $timeSeries as t,
        WS_16_33_1_1_1 AS "speed",
        WD_20_35_1_1_1 AS "direction"
    FROM $table
    WHERE $timeFilter
    ORDER BY t
