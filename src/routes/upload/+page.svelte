<form on:submit|preventDefault={onsubmit}>
	<input name="image" type="file" accept="image/png,image/jpg">

	<button>
		Upload
	</button>
</form>

<script lang="ts">
	import { client } from '$utils/sanity'

	function onsubmit(e: Event) {
		const form = e.target as HTMLFormElement
		const formData = new FormData(form)

		const image = formData.get('image') as File

		try {
			client.assets
				.upload('image', image, {
					filename: image.name,
					contentType: image.type
				})
				.then(document => {
					console.log(document)

					client
						.patch('jewelCase')
						.setIfMissing({ uploads: [] })
						.insert('after', 'uploads[-1]', [{
							_type: 'image',
							asset: {
								_type: 'reference',
								_ref: document._id
							}
						}])
						.commit({ autoGenerateArrayKeys: true })
						.then(() => {
							form.reset()
						})
				})
				.catch(error => console.error('error', error))
		} catch (error) {
			console.log('nope', error)
		}
	}
</script>
