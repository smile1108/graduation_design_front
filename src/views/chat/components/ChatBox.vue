<template>
    <div id="chatBox">
        <div v-if="this.currentChatUser != undefined && this.currentChatUser != null">
            <ChatTitle :currentChatUser="currentChatUser"></ChatTitle>
            <ChatContent :chatMessageList="chatMessageList" :messageTotalNumber="messageTotalNumber"
            :userInfo="userInfo"></ChatContent>
            <ChatInput :webSocketObj="webSocketObj" :userInfo="userInfo"></ChatInput>
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
    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "ChatBox",
        props: {
            webSocketObj: Object,
            userInfo: Object,
            chatMessageList: Array,
            messageTotalNumber: Number
        },
        components: {
            ChatTitle, ChatContent, ChatInput
        },
        data() {
            return {
                currentChatUser: null
            }
        },
        methods: {
            getCurrentChatUserMessage() {
                let getUserUrl = API.BASE_URL + API.getUserByUsername + "?username=" + this.$route.params.toUser
                axios.get(getUserUrl).then(res => {
                    if(res.data.code === 200) {
                        this.currentChatUser = JSON.parse(JSON.stringify(res.data.data))
                    }
                })
            }
        },
        mounted() {
            this.getCurrentChatUserMessage()
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