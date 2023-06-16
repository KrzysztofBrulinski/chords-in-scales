import type { PostReqBody } from '$types';
import { apiFakeTimeout } from '$utils/apiFakeTimeout';
import type { RequestEvent } from './$types';

const ChordsInScales = {
    "Am": ["Am", "B°", "C", "Dm", "Em", "F", "G"],
    "Bbm": ["Bbm", "C°", "Db", "Ebm", "Fm", "Gb", "Ab"],
    "Bm": ["Bm", "Cis°", "D", "Em", "Fismoll", "G", "A"],
    "Cm": ["Cm", "D°", "Eb", "Fm", "Gm", "Ab", "Bb"],
    "Cismoll": ["Cismoll", "D°", "E", "Fismoll", "Gismoll", "A", "B"],
    "Dm": ["Dm", "E°", "F", "Gm", "Am", "Bb", "C"],
    "Dismoll": ["Dismoll", "Eis°", "Fis", "Gismoll", "Ais", "B", "Cis"],
    "Em": ["Em", "Fis°", "G", "Am", "Bm", "C", "D"],
    "Fm": ["Fm", "G°", "Ab", "Bb", "C", "Db", "Eb"],
    "Fismoll": ["Fismoll", "Gis°", "A", "Bm", "Cismoll", "D", "E"],
    "Gm": ["Gm", "A°", "Bb", "Cm", "Dm", "Eb", "F"],
    "Gismoll": ["Gismoll", "Ais°", "B", "Cismoll", "Dismoll", "E", "Fis"],
    "A": ["A", "Bm", "Cismoll", "D", "E", "Fismoll", "Gis°"],
    "Bb": ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "A°"],
    "B": ["B", "Cismoll", "Dismoll", "E", "Fis", "Gismoll", "Ais°"],
    "C": ["C", "Dm", "Em", "F", "G", "Am", "B°"],
    "Cis": ["Cis", "Dismoll", "Eismoll", "Fis", "Gis", "Aismoll", "Bis°"],
    "D": ["D", "Em", "Fismoll", "G", "A", "Bm", "Cis°"],
    "Eb": ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "D°"],
    "E": ["E", "Fismoll", "Gismoll", "A", "B", "Cismoll", "Dis°"],
    "F": ["F", "Gm", "Am", "Bb", "C", "Dm", "E°"],
    "Fis": ["Fis", "Gismoll", "Aismoll", "B", "Cis", "Dismoll", "Eis°"],
    "G": ["G", "Am", "Bm", "C", "D", "Em", "Fis°"],
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