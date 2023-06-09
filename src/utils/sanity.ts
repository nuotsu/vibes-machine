import { createClient } from '@sanity/client'
import { PUBLIC_SANITY_TOKEN } from '$env/static/public'

const config = {
	projectId: 'nodz2d6m',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-06-08',
}

export const client = createClient(config)

export const clientWithToken = createClient({
	...config,
	token: PUBLIC_SANITY_TOKEN,
})
