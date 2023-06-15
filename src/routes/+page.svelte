<script lang="ts">
	import Guitar from '$assets/svg/Guitar.svelte';
	import CategoryTile from '$components/atoms/CategoryTile.svelte';
	import { routes } from '$consts/routes';
	import type { PageData } from './$types';

	export let data: PageData;

	const { scales } = data || {};
	const { moll, dur } = scales || {};
</script>

<h1 class="bg-red-100 text-[36px]">Welcome to SvelteKit Music Scales finder</h1>

<div class="mx-auto grid gap-8 sm:grid-cols-2 grid-cols-1 px-5">
	{#if moll}
		<div class="grid gap-2">
			<h2>Moll scales</h2>
			{#each moll as mollScale}
				<CategoryTile url={`${routes.soundOnScale}/${mollScale}`} title={`${mollScale} scale`}>
					<Guitar className="w-10 h-7" />
				</CategoryTile>
			{/each}
		</div>
	{/if}

	{#if dur}
		<div class="grid gap-2">
			<h2>Dur scales</h2>
			{#each dur as durScale}
				<CategoryTile url={`${routes.soundOnScale}/${durScale}`} title={`${durScale} scale`}>
					<Guitar className="w-10 h-7" />
				</CategoryTile>
			{/each}
		</div>
	{/if}
</div>
