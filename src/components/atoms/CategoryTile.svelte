<script lang="ts">
	export let title = '';
	export let url = '';
</script>

<div
	class="flex justify-center items-center w-full h-40 bg-mainColor rounded-lg shadow-lg hover:bg-[#f5b553] transition-colors md:w-[200px]"
>
	{#if url}
		<a
			data-sveltekit-preload-data="tap"
			class="flex flex-col justify-center items-center gap-2 w-full h-full"
			href={url}
		>
			{#if title}<h3 class="text-[32px]">{title}</h3> {/if}
			<slot />
		</a>
	{:else}
		{#if title}<h3 class="text-[32px]">{title}</h3> {/if}
		<slot />
	{/if}
</div>
