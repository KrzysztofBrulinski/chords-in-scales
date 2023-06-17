import type { DurSound, MollSound } from '$types';
import { apiFakeTimeout } from '$utils/apiFakeTimeout';
import { json } from '@sveltejs/kit';
import { ChordsInScales } from '$data';


export async function GET({ setHeaders, url }) {
    try {
        const scaleKey = url.searchParams.get("scaleKey") as DurSound | MollSound | null;

        if (!scaleKey) throw new Error("Param 'scaleKey' not provided");

        const chordsInScale = ChordsInScales[scaleKey];

        await apiFakeTimeout();

        setHeaders({
            "cache-control": "max-age=604800",
        });

        return json({ chordsInScale });
    } catch (error) {
        console.log(error);
        return json({ chordsInScale: [], error });
    }
}