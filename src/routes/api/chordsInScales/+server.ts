import type { PostReqBody } from '$types';
import { apiFakeTimeout } from '$utils/apiFakeTimeout';
import type { RequestEvent } from './$types';

const ChordsInScales = {
    "Am": ["Am", "B°", "C", "Dm", "Em", "F", "G"],
    "Bbm": ["Bbm", "C°", "Db", "Ebm", "Fm", "Gb", "Ab"],
    "Bm": ["Bm", "C#°", "D", "Em", "F#m", "G", "A"],
    "Cm": ["Cm", "D°", "Eb", "Fm", "Gm", "Ab", "Bb"],
    "C#m": ["C#m", "D°", "E", "F#m", "G#m", "A", "B"],
    "Dm": ["Dm", "E°", "F", "Gm", "Am", "Bb", "C"],
    "D#m": ["D#m", "E#°", "F#", "G#m", "A#", "B", "C#"],
    "Em": ["Em", "F#°", "G", "Am", "Bm", "C", "D"],
    "Fm": ["Fm", "G°", "Ab", "Bb", "C", "Db", "Eb"],
    "F#m": ["F#m", "G#°", "A", "Bm", "C#m", "D", "E"],
    "Gm": ["Gm", "A°", "Bb", "Cm", "Dm", "Eb", "F"],
    "G#m": ["G#m", "A#°", "B", "C#m", "D#m", "E", "F#"],
    "A": ["A", "Bm", "C#m", "D", "E", "F#m", "G#°"],
    "Bb": ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "A°"],
    "B": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#°"],
    "C": ["C", "Dm", "Em", "F", "G", "Am", "B°"],
    "C#": ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#°"],
    "D": ["D", "Em", "F#m", "G", "A", "Bm", "C#°"],
    "Eb": ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "D°"],
    "E": ["E", "F#m", "G#m", "A", "B", "C#m", "D#°"],
    "F": ["F", "Gm", "Am", "Bb", "C", "Dm", "E°"],
    "F#": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#°"],
    "G": ["G", "Am", "Bm", "C", "D", "Em", "F#°"],
    "Ab": ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "G°"],
};

export async function POST({ request }: RequestEvent) {
    try {
        const { scaleKey } = await request.json() as PostReqBody;
        const chordsInScale = ChordsInScales[scaleKey];

        await apiFakeTimeout();

        return new Response(JSON.stringify({ chordsInScale }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });


    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ chordsInScale: [], error }), {
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'public, max-age=3600'
            }
        });
    }
}