module.exports = {

//        webroot (req)
  rootNotionPageId:                     '5f0f9195923a47c980a3a8ecfe2fee81',

//        limit 1 notion space
//        Notion ID; see  /nfo
  rootNotionSpaceId:                    null,

//        core site info (req)
  name:                                 'Notion Blog',
  domain:                               'jcahill.github.io',
  author:                               'J C',

//        open graph metadata
  description:                          'Notion Blog',
  socialImageTitle:                     'Notion Blog',
  socialImageSubtitle:                  'Notion Blog 👋',

//        social handles, no @
  twitter:                              '',
  github:                               '',
  linkedin:                             '',

//        site-wide elements
//        page-specific values
//        override the default
  defaultPageIcon:                      null,
  defaultPageCover:                     null,
  defaultPageCoverPosition:             0.5,

//        image CDN proxy host
//        requires image proxy
  imageCDNHost:                         null,

//        GitHub issue comment
  utterancesGitHubRepo:                 null,

//        support LQIP preview
//        requires GC Firebase
//        see .env.example
  isPreviewImageSupportEnabled:         false,

//   /path maps for page IDs
//   overrides default paths
//   example:
//
//   pageUrlOverrides: {
//     '/foo':                          '067dd719a912471ea9a3ac10710e7fdf',
//     '/bar':                          '0be6efce9daf42688f65c76b89f8eb27'
//   }

  pageUrlOverrides:                     null
}
