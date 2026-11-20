import type { Template } from 'tinacms';

export const VideoTemplate: Template = {
    name: 'VideoBlock',
    label: 'Video',
    fields: [
        { name: 'src', label: 'Src', type: 'string', required: true },
    ],
};