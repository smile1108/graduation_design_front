<template>
    <div id="commentItem">
        <div class="commentTopMessage clearfix">
            <img :src="commentObj.userVo.profile" alt="头像" class="profile">
            <div class="nickname">{{commentObj.userVo.nickname}}</div>
            <div class="publishTime">发布于 {{formatDate(commentObj.publishDate)}}</div>
        </div>
        <div class="commentContent">
            {{commentObj.content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentItem",
        props: {
            commentObj: Object
        },
        computed: {
            formatDate() {  
                return function(publishDate) {
                    const arr = publishDate.split('T');
                    const d = arr[0];

                    const t = arr[1];
                    const tarr = t.split('.000');
                    const marr = tarr[0].split(':');

                    const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                    return dd;
                }
            }
        },
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