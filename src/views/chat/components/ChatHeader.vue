<template>
    <div id="chatHeader">
        <div class="tip">校园学习分享平台</div>
        <div class="homeBtn" @click="jumpHome()">我的主页</div>
        <img :src="userInfo.profile" alt="头像" class="profile">
    </div>
</template>

<script>
    export default {
        name: "ChatHeader",
        props: {
            userInfo: Object
        },
        methods: {
            jumpHome() {
                window.location.href = '/home.html#/' + this.userInfo.username
            }
        }
    }
</script>

<style>

    #chatHeader {
        background-color: #FFF;
        height: 60px;
        line-height: 60px;
        padding: 0 180px;
        position: relative;
        margin-bottom: 10px;
    }

    #chatHeader .tip {
        font-size: 24px;
        display: inline-block;
    }

    #chatHeader .homeBtn {
        margin-left: 800px;
        display: inline-block;
        height: 24px;
        padding: 4px 16px;
        line-height: 24px;
        border-radius: 4px;
        color: #fff;
        background-color: #f01a1a;
    }

    #chatHeader .homeBtn:hover {
        cursor: pointer;
        background-color: #991717;
    }

    #chatHeader .profile {
        position: absolute;
        margin-left: 40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        left: 1260px;
        top: 10px;
    }
</style>