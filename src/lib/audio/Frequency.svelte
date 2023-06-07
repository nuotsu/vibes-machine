<AudioAnalyzer {analyzer}>
	<svg
		class={svgClassName}
		style:min-width={fftSize / 2}
		width={fftSize/2}
		height={height}
		viewBox="0 0 {fftSize / 2} {height}"
		preserveAspectRatio="xMidYMin slice"
	>
		{#each data as b, i}
			<line x1={i} x2={i} y1={height} y2={height - b + 225} stroke="currentColor" stroke-width={1} />
		{/each}
	</svg>
</AudioAnalyzer>

<script lang="ts">
	import AudioAnalyzer from './AudioAnalyzer.svelte'
	import { fftSizes } from '$types/AudioAnalysis'
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'

	export let
		analyzer: AudioAnalysis.Analyzer = writable(null),
		svgClassName: string | undefined = undefined,
		height = 30

	let data: number[] = []

	$: fftSize = fftSizes[2]

	let interval = setInterval(() => {
		if (!$analyzer) return []

		$analyzer.fftSize = fftSize
		$analyzer.maxDecibels = 0
		$analyzer.minDecibels = -2500
		$analyzer.smoothingTimeConstant = 0.8

		const dataArray = new Uint8Array($analyzer.frequencyBinCount)
		$analyzer.getByteFrequencyData(dataArray)

		data = Array.from(dataArray)
	}, 20)

	onMount(() => {
		return () => {
			clearInterval(interval)
		}
	})
</script>
