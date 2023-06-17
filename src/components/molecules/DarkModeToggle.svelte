<script>
	import Moon from '$assets/svg/Moon.svelte';
	import Sun from '$assets/svg/Sun.svelte';
	import Toggle from '$components/atoms/Toggle.svelte';
	import { isDarkMode } from '$stores/darkMode';
</script>

<div class="flex items-center gap-2">
	{#if $isDarkMode}
		<Moon className="fill-white w-6 h-6" />
	{:else}
		<Sun className="w-7 h-7 invert" />
	{/if}
	<Toggle bind:isActive={$isDarkMode} />
</div>
