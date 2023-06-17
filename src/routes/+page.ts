import type { Scales } from "$types";
import type { PageLoad } from "./$types";

export const load = (async ({ url, fetch }) => {
    try {
        const res = await fetch(`${url.origin}/api/scales`);
        const data = await res.json() as Scales;

        if (data.error) throw new Error(data.error.message);

        return {
            scales: data.scales,
        };
    } catch (error) {
        //TODO: Add proper error handling
        console.log(error);
        return { scales: { moll: [], dur: [] } } as Scales;
    }
}) satisfies PageLoad;