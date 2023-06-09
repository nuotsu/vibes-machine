import type { Actions } from '@sveltejs/kit'
import { client } from '$utils/sanity'

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const image = formData.get('image') as File

		try {
			client.assets
				.upload('image', image, {
					filename: image.name,
					contentType: image.type
				})
				.then(console.log)
				.catch(error => console.error('error', error))
		} catch (error) {
			console.log('nope', error)
		}

		return {}
	}
} satisfies Actions
