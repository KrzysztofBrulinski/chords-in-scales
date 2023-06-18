<script>
	import Guitar from '$assets/svg/Guitar.svelte';
	import { headerScrollThresholdInPx, routes } from '$consts';
	import DarkModeToggle from '$components/molecules/DarkModeToggle.svelte';
	import { isDarkMode } from '$stores/darkMode';
	import { timeFormatter } from '$utils/timeFormat';
	import { time } from '$stores/time';

	let scrollY = 0;
	$: formattedTime = timeFormatter.format($time);
</script>

<svelte:window bind:scrollY />
<header
	class={`flex items-center justify-center w-full h-14 
    ${$isDarkMode ? 'bg-black border-y border-y-mainColor' : 'bg-mainColor'}
    ${scrollY > headerScrollThresholdInPx ? 'fixed top-0' : ''}
    `}
>
	<div class="flex justify-between items-center px-6 max-w-7xl mx-auto w-full">
		<a href={routes.homepage}>
			<Guitar className="w-10 h-10 fill-white" />
		</a>
		<p class={`${$isDarkMode ? 'text-white' : 'text-black'}`}>Time: {formattedTime}</p>
		<DarkModeToggle />
	</div>
</header>
