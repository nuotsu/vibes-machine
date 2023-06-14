<svelte:window
	on:mousemove={mousemove}
	on:mouseup={mouseup}
	on:keyup={keyup}
/>

<draggable-element
	class="absolute cursor-grab"
	class:moving={moving && minimum > 0}
	style:left="{left}%"
	style:top="{top}%"
	style:rotate="{rotate}deg"
	on:mousedown={() => moving = true}
	bind:this={root}
>
	<slot></slot>
</draggable-element>

<style>
	draggable-element {
		translate: -50% -50%;
		transition: rotate 0.1s;
	}

	.moving {
		cursor: grabbing;
		rotate: 0deg !important;
	}

	draggable-element.moving:active :global(button) {
		pointer-events: none;
	}
</style>

<script lang="ts">
	let
		root: HTMLElement,
		left = Math.random() * 80 + 10,
		top = Math.random() * 80 + 10,
		moving = false,
		minimum = 0,
		rotate = Math.random() * 8 - 4

	function mousemove(e: MouseEvent) {
		if (!moving) return

		let movement = Math.abs(e.movementX) || Math.abs(e.movementY)
		minimum = Math.max(minimum, movement)

		left += e.movementX / window.innerWidth * 100
		top += e.movementY / window.innerHeight * 100
	}

	function mouseup(e: MouseEvent) {
		if ((e.target as HTMLElement).closest('draggable-element') !== root) return
		drop()
	}

	function keyup(e: KeyboardEvent) {
		if (e.key !== 'Escape') return
		drop()
	}

	function drop() {
		if (minimum > 0) {
			rotate = Math.random() * 8 - 4
		}

		moving = false
		minimum = 0
	}
</script>
