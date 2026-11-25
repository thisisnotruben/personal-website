import BlogLayoutProxy from '@src/layouts/BlogLayoutProxy.astro';
import PageLayoutProxy from '@src/layouts/PageLayoutProxy.astro';
import ProjectLayoutProxy from '@src/layouts/ProjectLayoutProxy.astro';
import type { QueryResult } from '@tinacms/astro/data';
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { BlogQuery, PageQuery, ProjectsQuery } from '../../../tina/__generated__/types';
import { getBlog, getPage, getProject } from './data';

export const islands: IslandRegistry = {
    page: {
        fetch: (_request, params) => getPage(params.get('slug') ?? 'home'),
        component: PageLayoutProxy,
        wrapper: { tag: 'article' },
        propsFromData: (data) => ({
            data: (data as QueryResult<PageQuery>).data?.page,
        }),
    },
    projects: {
        fetch: (_request, params) => getProject(params.get('slug') ?? ''),
        component: ProjectLayoutProxy,
        wrapper: { tag: 'article' },
        propsFromData: (data) => ({
            data: (data as QueryResult<ProjectsQuery>).data?.projects,
        }),
    },
    blog: {
        fetch: (_request, params) => getBlog(params.get('slug') ?? ''),
        component: BlogLayoutProxy,
        wrapper: { tag: 'article' },
        propsFromData: (data) => ({
            data: (data as QueryResult<BlogQuery>).data?.blog,
        }),
    },
};
