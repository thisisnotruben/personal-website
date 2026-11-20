import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';


export const getConfig = () =>
    requestWithMetadata(client.queries.config({ relativePath: 'config.json' }));

export const getPage = (slug: string) =>
    requestWithMetadata(client.queries.page({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getProject = (slug: string) =>
    requestWithMetadata(client.queries.projects({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getBlog = (slug: string) =>
    requestWithMetadata(client.queries.blog({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export async function listPages() {
    const result = await client.queries.pageConnection();
    return (result.data.pageConnection.edges ?? [])
        .flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export async function listProjects() {
    const result = await client.queries.projectsConnection();
    return (result.data.projectsConnection.edges ?? [])
        .flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export async function listBlogs() {
    const result = await client.queries.blogConnection();
    return (result.data.blogConnection.edges ?? [])
        .flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export type CmsConfig = Awaited<ReturnType<typeof getConfig>>['data']['config'];
export type CmsPage = Awaited<ReturnType<typeof getPage>>['data']['page'];
export type CmsProject = Awaited<ReturnType<typeof getProject>>['data']['projects'];
export type CmsBlog = Awaited<ReturnType<typeof getBlog>>['data']['blog'];