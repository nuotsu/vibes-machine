<AudioAnalyzer {analyzer}>
	<svg
		class={svgClassName}
		style:min-width={fftSize / 2}
		width={fftSize / 2}
		height={height}
		viewBox="0 0 {fftSize / 2} {height}"
		preserveAspectRatio="none"
	>
		<polyline points={points} fill="none" stroke="currentColor" />
	</svg>

	<div slot="controls">
		<Fader label="FFT" max={fftSizes.length - 1} bind:value={fftSizeIndex} output={fftSize} />
		<Fader label="Height" max={1000} bind:value={height} />
		<Fader label="Factor" min={0.05} max={10} bind:value={factor} step={0.05} />
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
		svgClassName: string | null = null,
		fftSizeIndex = 2,
		height = 30,
		factor = 1.5

	$: fftSize = fftSizes[fftSizeIndex]

	let data: number[] = []

	let interval = setInterval(() => {
		if (!$analyzer) return []

		$analyzer.fftSize = fftSize

		const dataArray = new Uint8Array($analyzer.frequencyBinCount)
		$analyzer.getByteTimeDomainData(dataArray)

		data = Array.from(dataArray)
	}, 20)

	$: points = data.map((d, i) => `${i},${height/2 + (height/255 * d - height/2) * factor}`).join(' ')

	onMount(() => {
		return () => {
			clearInterval(interval)
		}
	})
</script>
