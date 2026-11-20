import type { Template } from 'tinacms';

export const ImgCarouselTemplate: Template = {
	name: 'ImgCarouselBlock',
    label: 'Image carousel',
    fields: [
        {
            type: 'object', name: 'imageSet', label: 'Image Set', list: true,
            fields: [
                { name: 'src', label: 'Src', type: 'string', required: true },
                { name: 'alt', label: 'Alt', type: 'string', required: true },
            ],
        },
	],
};