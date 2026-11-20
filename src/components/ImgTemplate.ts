import type { Template } from 'tinacms';

export const ImgTemplate: Template = {
    name: 'ImgBlock',
    label: 'Image',
    fields: [
        { name: 'id', label: 'Id', type: 'string', required: true },
    ],
};