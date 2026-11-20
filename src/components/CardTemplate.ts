import type { Template } from 'tinacms';

export const CardTemplate: Template = {
    name: 'CardBlock',
    label: 'Card',
    fields: [
        { name: 'id', label: 'Id', type: 'string', required: true },
    ],
};