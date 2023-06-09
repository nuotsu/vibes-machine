<button class="relative block glare shadow-real" on:click={() => on = !on}>
	<img
		src="/assets/jewel-case.webp"
		alt=""
		draggable={false}
	/>

	<figure class="absolute inset-0 overflow-hidden">
		<img
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] -ml-1 mix-blend-darken"
			src="/assets/qrcode-upload.svg"
			alt="QR code"
		/>

		{#if on}
			<img
				transition:fly={{ x: -185, opacity: 1 }}
				class="relative w-full h-full object-cover"
				src="/assets/album-cover.webp"
				alt=""
				draggable={false}
			/>
		{/if}
	</figure>
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
