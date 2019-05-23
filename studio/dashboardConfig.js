export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ce6c052afaf53b967c21f11',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-72siovq8',
                  apiId: '4a9bda64-0ec5-45e0-acff-afb507a5716f'
                },
                {
                  buildHookId: '5ce6c052416da8f456479532',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f9v12snr',
                  apiId: '2cb00c7f-67c1-458c-8324-65cca82e9f26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nedzen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f9v12snr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
