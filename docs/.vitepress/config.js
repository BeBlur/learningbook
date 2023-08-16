const our_sidebar = [
            {text: '目录',link: '/core/'},
            {text: 'web基础', link: '/core/basic/'},
            {text: 'nodejs与express', link: '/core/nodejs/'},
            {text: '渐进式Vue.js', link: '/core/vuejs/'},
            {text: 'React.js', link: '/core/reactjs/'}
        ]

module.exports = {
    title: "blurbow的前端笔记",
    themeConfig: {
        nav: [
            {text: "主页", link: '/'},
            {text: "关于我", link: '/about/'},
            {text: "联系我", link: '/contact/'},
        ],
        sidebar: {
            '/': our_sidebar,
            '/about/': our_sidebar,
            '/contact/': our_sidebar
        }
    }
}