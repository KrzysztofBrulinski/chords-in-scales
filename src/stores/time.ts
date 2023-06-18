import { readable } from "svelte/store";

export const time = readable(new Date(), set => {
    const intervalId = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
});