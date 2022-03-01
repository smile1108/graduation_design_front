<template>
    <div id="myArticle">
        <MyArticleItem v-for="article in myArticleList" :key="article.id" :articleObj="article"></MyArticleItem>
        <Page></Page>
    </div>
</template>

<script>

    import MyArticleItem from './MyArticleItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'

    export default {
        name: 'MyArticle',
        components: {
            MyArticleItem, Page
        },
        props: {
            userInfo: Object
        },
        data() {
            return {
                myArticleList: []
            }
        },
        mounted() {
            // 当页面渲染完成之后 请求获取自己文章的接口
            let url = "http://localhost:9527/article/getArticleListByUsername?username=" + this.userInfo.username
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    this.myArticleList = res.data.data.lists
                }
            })
        }
    }
</script>

<style>
    #myArticle {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px;
        box-sizing: border-box;
    }
</style>