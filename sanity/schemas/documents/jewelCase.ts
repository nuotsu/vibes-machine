import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'jewelCase',
	title: 'Jewel Case',
	type: 'document',
	liveEdit: true,
	fields: [
		defineField({
			name: 'uploads',
			type: 'array',
			of: [{ type: 'image' }]
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Jewel Case',
		})
	}
})
