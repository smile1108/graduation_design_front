<template>
    <div id="followItem">
        <img :src="followUserObj.profile" alt="头像" class="profile">
        <div class="followUserMessageDiv">
            <div class="userMessage">
                <span class="nickname">{{followUserObj.nickname}}</span>
                <span class="school">{{followUserObj.school}}</span>
            </div>
            <div class="otherMessage">
                <span class="followNumber">{{followUserObj.followSum}} 人关注了他</span>
                <span class="articleNumber">他有 {{followUserObj.articleSum}} 篇文章</span>
                <div class="homeBtn" @click="jumpFollowHome()">去他主页</div>
                <div class="unfollowBtn">取消关注</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFollowItem",
        props: {
            followUserObj: Object
        },
        methods: {
            jumpFollowHome() {
                sessionStorage.setItem('visitUser', JSON.stringify(this.followUserObj))
                window.location.href = 'home.html'
            }
        }
    }
</script>

<style>
    #followItem {
        height: 110px;
        width: 70%;
        padding: 4px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #followItem .profile {
        float: left;
        height: 100px;
        width: 100px;
        border-radius: 5px;
    }

    #followItem .followUserMessageDiv {
        height: 100px;
        width: 500px;
        float: left;
        margin-left: 20px;
        padding: 6px;
        box-sizing: border-box;
    }

    #followItem .followUserMessageDiv .userMessage {
        width: 450px;
        height: 50px;
        line-height: 50px;
    }

    #followItem .followUserMessageDiv .userMessage .nickname {
        font-size: 24px;
        font-weight: 600;
    }
    
    #followItem .followUserMessageDiv .userMessage .school {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 400;
    }
    
    #followItem .followUserMessageDiv .otherMessage {
        width: 450px;
        height: 30px;
        line-height: 30px;
        margin-top: 6px;
        font-size: 14px;
        padding: 0 10px;
        box-sizing: border-box;
    }

    #followItem .followUserMessageDiv .otherMessage .articleNumber {
        margin-left: 20px;
    }

    #followItem .followUserMessageDiv .otherMessage .homeBtn {
        display: inline-block;
        margin-left: 20px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        padding: 0 6px;
        border-radius: 4px;
        color: #FFF;
    }

    #followItem .followUserMessageDiv .otherMessage .unfollowBtn {
        background-color: #da4f49;
        border: 1px solid #bd362f;
        color: #FFF;
        display: inline-block;
        margin-left: 20px;
        padding: 0 6px;
        border-radius: 4px;
    }

    #followItem .followUserMessageDiv .otherMessage .unfollowBtn:hover {
        background-color: #bd362f;
        cursor: pointer;
    }

    #followItem .followUserMessageDiv .otherMessage .homeBtn:hover {
        background-color: #1d61c7;
        cursor: pointer;
    }
</style>