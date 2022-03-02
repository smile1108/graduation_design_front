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
            todoList: Array,
            articles: Array,
            sumPage: Number,
            classifyFilter: Set
        },
        data() {
            return {
                articleClassify: [
                    
                ],
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
            let url = 'http://localhost:9527/article/searchArticle'
            if(this.userInfo != null) {
                url = url + "?username=" + this.userInfo.username
            }
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    // 成功请求 设置文章的数组
                    this.$emit('changeArticles', res.data.data.lists)
                    this.$emit('changeSumPage', res.data.data.sumPage)
                }
            })
        },
        methods: {
            addClassify(classify) {
                this.$emit('addClassify', classify)
            },
            deleteClassify(classify) {
                this.$emit('deleteClassify', classify)
            },  
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