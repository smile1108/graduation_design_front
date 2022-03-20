<template>
  <div id="article">
      <ArticleHeader :article="article" :userInfo="userInfo"></ArticleHeader>
      <ArticleMessage :article="article" :userInfo="userInfo" :articleNumber="articleNumber"
      :likeNumber="likeNumber" :followerNumber="followerNumber" :commentList="commentList" :commentTotal="commentTotal"
      :commentNumber="commentNumber" @showMoreComment="showMoreComment"></ArticleMessage>
  </div>
</template>

<script>

    import ArticleMessage from './components/ArticleMessage'
    import ArticleHeader from './components/ArticleHeader'
    import axios from 'axios'
    import {API} from '../api'

    export default {
        name: 'Article',
        components: {
            ArticleMessage, ArticleHeader
        },
        data() {
            return {
                article: {},
                userInfo: {},
                articleNumber: 0,
                likeNumber: 0,
                followerNumber: 0,
                commentNumber: 5,
                commentList: [],
                commentTotal: 0
            }
        },
        methods: {
            showMoreComment() {
                this.commentNumber += 5
                this.getCommentList()
            },
            getCommentList() {
                let getCommentList = API.BASE_URL + API.getCommentListByArticleId + "?articleId=" + this.article.id + "&number=" + this.commentNumber
                axios.get(getCommentList).then(res => {
                    if(res.data.code === 200) {
                        this.commentList = JSON.parse(JSON.stringify(res.data.data.lists))
                        this.commentTotal = res.data.data.count
                    }
                })
            },
            statistics() {
                // 当页面渲染完成之后调用统计作者相关数量的接口
                let countArticle = API.BASE_URL + API.countArticleByUser + "?username=" + this.article.userVo.username
                let countLike = API.BASE_URL + API.countLikeByUser + "?username=" + this.article.userVo.username
                let countFollower = API.BASE_URL + API.countFollowed + "?followUsername=" + this.article.userVo.username
                axios.get(countArticle).then(res => {
                    if(res.data.code === 200) {
                        this.articleNumber = res.data.data
                    } else {
                        alert(res.data.msg)
                    }
                })
                axios.get(countLike).then(res => {
                    if(res.data.code === 200) {
                        this.likeNumber = res.data.data
                    } else {
                        alert(res.data.msg)
                    }
                })
                axios.get(countFollower).then(res => {
                    if(res.data.code === 200) {
                        this.followerNumber = res.data.data
                    } else {
                        alert(res.data.msg)
                    }
                })
            }
        },
        created() {
            // 当页面渲染完成之后 请求获取文章信息的接口
            let url = API.BASE_URL + API.getArticleMessageById + "?articleId=" + this.$route.params.articleId
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if(this.userInfo != null) {
                url = url + "&username=" + this.userInfo.username
            }
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    // 代表请求成功
                    this.article = JSON.parse(JSON.stringify(res.data.data))
                    document.title = this.article.title
                    this.statistics()
                    this.getCommentList()
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