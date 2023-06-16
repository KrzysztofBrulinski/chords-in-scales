export type MollSound = "Am" | "Bbm" | "Bm" | "Cm" | "Cismoll" | "Dm" | "Dismoll" | "Em" | "Fm" | "Fismoll" | "Gm" | "Gismoll";

export type DurSound = "A" | "Bb" | "B" | "C" | "Cis" | "D" | "Eb" | "E" | "F" | "Fis" | "G" | "Ab";

export type Scales = {
    scales: {
        moll: MollSound[];
        dur: DurSound[];
    };
    error?: Error;
};

export type PostReqBody = {
    scaleKey: MollSound | DurSound;
};

export type SoundOnScaleResponse = {
    chordsInScale: (MollSound | DurSound)[];
    error?: Error;
};
