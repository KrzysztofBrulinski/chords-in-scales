import type { Scales } from "$types";
import type { PageLoad } from "./$types";

export const load = (async ({ url, fetch }) => {
    try {
        const res = await fetch(`${url.origin}/api/scales`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'cache-control': 'public, max-age=3600'
                },
            }
        );
        const data = await res.json() as Scales;

        if (data.error) throw new Error(data.error.message);

        return {
            maxage: 3600,
            scales: data.scales,
        };
    } catch (error) {
        //TODO: Add proper error handling
        console.log(error);
        return { scales: { moll: [], dur: [] } } as Scales;
    }
}) satisfies PageLoad;