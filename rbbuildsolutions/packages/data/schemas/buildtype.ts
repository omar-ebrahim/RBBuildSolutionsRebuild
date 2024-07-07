import { defineField, defineType } from "sanity";

export const BUILD_TYPE_DOCUMENT_TYPE = "buildType";

export const BuildType = defineType({
    name: BUILD_TYPE_DOCUMENT_TYPE,
    type: 'document',
    title: 'Build Type',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required')
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required().error('Slug is required')
        }),
        defineField({
            title: "Description",
            name: "description",
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required().error('Description is required')
        })
    ]
});
