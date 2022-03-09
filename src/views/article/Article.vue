<template>
  <div id="article">
      <ArticleHeader :article="article" :userInfo="userInfo"></ArticleHeader>
      <ArticleMessage :article="article"></ArticleMessage>
  </div>
</template>

<script>

    import ArticleMessage from './components/ArticleMessage'
    import ArticleHeader from './components/ArticleHeader'
    import axios from 'axios'

    export default {
        name: 'Article',
        components: {
            ArticleMessage, ArticleHeader
        },
        data() {
            return {
                article: {},
                userInfo: {}
            }
        },
        mounted() {
            // 当页面渲染完成之后 请求获取文章信息的接口
            let url = "http://localhost:9527/article/getArticleMessageById?articleId=" + this.$route.params.articleId
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(this.userInfo != null) {
                url = url + "&username=" + this.userInfo.username
            }
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    // 代表请求成功
                    this.article = JSON.parse(JSON.stringify(res.data.data))
                    document.title = this.article.title
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
</script>

<style>
    #article {
        background-color: #f6f6f6;
    }
</style>