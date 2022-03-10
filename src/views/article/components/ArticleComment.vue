<template>
    <div id="articleComment">
        <textarea class="commentTextarea" v-model="commentContent" placeholder="请输入您的评论..."></textarea>
        <div class="publishCommentBtn">发布</div>
        <div class="commentTotalNumber">总评论数( {{this.commentTotal}} )</div>
        <CommentList :commentList="commentList" :commentTotal="commentTotal" :commentNumber="commentNumber"
        @showMoreComment="showMoreComment"></CommentList>
    </div>
</template>

<script>

    import CommentList from './CommentList'

    export default {
        name: "ArticleComment",
        components: {
            CommentList
        },
        props: {
            article: Object,
            commentList: Array,
            commentTotal: Number,
            commentNumber: Number
        },
        data() {
            return {
                commentContent: ""
            }
        },
        methods: {
            showMoreComment() {
                this.$emit('showMoreComment')
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