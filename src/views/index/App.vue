<template>
  <div>
    <MyHeader :userInfo="userInfo" @deleteUserInfo="deleteUserInfo" @searchArticle="searchArticle"
    @searchQuestion="searchQuestion" :unreadCount="unreadCount"></MyHeader>
    <router-view :userInfo="userInfo" :todoList="todoList" @addBacklog="addBacklog" @deleteBacklog="deleteBacklog"
      @undone="undone" @done="done" @checkAllOrNone="checkAllOrNone" @clearCompleted="clearCompleted" :articles="articles"
      :articleSumPage="articleSumPage" :questionSumPage="questionSumPage" :questions="questions" :classifyFilter="classifyFilter" @addClassify="addClassify" @deleteClassify="deleteClassify"
      @changePage="changePage" @refreshArticles="refreshArticles" @refreshQuestions="refreshQuestions"></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import axios from 'axios'
  import {API} from '../api'

  export default {
    name: 'App',
    components: {
      MyHeader
    },
    data() {
      return {
        userInfo: null,
        todoList: [
        ],
        articles: [
        ],
        questions: [
        ],
        articleSumPage: 0,
        questionSumPage: 0,
        classifyFilter: new Set(),
        searchContent: "",
        unreadCount: 0
      }
    },
    methods: {
      autoTakeUserInfo() {
        axios.get(API.BASE_URL + API.autoLogin).then(response => {
          if(response.data.code == 200) {
            if(response.data.data === null) {
              this.userInfo = null
            } else {
              this.userInfo = JSON.parse(JSON.stringify(response.data.data.userVo))
              sessionStorage.setItem('userInfo', JSON.stringify(response.data.data.userVo))
              sessionStorage.setItem('expireTimestamp', response.data.data.expireTimestamp)
              this.countAllUnread()
            }
          }
        })
      },
      // 退出登录时删除用户信息
      deleteUserInfo() {
        // 将userInfo置为空
        this.userInfo = null
        // 删除sessionStorage中的userInfo Item
        sessionStorage.removeItem('userInfo')
        this.$router.go(0)
      },
      // 获取用户所有待办事项的方法
      getAllBacklog() {
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo === null) {
          // 如果userInfo为null 表示当前还没有登录 直接return
          return
        }
        // 否则就调用获取待办事项的接口
        // 先拼接对应的url
        const url = API.BASE_URL + API.getAllBacklogs + "?username=" + userInfo.username
        axios.get(url).then(res => {
          if(res.data.code == 200) {
            // 设置todoList
            this.todoList = JSON.parse(JSON.stringify(res.data.data))
          }
        })
      },
      // 添加待办事项的方法
      addBacklog(title) {
        // 调用后端添加待办事项的接口
        // 构建表单数据
        let formData = new FormData()
        formData.append('title', title)
        formData.append('username', JSON.parse(sessionStorage.getItem('userInfo')).username)
        axios.post(API.BASE_URL + API.addBacklog, formData).then(res => {
          if(res.data.code === 200) {
            // 成功之后 重新刷新todoList 即再次调用获取所有待办事项的方法
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      // 删除待办事项的方法
      deleteBacklog(id) {
        // 构建表单数据
        let formData = new FormData()
        formData.append('id', id)
        formData.append('username', JSON.parse(sessionStorage.getItem('userInfo')).username)
        axios.post(API.BASE_URL + API.deleteBacklog, formData).then(res => {
          if(res.data.code === 200) {
            // 成功之后 刷新list
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      undone(id) {
        let url = API.BASE_URL + API.undone + '?id=' + id + '&username=' + JSON.parse(sessionStorage.getItem('userInfo')).username
        axios.get(url).then(res => {
          if(res.data.code === 200) {
            // 成功 刷新list
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      done(id) {
        let url = API.BASE_URL + API.done + '?id=' + id + '&username=' + JSON.parse(sessionStorage.getItem('userInfo')).username
        axios.get(url).then(res => {
          if(res.data.code === 200) {
            // 成功 刷新list
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      checkAllOrNone(done) {
        let url = API.BASE_URL + API.checkAllOrNone + '?done=' + done + '&username=' + JSON.parse(sessionStorage.getItem('userInfo')).username
        axios.get(url).then(res => {
          if(res.data.data === true) {
            // 刷新list
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      clearCompleted() {
        let url = API.BASE_URL + API.clearCompleted + '?username=' + JSON.parse(sessionStorage.getItem('userInfo')).username
        axios.get(url).then(res => {
          if(res.data.data === true) {
            // 刷新list
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      // 添加文章类型筛选
      addClassify(classify) {
        this.classifyFilter.add(classify)
          let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
          // 当添加一个新的筛选条件的时候 重新调用searchArticle的接口
          // 这时候需要添加一个参数 即 分类筛选的参数
          let url = API.BASE_URL + API.searchArticle + '?classify=' + classifyStr 
          if(this.searchContent != null) {
            url = url + "&keyword=" + this.searchContent
          }
          if(this.userInfo != null) {
            url = url + "&username=" + this.userInfo.username
          }
          axios.get(url).then(res => {
              if(res.data.code === 200) {
                  // 成功请求 设置文章的数组
                  this.articles = res.data.data.lists
                  this.articleSumPage = res.data.data.sumPage
              }
        })
      },
      deleteClassify(classify) {
        this.classifyFilter.delete(classify)
        let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
        // 当添加一个新的筛选条件的时候 重新调用searchArticle的接口
        // 这时候需要添加一个参数 即 分类筛选的参数
        let url = API.BASE_URL + API.searchArticle + '?classify=' + classifyStr 
        if(this.searchContent != null) {
            url = url + "&keyword=" + this.searchContent
          }
          if(this.userInfo != null) {
            url = url + "&username=" + this.userInfo.username
          }
        axios.get(url).then(res => {
            if(res.data.code === 200) {
                // 成功请求 设置文章的数组
                this.articles = res.data.data.lists
                this.articleSumPage = res.data.data.sumPage
            }
        })
      },
      // 将文章分类筛选的数组转换成对应的字符串 用,分割 传递到后端进行搜索
      transferClassifyArrayToStr(classifyFilter) {
          let classifyStr = ""
          for(let item of classifyFilter) {
              classifyStr = classifyStr + item + ","
          }
          return classifyStr.substring(0, classifyStr.length - 1)
      },
      searchArticle(keyword) {
        this.searchContent = keyword
        // 然后调用后端的接口 搜索文章
        // 当添加一个新的筛选条件的时候 重新调用searchArticle的接口
        // 这时候需要添加一个参数 即 分类筛选的参数
        let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
        let url = API.BASE_URL + API.searchArticle + '?classify=' + classifyStr + "&keyword=" + keyword
        if(this.userInfo != null) {
          url = url + "&username=" + this.userInfo.username
        }
        axios.get(url).then(res => {
            if(res.data.code === 200) {
                // 成功请求 设置文章的数组
                this.articles = res.data.data.lists
                this.articleSumPage = res.data.data.sumPage
            }
        })
      },
      searchQuestion(keyword) {
        this.searchContent = keyword
        let searchQuestionUrl = API.BASE_URL + API.searchQuestion + "?keyword=" + keyword
        axios.get(searchQuestionUrl).then(res => {
          if(res.data.code === 200) {
            this.questions = res.data.data.lists
            this.questionSumPage = res.data.data.sumPage
          }
        })
      },
      searchArticleMounted() {
        let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
        let url = API.BASE_URL + API.searchArticle + '?classify=' + classifyStr
        if(this.userInfo != null) {
          url = url + "&username=" + this.userInfo.username
        }
        url = url + "&keyword=" + this.searchContent
        axios.get(url).then(res => {
            if(res.data.code === 200) {
                // 成功请求 设置文章的数组
                this.articles = res.data.data.lists
                this.articleSumPage = res.data.data.sumPage
            }
        })
      },
      changePage(page) {
        // 根据路由判断当前需要改变文章列表 还是 问题列表
        if(this.$route.path === '/home') {
          // 当改变页数的时候 重新请求获取文章列表的接口
          let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
          let url = API.BASE_URL + API.searchArticle + '?classify=' + classifyStr
          if(this.searchContent != null && this.searchContent != "") {
            url = url + "&keyword=" + this.searchContent
          } 
          if(this.userInfo != null) {
            url = url + "&username=" + this.userInfo.username
          }
          url = url + "&page=" + (page - 1)
          axios.get(url).then(res => {
              if(res.data.code === 200) {
                  // 成功请求 设置文章的数组
                  this.articles = res.data.data.lists
                  this.articleSumPage = res.data.data.sumPage
              }
          })
        } else if(this.$route.path === '/problem') {
          // 改变问题列表
          let changeQuestionListUrl = API.BASE_URL + API.searchQuestion + "?keyword=" + this.searchContent
          changeQuestionListUrl = changeQuestionListUrl + "&page=" + (page - 1)
          axios.get(changeQuestionListUrl).then(res => {
            if(res.data.code === 200) {
              this.questions = res.data.data.lists
              this.questionSumPage = res.data.data.sumPage
            }
          })
        }
      },
      refreshArticles() {
        this.searchArticleMounted()
      },
      refreshQuestions() {
        this.searchQuestion("")
      },
      countAllUnread() {
        let countAllUnreadUrl = API.BASE_URL + API.countAllUnread + "?username=" + this.userInfo.username
        axios.get(countAllUnreadUrl).then(res => {
          if(res.data.code === 200) {
            this.unreadCount = res.data.data
          }
        })
      }
    },
    mounted() {// 当页面dom渲染好之后 进行自动登录的请求
      this.autoTakeUserInfo()
      // 然后调用 获取所有待办事项的方法
      this.getAllBacklog()
      // 搜索文章接口 刚开始页面渲染完成 没有关键字 也没有文章分类的筛选
      setTimeout(this.searchArticleMounted, 300)
      this.searchQuestion("")
    }
  }
</script>

<style>
</style>
