<template>
    <div id="chatBox">
        <div v-if="this.currentChatUser != undefined && this.currentChatUser != null">
            <ChatTitle :currentChatUser="currentChatUser"></ChatTitle>
            <ChatContent></ChatContent>
            <ChatInput :webSocketObj="webSocketObj"></ChatInput>
        </div>
        <div class="withoutCurrentChat" v-else>
            <div class="iconfont">&#xe665;</div>
        </div>
    </div>
</template>

<script>

    import ChatTitle from './ChatTitle'
    import ChatContent from './ChatContent'
    import ChatInput from './ChatInput'

    export default {
        name: "ChatBox",
        props: {
            currentChatUser: Object,
            webSocketObj: Object
        },
        components: {
            ChatTitle, ChatContent, ChatInput
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style>

    @font-face {
    font-family: 'iconfont';
    src: url('../icon/iconfont.woff2?t=1636981770201') format('woff2'),
        url('../icon/iconfont.woff?t=1636981770201') format('woff'),
        url('../icon/iconfont.ttf?t=1636981770201') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #chatBox {
        position: absolute;
        left: 288px;
        top: 1px;
        min-height: 600px;
        min-width: 710px;
        box-sizing: border-box;
    }

    #chatBox .withoutCurrentChat {
        line-height: 600px;
        text-align: center;
    }

    #chatBox .withoutCurrentChat .iconfont {
        font-size: 160px;
        color: #8590A6;
    }
</style>