import { derived } from "svelte/store";
import { time } from "./time";
const startTime = new Date();

export const userTime = derived(time, ($time) => {
    return Math.round(($time.getTime() - startTime.getTime()) / 1000);
});