<Draggable>
	<RecordPlayer/>
</Draggable>

<Draggable>
	<Polaroid/>
</Draggable>

<Draggable>
	<JewelCase />
</Draggable>
<Draggable>
	<JewelCase index={1} />
</Draggable>
<Draggable>
	<JewelCase index={0} />
</Draggable>

<Draggable>
	<MixTape/>
</Draggable>

<Title/>
<Shadows/>

<script lang="ts">
	import Draggable from '$lib/Draggable.svelte'
	import RecordPlayer from '$lib/RecordPlayer.svelte'
	import Polaroid from '$lib/Polaroid.svelte'
	import JewelCase from '$lib/JewelCase.svelte'
	import MixTape from '$lib/MixTape.svelte'
	import Title from '$lib/Title.svelte'
	import Shadows from '$lib/Shadows.svelte'
</script>
