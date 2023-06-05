<header class="fixed text-center text-wave">
	<time class="text-5xl" datetime={time}>{time}</time>
	<h1 class="text-xl">Vibes Machine</h1>
</header>

<style>
	header {
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		scale: .8 1;
	}
</style>

<script lang="ts">
	const { format } = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true,
	})

	let time = format(new Date())

	setInterval(() => {
		time = format(new Date())
	}, 1000)
</script>
