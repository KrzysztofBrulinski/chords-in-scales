<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<div class="w-full h-40 bg-[#f99f14] rounded-lg shadow-lg hover:bg-[#f5b553] transition-colors">
	<a class="flex flex-col justify-center items-center gap-2 w-full h-full" href={url}>
		<h2 class="text-[32px]">{title}</h2>
		<slot />
	</a>
</div>
