<svelte:window
	on:mousemove={mousemove}
	on:mouseup={mouseup}
	on:keyup={keyup}
/>

<draggable-element
	class="absolute cursor-grab"
	style:left="{left}%"
	style:top="{top}%"
	on:mousedown={() => moving = true}
	bind:this={root}
>
	<slot></slot>
</draggable-element>

<script lang="ts">
	let
		left = Math.random() * 100,
		top = Math.random() * 100,
		moving = false,
		root: HTMLElement

	function mousemove(e: MouseEvent) {
		if (!moving) return

		left += e.movementX / window.innerWidth * 100
		top += e.movementY / window.innerHeight * 100
	}

	function mouseup(e: MouseEvent) {
		if ((e.target as HTMLElement).closest('draggable-element') !== root) return
		moving = false
	}

	function keyup(e: KeyboardEvent) {
		if (e.key !== 'Escape') return
		moving = false
	}
</script>
