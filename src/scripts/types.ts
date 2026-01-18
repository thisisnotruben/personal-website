import type { ImageMetadata } from "astro";

export type Project = {
    [key: string]: EntryData;
};

export type EntryData = {
    title: string;
    id: string;
    icon: ImageMetadata;
    table: Table;
};

export type Table = {
    [key: string]: string[] | EntryDataLink;
};

export type EntryDataLink = {
    link: string;
    text: string;
};

export type WebLink = {
    name: string;
    href: string;
    icon: any;
};
