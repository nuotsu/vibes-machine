<figure class="w-[200px] bg-white p-3 pb-0 rounded-sm shadow-real">
	<button
		class="block w-full aspect-[1.8/2] bg-black/5 rounded-sm overflow-hidden shadow-inner glare"
		on:click={() => on = !on}
	>
		{#if on && typeof navigator !== 'undefined' && ('mediaDevices' in navigator)}
			{#await navigator.mediaDevices.getUserMedia({ video: { frameRate: 5 }}) then stream}
				<video
					class="block w-full aspect-[inherit] object-cover -scale-x-100 anim-colorize"
					autoplay muted crossorigin="anonymous"
					use:setStream={stream}
				/>
			{/await}
		{/if}
	</button>

	<textarea
		class="cursor-text mt-2 font-handwritten text-center leading-tight outline-none"
		rows={2} maxlength={50} spellcheck={false}
	></textarea>
</figure>

<style>
	.anim-colorize {
		animation: colorize 15s ease-out forwards;
	}

	@keyframes colorize {
		from {
			opacity: 0;
			filter: grayscale(1);
		}
		to {
			opacity: 1;
			filter: grayscale(.35) sepia(.1) hue-rotate(-10deg);
		}
	}

	textarea {
		resize: none;
	}
</style>

<script lang="ts">
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
