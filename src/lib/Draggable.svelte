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
	on:mousedown={() => moving = true}
	bind:this={root}
>
	<slot></slot>
</draggable-element>

<style>
	.moving {
		cursor: grabbing;
	}

	draggable-element.moving:active :global(button) {
		pointer-events: none;
	}
</style>

<script lang="ts">
	let
		left = Math.random() * 100,
		top = Math.random() * 100,
		moving = false,
		root: HTMLElement

	let minimum = 0

	function mousemove(e: MouseEvent) {
		if (!moving) return

		let movement = Math.abs(e.movementX) || Math.abs(e.movementY)
		minimum = Math.max(minimum, movement)

		left += e.movementX / window.innerWidth * 100
		top += e.movementY / window.innerHeight * 100
	}

	function mouseup(e: MouseEvent) {
		if ((e.target as HTMLElement).closest('draggable-element') !== root) return
		moving = false
		minimum = 0
	}

	function keyup(e: KeyboardEvent) {
		if (e.key !== 'Escape') return
		moving = false
		minimum = 0
	}
</script>
