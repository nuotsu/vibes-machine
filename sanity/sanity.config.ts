import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import structure from './src/structure'

export default defineConfig({
	name: 'default',
	title: 'Vibes Machine',

	projectId: 'nodz2d6m',
	dataset: 'production',

	plugins: [
		deskTool({ structure }),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
