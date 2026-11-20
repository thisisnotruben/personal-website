import { ImgCarouselTemplate } from '@src/components/ImgCarouselTemplate';
import { ImgTemplate } from '@src/components/ImgTemplate';
import { PageNavTemplate } from '@src/components/PageNavTemplate';
import { VideoTemplate } from '@src/components/VideoTemplate';
import { defineConfig } from 'tinacms';

const blocks = [ImgCarouselTemplate, ImgTemplate, PageNavTemplate, VideoTemplate,]

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main';

export default defineConfig({
    branch,
    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    // Uncomment to allow cross-origin requests from non-localhost origins
    // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
    // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
    // server: {
    //   allowedOrigins: ['https://your-codespace.github.dev'],
    // },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public',
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
    schema: {
        collections: [
            {
                name: 'config',
                label: 'Config',
                path: 'content/config',
                format: 'json',
                ui: {
                    global: true
                },
                fields: [
                    {
                        name: 'siteName',
                        label: 'Site Name',
                        type: 'string',
                        required: true
                    },
                    {
                        name: 'nav',
                        label: 'Nav',
                        type: 'object',
                        list: true,
                        ui: {
                            itemProps: (item) => {
                                return {
                                    label: item.title
                                };
                            },
                        },
                        fields: [
                            {
                                name: 'title',
                                label: 'Link title',
                                type: 'string',
                                required: true,
                            },
                            {
                                name: 'href',
                                label: 'Href',
                                type: 'string',
                                required: true,
                            },
                            {
                                name: 'icon',
                                label: 'Icon',
                                type: 'image',
                                required: true,
                            },
                        ]
                    },
                    {
                        name: 'footer',
                        label: 'Footer',
                        type: 'object',
                        list: true,
                        ui: {
                            itemProps: (item) => {
                                return {
                                    label: item.title
                                };
                            },
                        },
                        fields: [
                            {
                                name: 'title',
                                label: 'Link title',
                                type: 'string',
                                required: true,
                            },
                            {
                                name: "href",
                                label: "Href",
                                type: "string",
                                required: true,
                            },
                            {
                                name: 'icon',
                                label: 'Icon',
                                type: 'image',
                                required: true,
                            },
                        ],
                    },

                ],
            },
            {
                name: 'page',
                label: 'Page',
                path: 'content/page',
                format: 'mdx',
                ui: {
                    router: ({ document }) => document._sys.filename === 'home'
                        ? '/'
                        : `/${document._sys.filename}`,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'cover',
                        label: 'Cover (External URL)',
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                        templates: blocks
                    },
                ],
                defaultItem: () => ({
                    cover: '',
                }),
            },
            {
                name: 'projects',
                label: 'Projects',
                path: 'content/projects',
                format: 'mdx',
                ui: {
                    router: ({ document }) => `/projects/${document._sys.filename}`,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        ui: {
                            component: 'textarea',
                        }
                    },
                    {
                        type: 'string',
                        name: 'cover',
                        label: 'Cover (External URL)',
                    },
                    {
                        type: 'string',
                        name: 'thumbnail',
                        label: 'Thumbnail (External URL)',
                    },
                    {
                        type: 'boolean',
                        name: 'published',
                        label: 'Published',
                    },
                    {
                        type: 'datetime',
                        name: 'published_date',
                        label: 'Published Date',
                        ui: {
                            dateFormat: 'YYYY-MM-DD',
                        }
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                        templates: blocks
                    }
                ],
                defaultItem: () => ({
                    cover: '',
                    thumbnail: '',
                    published: false,
                    published_date: new Date(),
                }),
            },
            {
                name: 'blog',
                label: 'Blog',
                path: 'content/blog',
                format: 'mdx',
                ui: {
                    router: ({ document }) => `/blog/${document._sys.filename}`,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'category',
                        label: 'Category',
                        options: ['Travel', 'Thoughts', 'Misc',]
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        ui: {
                            component: 'textarea',
                        }
                    },
                    {
                        type: 'string',
                        name: 'cover',
                        label: 'Cover (External URL)',
                    },
                    {
                        type: 'string',
                        name: 'thumbnail',
                        label: 'Thumbnail (External URL)',
                    },
                    {
                        type: 'boolean',
                        name: 'published',
                        label: 'Published',
                    },
                    {
                        type: 'datetime',
                        name: 'published_date',
                        label: 'Published Date',
                        ui: {
                            dateFormat: 'YYYY-MM-DD'
                        }
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                        templates: blocks
                    },
                ],
                defaultItem: () => ({
                    cover: '',
                    thumbnail: '',
                    published: false,
                    published_date: new Date(),
                }),
            },

        ],
    },

});
