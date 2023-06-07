<figure class="relative">
	{#if typeof navigator !== 'undefined' && ('mediaDevices' in navigator)}
		{#await navigator.mediaDevices.getUserMedia({ audio: true }) then stream}
			<audio use:setStream={stream} autoplay muted crossorigin="anonymous" hidden />

			<slot></slot>

			{#if controls}
				<div class="absolute py-2 bg-white">
					<slot name="controls"></slot>
				</div>
			{/if}
		{/await}
	{/if}
</figure>

<script lang="ts">
	export let
		analyzer: AudioAnalysis.Analyzer,
		controls = false

	function setStream(node: HTMLAudioElement, stream: MediaStream | null) {
		if (!node || !stream) return

		node.srcObject = stream

		let audioCtx = new AudioContext()

		$analyzer = audioCtx.createAnalyser()
		$analyzer.connect(audioCtx.destination)

		audioCtx
			.createMediaStreamSource(stream)
			.connect($analyzer)

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
