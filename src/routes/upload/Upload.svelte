<form on:submit|preventDefault={onsubmit}>
	<label for="image">
		<input
			id="image"
			name="image"
			type="file" accept="image/png,image/jpg"
			required hidden
			disabled={status === 'complete'}
			on:change={onchange}
		/>

		<div class="uploader cursor-pointer grid place-content-center aspect-square w-[200px] windows-invert bg-sand">
			<p>Click to upload</p>

			{#if src}
				<img class="aspect-square w-full object-cover" {src} alt="" />
			{/if}
		</div>
	</label>

	<hr>

	<p class="text-right">
		{#if status === 'initial'}
			<button class="button" disabled={!src} type="submit">Upload</button>
		{:else if status === 'uploading'}
			<button class="button" disabled>Uploading...</button>
		{:else if status === 'complete'}
			<span class="button !border-transparent">Uploaded!</span>
		{/if}
	</p>
</form>

<style>
	.uploader > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
</style>

<script lang="ts">
	import { clientWithToken } from '$utils/sanity'

	let src: string | undefined
	let status: Status = 'initial'

	type Status = 'initial' | 'uploading' | 'complete'

	function onchange(e: Event) {
		const [file] = (e.target as HTMLInputElement).files || []
		if (!file) return

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			src = reader.result as string
		}
	}

	function onsubmit(e: Event) {
		status = 'uploading'

		const form = e.target as HTMLFormElement
		const formData = new FormData(form)
		const image = formData.get('image') as File

		clientWithToken.assets
			.upload('image', image, { filename: image.name, contentType: image.type })
			.then(document => {
				clientWithToken
					.patch('database')
					.setIfMissing({ jewelCase: [] })
					.insert('before', 'jewelCase[0]', [{
						_type: 'image',
						asset: { _type: 'reference', _ref: document._id }
					}])
					.commit({ autoGenerateArrayKeys: true })
					.then(() => {
						form.reset()
						src = undefined
						status = 'complete'
					})
			})
			.catch(error => console.error('error', error))
	}
</script>
