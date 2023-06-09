import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'jewelCase',
	title: 'Jewel Case',
	type: 'document',
	fields: [
		defineField({
			name: 'uploads',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						defineField({
							name: 'uploadDate',
							type: 'string',
						})
					]
				}
			]
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Jewel Case',
		})
	}
})
