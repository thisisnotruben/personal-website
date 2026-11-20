import type { Template } from 'tinacms';

export const ImgCarouselTemplate: Template = {
    name: 'ImgCarouselBlock',
    label: 'Image carousel',
    fields: [
        { name: 'idSet', label: 'Id Set', type: 'string', required: true, list: true },
    ],
};