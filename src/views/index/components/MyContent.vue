<template>
  <div id="content">
      <MySelector :articleClassify="articleClassify" :classifyFilter="classifyFilter" @addClassify="addClassify" @deleteClassify="deleteClassify"></MySelector>
      <MyArticleList :articles="articles" :sumPage="sumPage"></MyArticleList>
      <RightFunction :userInfo="userInfo" :todoList="todoList"></RightFunction>
  </div>
</template>

<script>
    import MySelector from './MySelector'
    import MyArticleList from './MyArticleList'
    import RightFunction from './RightFunction'
    import axios from 'axios'

    export default {
        name: 'MyContent',
        components: {
            MySelector, MyArticleList, RightFunction
        },
        props: {
            userInfo: Object,
            todoList: Array
        },
        data() {
            return {
                articleClassify: [
                    
                ],
                articles: [
                ],
                sumPage: undefined,
                classifyFilter: new Set()
            }
        },
        mounted() {
            // 当页面渲染完成之后 调用获取文章分类的接口 获取分类
            axios.get('http://localhost:9527/article/getArticleClassify').then(res => {
                if(res.data.code === 200) {
                    // 成功的话就设置articleClassify的值
                    this.articleClassify = JSON.parse(JSON.stringify(res.data.data))
                    // 将文章分类设置入 sessionStorage
                    sessionStorage.setItem('articleClassify', JSON.stringify(res.data.data))
                }
            })
            // 搜索文章接口 刚开始页面渲染完成 没有关键字 也没有文章分类的筛选
            axios.get('http://localhost:9527/article/searchArticle').then(res => {
                if(res.data.code === 200) {
                    // 成功请求 设置文章的数组
                    this.articles = res.data.data.lists
                    this.sumPage = res.data.data.sumPage
                }
            })
        },
        methods: {
            addClassify(classify) {
                this.classifyFilter.add(classify)
                let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
                // 当添加一个新的筛选条件的时候 重新调用searchArticle的接口
                // 这时候需要添加一个参数 即 分类筛选的参数
                let url = 'http://localhost:9527/article/searchArticle?classify=' + classifyStr 
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        // 成功请求 设置文章的数组
                        this.articles = res.data.data.lists
                        this.sumPage = res.data.data.sumPage
                    }
                })
            },
            deleteClassify(classify) {
                this.classifyFilter.delete(classify)
                let classifyStr = this.transferClassifyArrayToStr(this.classifyFilter)
                // 当添加一个新的筛选条件的时候 重新调用searchArticle的接口
                // 这时候需要添加一个参数 即 分类筛选的参数
                let url = 'http://localhost:9527/article/searchArticle?classify=' + classifyStr 
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        // 成功请求 设置文章的数组
                        this.articles = res.data.data.lists
                        this.sumPage = res.data.data.sumPage
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
            }
        }
    }
</script>

<style>
    #content {
        width: 100%;
        height: calc(100vh - 52px);
        background-color: #f6f6f6;
    }
</style>