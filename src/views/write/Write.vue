<template>
  <div id="writeArea">
      <WriteHeader :showPublishBox="showPublishBox" :userInfo="userInfo" @transferDataAndPublish="transferDataAndPublish"
      @modifyShowPublishBox="modifyShowPublishBox"></WriteHeader>
      <WriteArticle :userInfo="userInfo" :articleContent="articleContent" @modifyArticleContent="modifyArticleContent"></WriteArticle>
  </div>
</template>

<script>
    import WriteArticle from './components/WriteArticle'
    import WriteHeader from './components/WriteHeader'
    import axios from 'axios'

    export default {
        name: 'Write',
        components: {
            WriteArticle, WriteHeader
        },
        data() {
            return {
                userInfo: {
                    
                },
                articleContent: '# Header',
                showPublishBox: false
            }
        },
        methods: {
            modifyShowPublishBox(show) {
                this.showPublishBox = show
            },
            modifyArticleContent(content) {
                this.articleContent = content
            },
            transferDataAndPublish(articleTitle, articleClassify) {
                // 然后构建表单数据 
                let formData = new FormData()
                formData.append('title', articleTitle)
                formData.append('classify', articleClassify)
                formData.append('content', this.articleContent)
                formData.append('username', JSON.parse(sessionStorage.getItem('userInfo')).username)
                // 然后调用后端发布接口
                axios.post('http://localhost:9527/article/addArticle', formData).then(res => {
                    if(res.data.code === 200) {
                        alert('文章发布成功')
                        // 成功之后 将发布框设置为不展示
                        this.showPublishBox = false
                        this.articleContent = '# Header'
                    } else {
                        alert(res.data.msg)
                    }
                })
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