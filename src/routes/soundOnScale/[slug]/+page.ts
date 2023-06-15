import type { SoundOnScaleResponse } from "$types";
import type { PageLoad } from "./$types";

export const load = (async ({ params, url, fetch }) => {
    console.log("CHORD PAGE LOAD")
    try {
        const res = await fetch(`${url.origin}/api/chordsInScales`, {
            method: "POST",
            body: JSON.stringify({
                scaleKey: params.slug,
            }),
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'public, max-age=3600'
            },
        });
        const data = await res.json() as SoundOnScaleResponse;

        if (data.error) throw new Error(data.error.message);

        return {
            maxage: 3600,
            chordsInScale: data.chordsInScale,
        }
    } catch (error) {
        console.log(error);
        return { chordsInScale: [], error } as SoundOnScaleResponse;
    }
}) satisfies PageLoad;