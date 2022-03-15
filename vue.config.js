module.exports = {
    pages: {
        index: {
            entry: "./src/views/index/main.js",
            template: "./src/views/index/index.html",
            filename: "index.html",
            title: "校园信息共享系统",
            faviconPath: "favicon.ico"
        },
        login: {
            entry: "./src/views/login/login.js", // 配置入口js文件
            template: "./src/views/login/login.html", // 主页面
            filename: "login.html", // 打包后的html文件名称
            title: "登录页面", // 打包后的html中<title>标签的文本内容
            faviconPath: "favicon.ico"
        },
        write: {
            entry: "./src/views/write/write.js", // 配置入口js文件
            template: "./src/views/write/write.html", // 主页面
            filename: "write.html", // 打包后的html文件名称
            title: "写文章", // 打包后的html中<title>标签的文本内容
            faviconPath: "favicon.ico"
        },
        home: {
            entry: "./src/views/home/home.js", // 配置入口js文件
            template: "./src/views/home/home.html", // 主页面
            filename: "home.html", // 打包后的html文件名称
            title: "主页", // 打包后的html中<title>标签的文本内容
            faviconPath: "favicon.ico"
        },
        article: {
            entry: "./src/views/article/article.js", // 配置入口js文件
            template: "./src/views/article/article.html", // 主页面
            filename: "article.html", // 打包后的html文件名称
            title: "文章",
            faviconPath: "favicon.ico"
        },
        ask: {
            entry: "./src/views/ask/ask.js", // 配置入口js文件
            template: "./src/views/ask/ask.html", // 主页面
            filename: "ask.html", // 打包后的html文件名称
            title: "写问题",
            faviconPath: "favicon.ico"
        },
        question: {
            entry: "./src/views/question/question.js", // 配置入口js文件
            template: "./src/views/question/question.html", // 主页面
            filename: "question.html", // 打包后的html文件名称
            title: "问题",
            faviconPath: "favicon.ico"
        }
    }
  }