<template>
    <div id="commentItem">
        <div class="commentTopMessage clearfix">
            <img src="http://localhost/images/default.png" alt="头像" class="profile">
            <div class="nickname">一只小菜鸡</div>
            <div class="publishTime">发布于2022-03-10 11:00:00</div>
        </div>
        <div class="commentContent">
            哈哈哈哈哈哈哈哈评论测试
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentItem"
    }
</script>

<style>

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    #commentItem {
        border-bottom: 2px solid #ebebeb;
        padding: 2px;
        box-sizing: border-box;
    }

    #commentItem .commentTopMessage {
        height: 40px;
        line-height: 40px;
    }

    #commentItem .commentContent {
        margin-top: 3px;
        padding: 4px 40px;
        box-sizing: border-box;
    }

    #commentItem .commentTopMessage .profile {
        height: 34px;
        width: 34px;
        border-radius: 3px;
        margin-top: 4px;
        float: left;
    }

    #commentItem .commentTopMessage .nickname {
        font-size: 15px;
        float: left;
        margin-left: 10px;
        margin-top: 6px;
    }

    #commentItem .commentTopMessage .publishTime {
        font-size: 14px;
        color: #8590a6;
        margin-left: 400px;
        margin-top: 6px;
    }
</style>