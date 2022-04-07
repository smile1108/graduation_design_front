<template>
    <div id="chat">
        <ChatHeader :userInfo="userInfo"></ChatHeader>
        <ChatArea :userInfo="userInfo" @changeEnlargeImage="changeEnlargeImage" @changeImageSrc="changeImageSrc"
        :showImageSrc="showImageSrc"></ChatArea>
        <div id="popLayer" :class="{showEnlargeImage: !showEnlargeImage}">
            <span class="iconfont" @click="closeEnlargeImage()">&#xe8dc;</span>
            <img :src="showImageSrc" alt="">
        </div>
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
                userInfo: {},
                showEnlargeImage: false,
                showImageSrc: ''
            }
        },
        methods: {
            closeEnlargeImage() {
                this.showEnlargeImage = false
            },
            changeEnlargeImage(show) {
                this.showEnlargeImage = show
            },
            changeImageSrc(src) {
                this.showImageSrc = src
            }
        },
        beforeMount() {
            // 当页面渲染完成之后自动从sessionStorage中获取userInfo
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style>

    .showEnlargeImage {
        display: none;
    }

    @font-face {
    font-family: 'iconfont';
    src: url('./icon/iconfont.woff2?t=1636981770201') format('woff2'),
        url('./icon/iconfont.woff?t=1636981770201') format('woff'),
        url('./icon/iconfont.ttf?t=1636981770201') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #chat {
        background-color: #f6f6f6;
        height: 100vh;
    }

    #chat #popLayer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1600;
        background-color: rgba(136, 132, 132, 0.9);
    }

    #chat #popLayer .iconfont {
        font-size: 42px;
        float: right;
        margin-right: 30px;
        margin-top: 10px;
        color: rgb(63, 57, 57);
    }

    #chat #popLayer .iconfont:hover {
        color: rgb(180, 67, 67);
        cursor: pointer;
    }

    #chat #popLayer img {
        min-height: 90vh;
        margin: 0 auto;
        display: block;
        margin-top: 40px;
    }
</style>