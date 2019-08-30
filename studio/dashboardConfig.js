export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6906f50c2e3205abc25df1',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio',
                  apiId: 'd6dec757-1f2b-4a6c-825e-dfbcffe8ca88'
                },
                {
                  buildHookId: '5d6906f556e20f19d9013d3a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog',
                  apiId: 'eb80d1b1-a8c4-4d72-817f-df3ddf6cf6a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
