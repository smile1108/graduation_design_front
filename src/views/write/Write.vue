<template>
  <div id="writeArea">
      <WriteHeader :userInfo="userInfo"></WriteHeader>
      <WriteArticle :userInfo="userInfo" :articleContent="articleContent" @modifyArticleContent="modifyArticleContent"></WriteArticle>
  </div>
</template>

<script>
    import WriteArticle from './components/WriteArticle'
    import WriteHeader from './components/WriteHeader'

    export default {
        name: 'Write',
        components: {
            WriteArticle, WriteHeader
        },
        data() {
            return {
                userInfo: {
                    
                },
                articleContent: '# Header'
            }
        },
        methods: {
            modifyArticleContent(content) {
                this.articleContent = content
            }
        },
        mounted() {
            // 当页面渲染完成之后自动从sessionStorage中获取userInfo
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style>
</style>