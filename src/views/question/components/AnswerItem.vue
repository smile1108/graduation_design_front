<template>
    <div id="answerItem">
        <div class="answerTopMessage clearfix">
            <img :src="answerObj.userVo.profile" alt="头像" class="profile">
            <div class="nickname">{{answerObj.userVo.nickname}}</div>
            <div class="publishTime">发布于 {{formatDate(answerObj.publishDate)}}</div>
        </div>
        <div class="content" v-html="answerObj.htmlContent"></div>
    </div>
</template>

<script>
    export default {
        name: "AnswerItem",
        props: {
            answerObj: Object
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

    #answerItem .answerTopMessage {
        height: 40px;
        line-height: 40px;
    }

    #answerItem .content {
        font-size: 12px;
        padding: 0 20px;
        box-sizing: border-box;
    }

    #answerItem .content img {
        max-width: 400px;
    }

    #answerItem .answerTopMessage .profile {
        height: 34px;
        width: 34px;
        border-radius: 3px;
        margin-top: 4px;
        float: left;
    }

    #answerItem .answerTopMessage .nickname {
        font-size: 15px;
        float: left;
        margin-left: 10px;
        margin-top: 6px;
    }

    #answerItem .answerTopMessage .publishTime {
        font-size: 14px;
        color: #8590a6;
        margin-left: 400px;
        margin-top: 6px;
    }
</style>