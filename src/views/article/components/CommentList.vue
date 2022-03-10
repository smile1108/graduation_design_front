<template>
    <div id="commentList">
        <CommentItem v-for="commentObj in commentList" :key="commentObj.id" :commentObj="commentObj"></CommentItem>
        <div @click="showMoreComment()" :class="[{showMoreBtn: (commentList.length != 0 && commentTotal > commentNumber)},
        {noMore: (commentList.length == 0 || commentTotal <= commentNumber)}]">{{(commentList.lenght == 0 || commentTotal &lt;= commentNumber) ? "已经没有更多评论了" : "查看更多评论..."}}</div>
    </div>
</template>

<script>

    import CommentItem from './CommentItem'

    export default {
        name: "CommentList",
        components: {
            CommentItem
        },
        props: {
            commentList: Array,
            commentTotal: Number,
            commentNumber: Number
        },
        methods: {
            showMoreComment() {
                if(this.commentList.length != 0 && this.commentTotal > this.commentNumber) {
                    this.$emit('showMoreComment')
                }
            }
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

    #commentList .noMore {
        height: 30px;
        width: 140px;
        line-height: 30px;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;
        margin-top: 6px;
    }

    #commentList .showMoreBtn:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>