<button class="relative block glare shadow-real" on:click={() => on = !on}>
	<img
		src="/assets/jewel-case.webp"
		alt=""
		draggable={false}
	/>

	{#if on}
		<figure class="absolute inset-0 overflow-hidden">
			<img
				transition:fly={{ x: -185, opacity: 1 }}
				class="w-full h-full object-cover"
				src="/assets/album-cover.webp"
				alt=""
				draggable={false}
			/>
		</figure>
	{/if}
</button>

<style>
	button {
		width: 200px;
	}

	figure {
		padding: 2.5px 2.5px 1.5px 0;
		left: 22px;
		mix-blend-mode: hard-light;
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition'

	let on = true
</script>
