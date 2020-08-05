var CONST = require("./const");

module.exports = {
  title: 'Today I Learned',
  description: `Yunhwan's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
      //sidebar: 'auto',
      smoothScroll: true,
      sidebar: [
        {
          title: 'Book:자료구조 와 알고리즘 by C++',
          children: CONST.CppDataStructureAlgorithm
        },
        {
          title: 'ETC',
          children: CONST.ETCList
        }
        // ,{  // 새로운 것 추가시 이용
        //   title: 'ETC',
        //   collapsable: true,
        //   children: ['ETC/etc1']
        // }
      ],
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@limdongjin/vuepress-plugin-sidebar-on-off',
  ]
}
