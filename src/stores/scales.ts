import type { DurSound, MollSound, Scales } from "$types";
import { writable } from "svelte/store";

const defaultvalue = { scales: { dur: [], moll: [] } } as Scales;

const createScalesStore = () => {
    const { subscribe, set, update } = writable(defaultvalue);

    return {
        subscribe,
        addMollScales: (mollScale: MollSound[]) => update(({ scales }) => ({
            scales: { ...scales, moll: mollScale }
        })),
        addDurScales: (mollScale: DurSound[]) => update(({ scales }) => ({
            scales: { ...scales, dur: mollScale }
        })),
        reset: set(defaultvalue),
    }
};

export const scalesStore = createScalesStore();