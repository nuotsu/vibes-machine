<button class="relative block glare shadow-real" on:click={() => on = !on}>
	<img
		src="/assets/jewel-case.webp"
		alt=""
		draggable={false}
	/>

	<figure class="absolute inset-0 overflow-hidden mix-blend-hard-light">
		<img
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] -ml-1 mix-blend-darken"
			src="/assets/qrcode-upload.svg"
			alt="QR code"
		/>

		{#if on}
			{#await getAlbumCover() then src}
				<img
					transition:fly={{ x: -185, opacity: 1 }}
					class="relative w-full h-full object-cover"
					{src}
					alt=""
					draggable={false}
				/>
			{/await}
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
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition'
	import { client } from '$utils/sanity'
	import groq from 'groq'

	let on = true

	async function getAlbumCover() {
		return await client.fetch<string>(groq`
			*[_type == 'database'][0].jewelCase[0].asset->url
		`)
	}
</script>
