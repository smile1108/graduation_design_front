<template>
  <div id="content">
      <MySelector :articleClassify="articleClassify" :classifyFilter="classifyFilter" @addClassify="addClassify" @deleteClassify="deleteClassify"></MySelector>
      <MyArticleList :articles="articles" :articleSumPage="articleSumPage" :userInfo="userInfo" @changePage="changePage"
      @refreshArticles="refreshArticles"></MyArticleList>
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
            articleSumPage: Number,
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
            this.$emit('refreshArticles')
        },
        methods: {
            addClassify(classify) {
                this.$emit('addClassify', classify)
            },
            deleteClassify(classify) {
                this.$emit('deleteClassify', classify)
            },
            changePage(page) {
                this.$emit('changePage', page)
            },
            refreshArticles() {
                this.$emit('refreshArticles')
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