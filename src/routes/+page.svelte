<script lang="ts">
	import Guitar from '$assets/svg/Guitar.svelte';
	import CategoryTile from '$components/atoms/CategoryTile.svelte';
	import { routes } from '$consts/routes';
	import type { PageData } from './$types';

	export let data: PageData;

	const { scales } = data || {};
</script>

<h1 class="bg-red-100 text-[36px]">Welcome to SvelteKit Music Scales finder</h1>

<div class="max-w-7xl mx-auto grid xl:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 px-5">
	{#if scales}
		{#each scales as scale}
			<CategoryTile url={`${routes.soundOnScale}/${scale}`} title={`${scale} scale`}>
				<Guitar className="w-10 h-7" />
			</CategoryTile>
		{/each}
	{/if}
</div>
