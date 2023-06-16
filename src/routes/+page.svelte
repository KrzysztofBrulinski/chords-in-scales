<script lang="ts">
	import Scales from '$components/molecules/Scales.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { scales } = data || {};
	const { moll, dur } = scales || {};
</script>

<h1 class="text-[#f99f14] text-[36px] text-center">
	Cześć Kamil! :) Welcome to SvelteKit Music Scales finder
</h1>

<div class="mx-auto grid gap-8 sm:grid-cols-2 grid-cols-1 px-5">
	<Scales title={'Dur'} sounds={dur} />
	<Scales title={'Moll'} sounds={moll} />
</div>
