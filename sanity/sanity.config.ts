import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import structure from './src/structure'

export default defineConfig({
	name: 'default',
	title: '📻 Vibes Machine',

	projectId: 'nodz2d6m',
	dataset: 'production',

	plugins: [
		deskTool({ structure }),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
		templates: templates => templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType))
	},

	document: {
		actions: (input, context) =>
			singletonTypes.includes(context.schemaType)
				? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
				: input,
	}
})

const singletonTypes = ['database']
