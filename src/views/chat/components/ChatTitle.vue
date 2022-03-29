<template>
    <div id="chatTitle">
        <div class="titleContent">{{currentChatUser.nickname}}</div>
    </div>
</template>

<script>
    export default {
        name: "ChatTitle",
        props: {
            currentChatUser: Object
        }
    }
</script>

<style>
    #chatTitle {
        padding: 21px 0 9px 0;
        width: 95%;
        margin: 0 auto;
        box-sizing: border-box;
        border-bottom: 1px solid #ebebeb;
    }

    #chatTitle .titleContent {
        margin: 0 auto;
        width: 200px;
        font-size: 22px;
        text-align: center;
    }
</style>