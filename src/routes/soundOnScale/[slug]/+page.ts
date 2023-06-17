import type { SoundOnScaleResponse } from "$types";
import type { PageLoad } from "./$types";

export const load = (async ({ params, url, fetch }) => {
    try {
        const res = await fetch(`${url.origin}/api/chordsInScales?scaleKey=${params.slug}`);
        const data = await res.json() as SoundOnScaleResponse;

        if (data.error) throw new Error(data.error.message);

        return {
            chordsInScale: data.chordsInScale,
        }
    } catch (error) {
        console.log(error);
        return { chordsInScale: [], error } as SoundOnScaleResponse;
    }
}) satisfies PageLoad;