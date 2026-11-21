import type { Template } from 'tinacms';

export const CardTableTemplate: Template = {
    name: 'CardTableBlock',
    label: 'Card Table',
    fields: [
        { name: 'id', label: 'Image ID', type: 'string', required: true },
        { name: 'thumbnail', label: 'Render thumbmail?', type: 'boolean', required: true },
        { name: 'float', label: 'Float', type: 'string', options: ['left', 'right'], required: true },
        {

            name: 'entry', label: 'Entry', type: 'object', required: true, list: true, fields: [
                { name: 'key', label: 'Key', type: 'string', required: true },
                {
                    name: 'value', label: 'Value', type: 'object', required: true, fields: [
                        { name: 'text', label: 'Text', type: 'string', required: true },
                        { name: 'isLink', label: 'Is link?', type: 'boolean', required: true },
                        { name: 'link', label: 'Link', type: 'string' },
                    ]
                },
            ]
        }
    ],
};