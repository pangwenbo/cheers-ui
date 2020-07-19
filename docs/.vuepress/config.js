module.exports = {
        base: "/cheers-ui/",
        title: "cheers-ui",
        description: 'cheers-ui使用文档',
        markdown: {
                lineNumbers: true
        },
        head: [
                ['link', {
                        rel: 'icon',
                        href: '/assets/img/logo.png'
                }],
                ['meta', {
                        name: 'keywords',
                        content: 'cheers-ui使用文档'
                }],
                ['meta', {
                        name: 'author',
                        content: '庞文博、钱华'
                }]
        ],
        logo: "/assets/img/logo.png",
        themeConfig: {
                nav: [{
                                text: '首页',
                                link: '/'
                        },
                        {
                                text: '文档',
                                link: '/cheers-ui'
                        },
                        {
                                text: '赞助',
                                link: '/zanzhu'
                        },
                        {
                                text: 'github',
                                link: 'https://github.com/pangwenbo/cheers-ui'
                        },
                ],
                sidebar: ['/cheers-form', '/cheers-table'],
                lastUpdated: '更新时间',
        }
}