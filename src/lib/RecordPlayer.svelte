<record-player class="relative grid w-[250px] p-2 aspect-square bg-mahogany rounded-lg shadow-real">
	<vinyl-record
		class="cursor-grab m-auto bg-leaf rounded-full shadow-real"
		class:spin={Math.abs(spin) <= 2}
		style:rotate="{-spin}deg"
		on:wheel={cue}
	>
		<img
			class="brightness-[.4]"
			src="/assets/vinyl-record.webp"
			alt=""
			draggable={false}
		/>
	</vinyl-record>

	<img
		class="arm absolute top-[5%] right-[10%] h-[120px] brightness-50"
		src="/assets/vinyl-record-arm.webp"
		alt=""
		width={45} height={214}
		draggable="false"
	/>

	<div class="grid grid-cols-2 p-1 gap-1 mt-2 bg-black rounded">
		<Frequency svgClassName="w-full text-white rounded-sm" />
		<TimeDomain svgClassName="w-full text-white rounded-sm" />
	</div>
</record-player>

<style>
	vinyl-record {
		clip-path: circle(48.5% at 50% 50%);
	}

	.spin {
		animation: spin 3.45s linear infinite;
	}

	vinyl-record:active {
		cursor: grabbing;
		animation-play-state: paused;
	}

	@keyframes spin {
		to { rotate: 1turn; }
	}

	.arm {
		transform-origin: 60% 5%;
		transition: rotate 0.3s ease-in-out;
	}

	vinyl-record:not(:hover) + .arm {
		rotate: 12deg;
	}
</style>

<script lang="ts">
	import Frequency from './audio/Frequency.svelte'
	import TimeDomain from './audio/TimeDomain.svelte'

	let spin: number = 0

	function cue(e: WheelEvent) {
		spin = e.deltaX || e.deltaY
	}
</script>
