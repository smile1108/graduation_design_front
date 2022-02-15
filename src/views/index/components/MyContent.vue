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
                    {id: "001", title: "题目", content: "卢卡斯的积", classify: "计算机类", publishDate: "2022-2-14 10:00:00", userInfo: {
                        username: "201801001113",
                        nickname: "一只小菜鸡",
                        school: "山西大学",
                        profile: "http://localhost/images/ek9flm7ehlicbjoopodq.jpg"
                    }}
                ]
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