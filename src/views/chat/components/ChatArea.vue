<template>
    <div id="chatArea">
        <ChatSideBar></ChatSideBar>
        <ChatBox></ChatBox>
    </div>
</template>

<script>

    import ChatSideBar from './ChatSideBar'
    import ChatBox from './ChatBox'

    export default {
        name: "ChatArea",
        components: {
            ChatSideBar, ChatBox
        }
    }
</script>

<style>
    #chatArea {
        height: calc(100vh - 100px);
        width: 1002px;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 4px;
        border: 1px solid #ebebeb;
        position: relative;
    }
</style>