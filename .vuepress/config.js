const path = require('path')
module.exports = {
  title: '前端练习',
  base: '/fe/',
  description: '日常练习',
  configureWebpack: (config, isServer) => {
    config.resolveLoader.modules.push(path.resolve(__dirname, './loaders'))
    config.module.rules.push({
      test: /DemoAndCode\.vue$/,
      enforce: 'pre',
      use: {
        loader: 'fix-demo-code-loader',
      },
    })
  },
  plugins: [
    [
      'code-doc',
      {
        showText: '显示代码',
        hideText: '隐藏代码',
        minHeight: 0,
        onlineBtns: { codepen: true, jsfiddle: false, codesandbox: false },
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'CSS',
        link: '/css/',
      },
    ],
    sidebar: {
      '/css/': [
        {
          title: 'CSS练习',
          children: ['', 'switch/', 'button/', 'scroll/'],
        },
      ],
      // '/': ['']
    },
  },
}
