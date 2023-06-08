<button class="relative block glare shadow-real" on:click={() => on = !on}>
	<img
		src="/assets/jewel-case.webp"
		alt=""
		draggable={false}
	/>

	{#if on}
		<img
			class="album-cover absolute inset-0 w-full h-full object-cover"
			src="/assets/album-cover.webp"
			alt=""
			draggable={false}
		/>
	{/if}
</button>

<style>
	button {
		width: 200px;
	}

	.album-cover {
		padding: 2.5px 2.5px 1.5px 22px;
		mix-blend-mode: hard-light;
	}
</style>

<script lang="ts">
	let on = true
</script>
