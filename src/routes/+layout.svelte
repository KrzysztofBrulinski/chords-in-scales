<script>
	import '../tailwind.css';
	import '../app.css';
	import Header from '$components/organisms/Header.svelte';
	import { isDarkMode } from '$stores/darkMode';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />

	{#if $isDarkMode}
		<style>
			body {
				background: #5d5d5d;
			}
		</style>
	{/if}
</svelte:head>

<Header />
<div class="w-full h-full max-w-7xl mx-auto px-9 pt-4">
	<slot />
</div>
