export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eabb6d7a5e72adb95b113db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ux84g9gx',
                  apiId: 'aa8e04a9-778c-453e-9ec9-89b4d33cddd4'
                },
                {
                  buildHookId: '5eabb6d7102789324c85f990',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e4tfqhsm',
                  apiId: '864ab87d-e684-45a3-a6ba-0edd9a47a3ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sleepyauru/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e4tfqhsm.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
