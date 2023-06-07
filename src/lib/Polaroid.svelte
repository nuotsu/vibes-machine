<figure class="w-[200px] bg-white p-3 rounded-sm shadow-real">
	<button
		class="w-full aspect-[1.8/2] bg-black rounded-sm overflow-hidden glare"
		on:click={() => on = !on}
	>
		{#if on && typeof navigator !== 'undefined' && ('mediaDevices' in navigator)}
			{#await navigator.mediaDevices.getUserMedia({ video: true }) then stream}
				<video
					class="-scale-x-100 aspect-[inherit] object-cover"
					autoplay muted crossorigin="anonymous"
					use:setStream={stream}
				/>
			{/await}
		{/if}
	</button>

	<figcaption
		class="cursor-text mt-2 font-handwritten text-center leading-none outline-none"
		contenteditable spellcheck={false}
	/>
</figure>

<script lang="ts">
	let analyzer: AudioAnalysis.Analyzer
	let on: boolean = false

	function setStream(node: HTMLVideoElement, stream: MediaStream | null) {
		if (!node || !stream) return

		node.srcObject = stream

		return {
			update(newStream: MediaStream) {
				if (node.srcObject !== newStream) {
					node.srcObject = newStream
				}
			},
			destroy() {
				node.srcObject = null
			},
		}
	}
</script>
