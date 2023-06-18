<script lang="ts">
	import { routes } from '$consts';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import CategoryTile from '$components/atoms/CategoryTile.svelte';

	export let data: PageData;

	const { chordsInScale } = data;
</script>

<div class="flex flex-col justify-center items-center w-full">
	{#if chordsInScale}
		<h2 class="text-mainColor text-[36px] text-center mt-4">
			Chords in key of {$page.params.slug}
		</h2>
		<div class="flex flex-col md:flex-row justify-center items-center gap-4 md:mt-20 w-full">
			{#each chordsInScale as chord}
				<CategoryTile>
					<p class="text-[36px]">{chord}</p>
				</CategoryTile>
			{/each}
		</div>
	{/if}

	<a
		href={routes.homepage}
		class="mt-10 flex justify-center items-center bg-[#727272] rounded-lg shadow-lg hover:bg-[#000000] hover:text-white transition-colors w-[90px] h-[90px] text-center"
	>
		<p class="text-[24px]">Back</p>
	</a>
</div>
