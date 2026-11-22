import type { Template } from "tinacms";

export const codeBlockTemplate: Template = {
    name: "CodeBlock",
    label: "Code Block",
    fields: [
        {
            type: "string",
            name: "language",
            label: "Language",
            options: ["typescript", "bash", "json", "python", "java"],
        },
        {
            type: "string",
            name: "code",
            label: "Code",
            ui: {
                component: "textarea",
            },
        },
    ],
};