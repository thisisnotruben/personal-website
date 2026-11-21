import type { Template } from 'tinacms';

export const CardTemplate: Template = {
    name: 'CardBlock',
    label: 'Card',
    fields: [
        { name: 'id', label: 'Image ID', type: 'string', required: true },
        { name: 'thumbnail', label: 'Render thumbmail?', type: 'boolean', required: true },
        { name: 'float', label: 'Float', type: 'string', options: ['left', 'right'], required: true },
        {
            name: 'caption', label: 'Caption', type: 'string', ui: {
                component: "textarea"
            }
        },
    ],
};