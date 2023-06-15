<script>
	import Guitar from '$assets/svg/Guitar.svelte';
	import { routes } from '$consts/routes';
	import '../tailwind.css';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
</svelte:head>

<header class="flex items-center justify-center w-full h-14 bg-black">
	<div class="flex justify-center md:justify-start max-w-7xl mx-auto w-full">
		<a href={routes.homepage}>
			<Guitar className="w-12 h-12 fill-slate-200" />
		</a>
	</div>
</header>
<div class="max-w-7xl mx-auto px-4 pt-4">
	<slot />
</div>
