<template>
    <div id="chat">
        <ChatHeader :userInfo="userInfo"></ChatHeader>
        <ChatArea></ChatArea>
    </div>
</template>

<script>

    import ChatHeader from './components/ChatHeader'
    import ChatArea from './components/ChatArea'

    export default {
        name: 'Chat',
        components: {
            ChatHeader, ChatArea
        },
        data() {
            return {
                userInfo: {}
            }
        },
        methods: {
            
        },
        mounted() {
            // 当页面渲染完成之后自动从sessionStorage中获取userInfo
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style>
    #chat {
        background-color: #f6f6f6;
        height: 100vh;
    }
</style>