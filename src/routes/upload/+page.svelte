<svelte:head>
	<meta name="theme-color" content={bgColor}>
</svelte:head>

<main class="p-1 grid place-content-center min-h-screen" style:background-color={bgColor}>
	<section class="grid gap-2 p-1 windows shadow-real">
		<h2 class="px-2 bg-gradient-to-r from-wave to-hot text-white">
			Upload album cover
		</h2>

		<Upload/>
	</section>
</main>

<script>
	import Upload from './Upload.svelte'

	const bgColor = '#008080'
</script>
