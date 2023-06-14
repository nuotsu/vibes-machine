<button
	class="relative block glare shadow-real"
	on:click={enabled ? () => on = !on : undefined}
>
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

		{#if enabled && on}
			{#await getAlbumCover(true) then src}
				<img
					transition:fly={{ x: -185, opacity: 1, duration }}
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

	export let index: number | undefined = undefined

	const enabled = index !== undefined

	let on = true, current: string | undefined = undefined
	const duration = 500

	async function getAlbumCover(store = false) {
		const src = await client.fetch<string>(groq`
			*[_type == 'database'][0].jewelCase[$index].asset->url
		`, { index })

		if (store) current = src

		return src
	}

	setInterval(async () => {
		if (!on) return

		const src = await getAlbumCover()

		if (src !== current) {
			current = src
			on = false

			setTimeout(() => {
				on = true
			}, duration * 2)
		}
	}, 1000 * 5)
</script>
