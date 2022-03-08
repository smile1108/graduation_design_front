<template>
  <div id="article">
      <ArticleMessage></ArticleMessage>
  </div>
</template>

<script>

    import ArticleMessage from './components/ArticleMessage'
    import axios from 'axios'

    export default {
        name: 'Article',
        components: {
            ArticleMessage
        },
        data() {
            return {
                article: {}
            }
        },
        mounted() {
            // 当页面渲染完成之后 请求获取文章信息的接口
            let url = "http://localhost:9527/article/getArticleMessageById?articleId=" + this.$route.params.articleId
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(userInfo != null) {
                url = url + "&username=" + userInfo.username
            }
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    // 代表请求成功
                    this.article = JSON.parse(JSON.stringify(res.data.data))
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