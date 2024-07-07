import { defineField, defineType } from "sanity";
import { BUILD_TYPE_DOCUMENT_TYPE } from './buildType'

export const Project = defineType({
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: "Job Type",
            name: 'jobType',
            type: 'reference',
            to: [{ type: BUILD_TYPE_DOCUMENT_TYPE }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            title: "Completed",
            name: 'completed',
            type: 'date',
        }),
        defineField({
            title: "Description",
            name: "description",
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            title: 'Featured Image',
            name: 'featuredImage',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    validation: Rule => Rule.required().error('Alt is required for the featured image.')
                })
            ],
            validation: Rule => Rule.required()
        }),
        defineField({
            title: 'Image gallery',
            name: 'imageGallery',
            type: 'array',
            of: [{
                type: 'image',
                fields: [
                    defineField({
                        name: 'alt',
                        type: 'string',
                        validation: Rule => Rule.required().error('Alt is required for the featured image.')
                    })
                ],
            }]
        })
    ]
})