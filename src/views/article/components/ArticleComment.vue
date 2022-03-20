<template>
    <div id="articleComment">
        <textarea class="commentTextarea" v-model="commentContent" placeholder="请输入您的评论..."></textarea>
        <div class="publishCommentBtn" @click="publishComment()">发布</div>
        <div class="commentTotalNumber">总评论数( {{this.commentTotal}} )</div>
        <CommentList :commentList="commentList" :commentTotal="commentTotal" :commentNumber="commentNumber"
        @showMoreComment="showMoreComment"></CommentList>
    </div>
</template>

<script>

    import CommentList from './CommentList'
    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "ArticleComment",
        components: {
            CommentList
        },
        props: {
            article: Object,
            commentList: Array,
            commentTotal: Number,
            commentNumber: Number,
            userInfo: Object
        },
        data() {
            return {
                commentContent: ""
            }
        },
        methods: {
            showMoreComment() {
                this.$emit('showMoreComment')
            },
            publishComment() {
                if(this.userInfo == null) {
                    alert("请先登录")
                    window.location.href = "login.html"
                } else {
                    let addCommentUrl = API.BASE_URL + API.addComment
                    let formData = new FormData()
                    formData.append('content', this.commentContent)
                    formData.append('username', this.userInfo.username)
                    formData.append('articleId', this.article.id)
                    axios.post(addCommentUrl, formData).then(res => {
                        if(res.data.code === 200) {
                            alert(res.data.msg)
                            this.$router.go(0)
                        } else {
                            alert(res.data.msg)
                        }
                    })
                }
            }
        }
    }
</script>

<style>
    #articleComment {
        width: 760px;
        float: left;
        padding: 20px 30px;
        box-sizing: border-box;
    }

    #articleComment .commentTextarea {
        resize: none;
        width: 600px;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 18px;
    }

    #articleComment .publishCommentBtn {
        line-height: 30px;
        text-align: center;
        width: 80px;
        border-radius: 4px;
        margin-top: 5px;
        margin-left: 500px;
        color: #FFF;
        background-color: #3a74ca;
        border: 1px solid #3a74ca;
    }

    #articleComment .publishCommentBtn:hover {
        cursor: pointer;
        background-color: #143f80;
    }
</style>