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
			<line x1={i} x2={i} y1={height} y2={height - b - offset} stroke="currentColor" stroke-width={1} />
		{/each}
	</svg>

	<div slot="controls">
		<Fader label="Smoothing" max={1} bind:value={smoothingTimeConstant} step={0.01} />
		<Fader label="FFT" max={fftSizes.length - 1} bind:value={fftSizeIndex} output={fftSize} />
		<Fader label="Max (dB)" min={-150} max={0} bind:value={maxDecibels} />
		<Fader label="Min (dB)" min={-1000} max={0} bind:value={minDecibels} />
		<Fader label="Offset" min={height * -1} max={height} bind:value={offset} />
		<Fader label="Height" max={400} bind:value={height} />
	</div>
</AudioAnalyzer>

<script lang="ts">
	import AudioAnalyzer from './AudioAnalyzer.svelte'
	import Fader from './Fader.svelte'
	import { fftSizes } from '$types/AudioAnalysis'
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'

	export let
		analyzer: AudioAnalysis.Analyzer = writable(null),
		svgClassName: string | undefined = undefined,
		smoothingTimeConstant = 0.8,
		fftSizeIndex = 2,
		maxDecibels = 0,
		minDecibels = -2500,
		offset = -225,
		height = 30

	let data: number[] = []

	$: fftSize = fftSizes[fftSizeIndex]

	let interval = setInterval(() => {
		if (!$analyzer) return []

		$analyzer.fftSize = fftSize
		$analyzer.maxDecibels = maxDecibels
		$analyzer.minDecibels = minDecibels
		$analyzer.smoothingTimeConstant = smoothingTimeConstant

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
