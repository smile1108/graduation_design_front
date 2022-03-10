<template>
    <div id="commentList">
        <CommentItem></CommentItem>
        <div class="showMoreBtn">查看更多评论...</div>
    </div>
</template>

<script>

    import CommentItem from './CommentItem'

    export default {
        name: "CommentList",
        components: {
            CommentItem
        }
    }
</script>

<style>
    #commentList {
        border-top: 2px solid #ebebeb;
        margin-top: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    #commentList .showMoreBtn {
        height: 30px;
        width: 140px;
        line-height: 30px;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;
        color: rgb(41, 129, 212);
        margin-top: 6px;
    }

    #commentList .showMoreBtn:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>