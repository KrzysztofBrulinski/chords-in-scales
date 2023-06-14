import type { Scales } from "$types/scales";
import type { PageLoad } from "./$types";

export const load = (async ({ url }) => {
    try {
        const res = await fetch(`${url.origin}/api/scales`);
        const data = await res.json() as Scales;

        if (data.error) throw new Error(data.error.message);

        return data;
    } catch (error) {
        //TODO: Add proper error handling
        console.log(error);
        return { scales: [] } as Scales;
    }
}) satisfies PageLoad;