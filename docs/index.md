---
# home: true
# sidebar: false
# footer: 
---
# 前端学习路线
<!-- ['❌','✅','🔥','⭐'] -->

<roadmap  :data="[
  { title:'前端路线图',x:400,y:20 ,download:true},
  { title:'✅HTML+CSS', y:130,link:'/fe/css.html',
    left:[
      ['HTML基础'],
      ['环境基本安装',[
        ['Vscode编辑器'],
        ['Chrome浏览器'],
      ]]
    ],right:[
      ['🔥常见布局'],
      ['🔥CSS基础',[
        ['选择器'],
        ['盒模型'],
        ['布局'],
        ['过渡和动画'],
      ]],
    ]
  } ,
  { title:'Javascript', link:'/fe/javascript.html',
    y:140,
    left:[
      ['✅语法入门',[
        ['ES6语法'],
        ['Dom'],
        ['🔥红宝书'],
        ['高频面试题'],
        ['Eloquent JavaScript'],
      ]],
    ],
    right:[
      ['JS设计模式'],
      ['🔥JS语法进阶',[
        ['作用域  闭包'],
        ['this   原型链'],
        ['Promise'],
        ['函数和递归'],
        ['面向对象'],
      ]]
    ]
  } ,
  { title:'🔥实战开发', link:'/fe/project.html',
   y:220,x:-162,
    left:[
      ['开发环境配置'],
      ['登录注册'],
      ['✅增删改查'],
      ['前后端交互'],
      ['✅Git代码管理'],
      ['调试代码'],
      ['✅和产品吵架'],
      ['(p)npm包管理'],
    ]
  },
  { title:'🔥面试', link:'/fe/interview.html',
    y:10,x:325,
    right:[
      ['✅如何写简历'],
      ['如何描述项目'],
      ['🔥如何谈钱'],
      ['✅高频面试题'],
      ['如何选择Offer'],
      ['如何离职'],
    ]
  } ,
  { title:'✅网站搭建',x:-162,y:170,link:'/fe/server.html',
    left:[
      ['购买云机器'],
      ['购买域名'],
      ['nginx配置'],
      ['Linux'],
    ],
    right:[
      ['Vuepress'],
      ['❌Vitepress'],
      ['Dumi'],
      ['Gastby'],
    ]
  } ,
  { title:'进阶之路',y:100,
  } ,
  { title:'🔥Vue3',y:100,link:'/fe/vue.html',
    left:[
      ['入门',[-50],[
        ['清单应用'],
        ['模板语法'],
        ['组件基础'],
        ['表单'],
        ['Composition'],
        ['<script setup>'],
      ]],
      ['✅项目实战',[140],[
        ['Vuex Pinia'],
        ['vue-router'],
        ['单元测试'],
        ['JSX'],
        ['性能优化'],
        ['use工具库'],
        ['权限路由'],
        ['开发规范'],
        ['SSR框架Nuxt'],
      ]],
    ],
    right:[
      ['组件化设计',[-50],[
        ['组件库推荐'],
        ['组件三要素'],
        ['基础组件'],
        ['表单组件'],
        ['弹窗组件'],
        ['表格组件'],
        ['组件文档'],
      ]],
      ['🔥源码',[140],[
        ['Vue3新特性'],
        ['响应式原理'],
        ['虚拟Dom'],
        ['Runtime'],
        ['Compiler优化'],
        ['Vue-router源码'],
        ['Vite源码'],
      ]],
    ]
  } ,
  {title:'🔥框架设计理念',link:'/fe/vue.html',
  y:280,
    left:[
      ['编译Compiler'],
      ['运行时Runtime'],
      ['template JSX'],
      ['响应式'],
    ],
    right:[
      ['Angular'],
      ['Svelte'],
      ['Solidjs'],
    ]
  },
  { title:'🔥React',y:190,link:'/fe/react.html',
    left:[
      ['入门',[-50],[
        ['cra脚手架'],
        ['清单应用'],
        ['JSX'],
        ['Hooks'],
        ['表单'],
        ['Ant Design'],
      ]],
      ['项目实战',[120],[
        ['redux dva Umi'],
        ['react-router'],
        ['单元测试'],
        ['性能优化'],
        ['权限路由'],
        ['use工具库'],
        ['全栈框架Next.js'],
      ]],
    ],
    right:[
      ['组件化设计',[-50],[
        ['组件三要素'],
        ['基础组件'],
        ['表单组件'],
        ['弹窗组件'],
        ['表格组件'],
        ['组件文档'],
      ]],
      ['🔥源码',[120],[
        ['虚拟Dom'],
        ['Fiber'],
        ['Hooks'],
        ['Render'],
        ['Reconciler'],
        ['Concurrent'],
        ['React Router'],
      ]],
    ]
  } ,
  { title:'Typescript',y:310, link:'/fe/typescript.html',
    left:[
      ['基础类型'],
      ['Interface'],
      ['复合类型'],
      ['操作符',[
        ['keyof'],
        ['in'],
      ]],
      ['函数类型'],
    ],
    right:[
      ['Vue+TS'],
      ['React+TS'],
      ['🔥泛型<T>',[
        ['extends'],
        ['infer'],
        ['Partial'],
        ['Record'],
        ['Omit'],
      ]],
      ['网络接口类型'],
    ],
  } ,
  { title:'Node.js', y:200,link:'/fe/node.html',
    left:[
      ['Node入门'],
      ['✅Web开发',[
        ['Koa'],
        ['Eggjs'],
        ['Nest.js'],
      ]],
      ['文件流'],
      ['爬虫'],
    ],
    right:[
      ['数据库',[
        ['Mysql'],
        ['Mongodb'],
      ]],
      ['部署'],
      ['脚手架'],
      ['微前端'],
    ],
  } ,
  { title:'工程化', link:'/fe/fis.html',y:170,
    left:[
      ['初始化脚手架'],
      ['开发调试',[
        ['dev-server'],
        ['hmr'],
        ['mock'],
        ['proxy'],
      ]],
      ['🔥构建'],
      ['测试',[20],[
        ['Jest单元测试'],
        ['E2E测试'],
      ]],
    ],
    right:[
      ['⭐监控',[
        ['错误监控'],
        ['性能监控'],
      ]],
      ['发布'],
      ['安全',[
        ['XSS'],
        ['CSRF'],
      ]],
    ]
  } ,
  { title:'🔥项目实战', link:'/fe/arch.html',
    y:230,
    left:[
      [
        'CSS架构设计',[
          ['sass'],
          ['bem'],
          ['动态主题'],
        ],
      ],
      ['框架封装'],
      ['前后端规范'],
      ['项目规范设计',[
        ['eslint'],
        ['git规范'],
        ['开发流程规范'],
      ]],
    ],
    right:[
      ['技术选型'],
      ['项目亮点',[
        ['什么算亮点'],
        ['数据量大'],
        ['研发效率'],
        ['线上稳定'],
      ]],
    ]
  } ,
    { title:'性能优化', link:'/fe/perf.html',y:200,
    left:[
      ['🔥性能指标',[
        ['LCP'],
        ['TTI'],
        ['FP'],
      ]],
      ['lighthouse'],
      ['performance'],
    ],
    right:[
      ['🔥优化策略',[
        ['减少代码体积'],
        ['缓存'],
        ['代码执行效率'],
      ]],
      ['性能监控'],
    ]
  } ,
  { title:'🔥浏览器原理', link:'/fe/browser.html',y:140,x:-162,
    left:[
      ['URL到页面显示'],
      ['v8'],
      ['网络'],
      ['页面渲染'],
      ['JS执行逻辑'],
    ]
  } ,
  { title:'🔥计算机网络', link:'/it/internet.html',y:10,x:325,
    right:[
      ['互联网如何工作'],
      ['网络协议分层'],
      ['网络安全'],
      ['什么是HTTP'],
      ['什么是TCP'],
    ]
  } ,
  { title:'🔥算法和数据结构', link:'/it/algorithm.html',y:200,x:-162,
    left:[
      ['排序'],
      ['搜索'],
      ['二分'],
      ['递归'],
      ['回溯'],
      ['贪心算法'],
      ['动态规划'],
    ],
    right:[
      ['数组'],
      ['链表'],
      ['树'],
      ['堆栈'],
      ['图'],
      ['leetcode200题'],
      ['Vue中的算法'],
      ['React中的算法'],
    ]
  } ,
{ title:'软技能', link:'/it/soft.html',y:280,
    left:[
      ['职场',[
        ['🔥职场导师'],
        ['如何晋升'],
        ['✅沟通反馈'],
        ['偷懒是美德'],
        ['远程工作'],
      ]],
      ['🔥谈薪'],
      ['职业规划'],
        ['阿里黑话'],
      ['技术管理',[
        ['规划'],
        ['培养'],
      ]],
    ],
    right:[
        ['🔥成长',[0],[
        ['如何学习'],
        ['刻意练习'],
        ['读书'],
        ['快乐驱动'],
      ]],
      ['生活'],
      ['影响力'],
      ['英语'],
      ['T型人才',[
        ['产品经理'],
        ['运营'],
        ['销售'],
      ]],
      ['自由职业']
    ]
  },
  { title:'⭐小程序', link:'/fe/miniapp.html',y:230,
    left:[
      ['小程序入门',[
        ['开发工具'],
        ['wxml'],
        ['JS api'],
      ]],
      ['实战开发'],
      ['小程序进阶'],
      ['跨端框架',[
        ['Taro'],
        ['Uni-app'],
      ]],
    ],
    right:[
      ['云开发',[
        ['云函数'],['云数据库'],['云存储'],['云调用'],
      ]],
      ['支付'],
      ['小程序原理',[
        ['双线程通信'],
        ['渲染流程'],
      ]],
    ]
  } ,
  { title:'⭐App开发', link:'/fe/app.html',
    left:[
      ['React Native'],
      ['❌Weex'],
    ],
    right:[
      ['Flutter'],
      ['Electron'],
    ],
  } ,
  { title:'⭐热门技术', link:'/fe/hot.html',
    left:[
      ['Rust',[
        ['swc']
      ]],
      ['IDE'],
      ['智能化',[
        ['imgcook']
      ]],
    ],
    right:[
      ['可视化',[
        ['Echarts'],['Antv']
      ]],
      ['Web Assembly'],
      ['Go',[
        ['esbuild']
      ]],
      ['游戏',[
        ['小游戏'],
        ['cocos2D'],
      ]],
      ['智能化',[
        ['imgcook']
      ]],
    ],
  } ,
  {title:'终身成长'},
]"/>
<!-- https://mo.fish/ -->
<!-- https://duomoyu.com/ -->

