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
        }
    }
  }