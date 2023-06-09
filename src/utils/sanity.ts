import { createClient } from '@sanity/client'

export const client = createClient({
	projectId: 'nodz2d6m',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-06-08',
})
