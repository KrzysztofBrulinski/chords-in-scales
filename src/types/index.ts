import type { ArrayElement } from "./utils";

export type Scales = {
    scales: {
        moll: Sounds[];
        dur: Sounds[];
    };
    error?: Error;
};

export type PostReqBody = {
    scaleKey: ArrayElement<Sounds>
};

export type SoundOnScaleResponse = {
    chordsInScale: ArrayElement<Sounds>[];
    error?: Error;
};

export type Sounds = [
    "Am",
    "Bbm",
    "Bm",
    "Cm",
    "C#m",
    "Dm",
    "D#m",
    "Em",
    "Fm",
    "F#m",
    "Gm",
    "G#m",
    "A",
    "Bb",
    "B",
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
];

