import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'database',
	title: 'Database',
	type: 'document',
	liveEdit: true,
	fields: [
		defineField({
			name: 'jewelCase',
			type: 'array',
			of: [{ type: 'image' }]
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Database',
		})
	}
})
