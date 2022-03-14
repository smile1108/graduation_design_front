<template>
    <div id="problemItem">
        <div class="questionTopMessage clearfix">
            <img :src="questionObj.userVo.profile" alt="头像" class="profile">
            <div class="nickname">{{questionObj.userVo.nickname}} 的提问</div>
            <div class="publishDate">问题发布于 {{formatDate(questionObj.publishDate)}}</div>
        </div>
        <div class="questionDetailMessage">
            <div class="questionTitle">{{questionObj.title}}</div>
        </div>
        <div class="questionStatisticsMessage clearfix">
            <div class="tip">试试帮Ta解答</div>
            <div class="answerCount">10人回答</div>
            <div class="followCount">10人关注了作者</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyProblemItem",
        props: {
            questionObj: Object
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

    #problemItem {
        padding: 4px;
        margin-top: 6px;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #problemItem .questionTopMessage {
        line-height: 30px;
        padding: 0 8px;
    }

    #problemItem .questionDetailMessage {
        margin-top: 10px;
        padding: 0 8px;
    }

    #problemItem .questionStatisticsMessage {
        margin-top: 10px;
        padding: 0 8px;
        font-size: 14px;
        color: rgb(153, 153, 153);
    }

    #problemItem .questionStatisticsMessage .tip {
        float: left;
    }

    #problemItem .questionStatisticsMessage .answerCount {
        float: left;
        margin-left: 10px;
    }

    #problemItem .questionStatisticsMessage .followCount {
        float: left;
        margin-left: 10px;
    }

    #problemItem .questionDetailMessage .questionTitle {
        font-size: 15px;
        font-weight: 500;
        color: rgb(68, 68, 68);
    }

    #problemItem .questionTopMessage .profile {
        float: left;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-top: 2px;
    }

    #problemItem .questionTopMessage .nickname {
        float: left;
        margin-top: 4px;
        margin-left: 10px;
        font-size: 14px;
        color: rgb(68, 68, 68); 
    }

    #problemItem .questionTopMessage .publishDate {
        margin-top: 4px;
        font-size: 13px;
        color: rgb(153, 153, 153);
        margin-left: 200px;
    }
</style>