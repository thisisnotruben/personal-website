import type { Template } from 'tinacms';

export const ImgTemplate: Template = {
    name: 'ImgBlock',
    label: 'Image',
    fields: [
        { name: 'src', label: 'Src', type: 'string', required: true },
        { name: 'alt', label: 'Alt', type: 'string', required: true },
    ],
};