<script lang="ts">
	import Guitar from '$assets/svg/Guitar.svelte';
	import CategoryTile from '$components/atoms/CategoryTile.svelte';
	import { routes } from '$consts';
	import type { DurSound, MollSound } from '$types';

	export let sounds: DurSound[] | MollSound[] | undefined;
	export let title: string;
</script>

{#if sounds}
	<div class="flex flex-col items-center gap-3">
		<h2 class="text-center text-[24px]">{title}</h2>
		{#each sounds as sound}
			<CategoryTile url={`${routes.soundOnScale}/${sound}`} title={sound}>
				<Guitar className="w-10 h-7" />
			</CategoryTile>
		{/each}
	</div>
{/if}
