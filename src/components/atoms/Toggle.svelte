<script lang="ts">
	export let isActive = false;
	export let variant = 'md' as 'sm' | 'md' | 'lg';

	$: variants = {
		sm: `w-12 h-6 after:w-4 after:h-4 ${isActive ? 'after:ml-4' : ''}`,
		md: `w-16 h-8 after:w-6 after:h-6 ${isActive ? 'after:ml-6' : ''}`,
		lg: `w-24 h-12 after:w-10 after:h-10 ${isActive ? 'after:ml-10' : ''}`
	};
</script>

<button
	class={`relative bg-white rounded-3xl ${variants[variant]} after:bg-black after:transition-all after:block after:absolute after:rounded-full after:top-1 after:left-2`}
	on:click={() => (isActive = !isActive)}
/>
