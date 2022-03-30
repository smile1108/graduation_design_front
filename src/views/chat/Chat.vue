<template>
    <div id="chat">
        <ChatHeader :userInfo="userInfo"></ChatHeader>
        <ChatArea :webSocketObj="webSocketObj" :userInfo="userInfo"></ChatArea>
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
                webSocketObj: null
            }
        },
        methods: {
            initWebsocket(){
                if (typeof WebSocket != 'undefined') {
                    this.webSocketObj = new WebSocket(
                        "ws://localhost:8005/chat/" + this.userInfo.username
                    );
                    this.webSocketObj.onmessage = this.onMessage
                    this.webSocketObj.onopen = this.onOpen
                    this.webSocketObj.onerror = this.onError
                    this.webSocketObj.onclose = this.onClose
                }  
            },
            onOpen() {
                
            },
            // timingHeart() {
            //     // 心跳检测  每4.5分钟发送一次 
            //     if (this.wsHeartflag) {
            //         this.webSocketObj.send('123123123');
            //     }
            //     this.wsHeart = setTimeout(() => {
            //         this.timingHeart();
            //     }, 100 * 1000); // 100s心跳
            // },
            onMessage(event) {
                alert(event.data)
            },
            onError() {
                
            },
            onClose() {
                this.webSocketObj && this.webSocketObj.close && this.webSocketObj.close();
            },
        },
        beforeMount() {
            // 当页面渲染完成之后自动从sessionStorage中获取userInfo
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            this.initWebsocket()
        }
    }
</script>

<style>
    #chat {
        background-color: #f6f6f6;
        height: 100vh;
    }
</style>