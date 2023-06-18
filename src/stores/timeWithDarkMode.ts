import { derived } from "svelte/store";
import { isDarkMode } from "./darkMode";
import { time } from "./time";

const timeThreshold = new Date();
timeThreshold.setHours(18);
timeThreshold.setMinutes(0);
timeThreshold.setSeconds(0);
timeThreshold.setMilliseconds(0);

export const timeWithDarkMode = derived([time, isDarkMode], ([$time, $isDarkMode]) => {
    if (!$isDarkMode && $time.getTime() > timeThreshold.getTime()) {
        isDarkMode.set(true);
    }
    return $time;
});