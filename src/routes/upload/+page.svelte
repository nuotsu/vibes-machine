<form on:submit|preventDefault={onsubmit}>
	<input name="image" type="file" accept="image/png,image/jpg" required>
	<button>Upload</button>
</form>

<script lang="ts">
	import { clientWithToken } from '$utils/sanity'

	function onsubmit(e: Event) {
		const form = e.target as HTMLFormElement
		const formData = new FormData(form)
		const image = formData.get('image') as File

		clientWithToken.assets
			.upload('image', image, { filename: image.name, contentType: image.type })
			.then(document => {
				console.log(document)

				client
					.patch('database')
					.setIfMissing({ jewelCase: [] })
					.insert('after', 'jewelCase[-1]', [{
						_type: 'image',
						asset: { _type: 'reference', _ref: document._id }
					}])
					.commit({ autoGenerateArrayKeys: true })
					.then(() => {
						form.reset()
					})
			})
			.catch(error => console.error('error', error))
	}
</script>
