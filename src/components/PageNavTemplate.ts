import type { Template } from 'tinacms';

export const PageNavTemplate: Template = {
    name: 'PageNavBlock',
    label: 'Page nav',
    fields: [
        {
            name: 'collectionRef',
            label: 'Collection Ref',
            type: 'string',
            required: true,
            options: ['projects', 'blog',],
        },
    ],
};