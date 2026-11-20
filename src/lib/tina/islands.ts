import PageLayoutProxy from '@src/layouts/PageLayoutProxy.astro';
import ProjectLayoutProxy from '@src/layouts/ProjectLayoutProxy.astro';
import type { QueryResult } from '@tinacms/astro/data';
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { PageQuery, ProjectQuery } from '../../../tina/__generated__/types';
import { getPage, getProject } from './data';

export const islands: IslandRegistry = {
    page: {
        fetch: (_request, params) => getPage(params.get('slug') ?? 'home'),
        component: PageLayoutProxy,
        wrapper: { tag: 'article' },
        propsFromData: (data) => ({
            data: (data as QueryResult<PageQuery>).data?.page,
        }),
    },
    project: {
        fetch: (_request, params) => getProject(params.get('slug') ?? ''),
        component: ProjectLayoutProxy,
        wrapper: { tag: 'article' },
        propsFromData: (data) => ({
            data: (data as QueryResult<ProjectQuery>).data?.project,
        }),
    },
};
