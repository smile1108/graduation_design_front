<template>
  <div id="content">
      <MySelector :articleClassify="articleClassify"></MySelector>
      <MyArticleList :articles="articles"></MyArticleList>
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
                    {id: "001", title: "题目", content: "卢卡斯的积", authorAvatar: "https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727", authorName: "姓名"}
                ]
            }
        },
        mounted() {
            // 当页面渲染完成之后 调用获取文章分类的接口 获取分类
            axios.get('http://localhost:9527/article/getArticleClassify').then(res => {
                if(res.data.code === 200) {
                    // 成功的话就设置articleClassify的值
                    this.articleClassify = JSON.parse(JSON.stringify(res.data.data))
                }
            })
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