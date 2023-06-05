<record-player class="relative grid w-[250px] p-2 aspect-square bg-mahogany rounded-lg shadow-real">
	<vinyl-record class="cursor-grab m-auto bg-leaf rounded-full shadow-real">
		<img
			class="brightness-[.4]"
			src="/assets/vinyl-record.webp"
			alt=""
			draggable={false}
		/>
	</vinyl-record>

	<img
		class="arm absolute top-[5%] right-[10%] h-1/2 brightness-50"
		src="/assets/vinyl-record-arm.webp"
		alt=""
		width={45} height={214}
		draggable="false"
	/>
</record-player>

<style>
	vinyl-record {
		clip-path: circle(48.5% at 50% 50%);
		animation: spin 3.45s linear infinite;
	}

	vinyl-record:active {
		cursor: grabbing;
		animation-play-state: paused;
	}

	@keyframes spin {
		to {
			rotate: 1turn;
		}
	}

	.arm {
		transform-origin: 60% 5%;
		transition: rotate 0.3s ease-in-out;
	}
	record-player:not(:hover) .arm {
		rotate: 5deg;
	}
</style>
