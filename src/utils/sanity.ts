import { createClient } from '@sanity/client'
import { PUBLIC_SANITY_TOKEN } from '$env/static/public'

export const client = createClient({
	projectId: 'nodz2d6m',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-06-08',
	token: PUBLIC_SANITY_TOKEN,
})
