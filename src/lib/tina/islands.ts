import PageLayoutProxy from '@src/layouts/PageLayoutProxy.astro';
import type { QueryResult } from '@tinacms/astro/data';
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { PageQuery } from '../../../tina/__generated__/types';
import { getPage } from './data';

export const islands: IslandRegistry = {
    page: {
        fetch: (_request, params) => getPage(params.get('slug') ?? 'home'),
        component: PageLayoutProxy,
        wrapper: { tag: 'article' },
        propsFromData: (data) => ({
            data: (data as QueryResult<PageQuery>).data?.page,
        }),
    },
};
