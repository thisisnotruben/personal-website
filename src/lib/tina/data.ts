import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';


export const getConfig = () =>
    requestWithMetadata(client.queries.config({ relativePath: 'config.json' }));

export const getPage = (slug: string) =>
    requestWithMetadata(client.queries.page({ relativePath: `${slug}.mdx` }), { priority: 'primary' });


export async function listPages() {
    const result = await client.queries.pageConnection();
    return (result.data.pageConnection.edges ?? [])
        .flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export type CmsConfig = Awaited<ReturnType<typeof getConfig>>['data']['config'];
export type CmsPage = Awaited<ReturnType<typeof getPage>>['data']['page'];