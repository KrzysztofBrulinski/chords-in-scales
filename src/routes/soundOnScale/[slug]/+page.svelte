<script lang="ts">
	import { routes } from '$consts/routes';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	const { chordsInScale } = data;
</script>

<div class="flex flex-col justify-center items-center w-full">
	{#if chordsInScale}
		<h2 class="text-[#f99f14] text-[36px] text-center mt-4">Chords in scale {$page.params.slug}</h2>
		<div class="flex flex-col md:flex-row justify-center items-center gap-4 md:mt-20 w-full">
			{#each chordsInScale as chord}
				<div
					class="flex justify-center items-center bg-[#f99f14] rounded-lg shadow-lg hover:bg-[#f5b553] transition-colors w-full h-[100px]"
				>
					<p class="text-[24px]">{chord}</p>
				</div>
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
