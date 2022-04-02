<template>
    <div id="chatArea">
        <ChatSideBar :chatUserList="chatUserList" @getChatMessageList="getChatMessageList"
        @clearUnreadCount="clearUnreadCount" :userInfo="userInfo"></ChatSideBar>
        <router-view :webSocketObj="webSocketObj" :userInfo="userInfo"
        :chatMessageList="chatMessageList" :messageTotalNumber="messageTotalNumber"
        @getChatMessageList="getChatMessageList"></router-view>
    </div>
</template>

<script>

    import ChatSideBar from './ChatSideBar'
    import {API} from '../../api'
    import axios from 'axios'

    export default {
        name: "ChatArea",
        components: {
            ChatSideBar
        },
        props: {
            userInfo: Object
        },
        data() {
            return {
                chatUserList: [],
                chatMessageList: [],
                currentMessageNumber: 5,
                messageTotalNumber: null,
                webSocketObj: null
            }
        },
        methods: {
            getChatList() {
                let getChatListUrl = API.BASE_URL + API.getChatList + "?username=" + this.userInfo.username
                axios.get(getChatListUrl).then(res => {
                    if(res.data.code === 200) {
                        this.chatUserList = JSON.parse(JSON.stringify(res.data.data))
                        // 然后判断当前路由中有没有正在聊天的用户
                        if(this.$route.params.toUser) {
                            // 代表路由中有对应的用户 此时需要判断 chatList中有没有该用户 如果没有需要添加
                            let exist = false
                            this.chatUserList.forEach(chatUserObj => {
                                if(chatUserObj.username === this.$route.params.toUser) {
                                    exist = true
                                }
                            })
                            if(!exist) {
                                // 如果遍历完数组都没有找到 就需要添加这个聊天用户到列表中
                                this.addItemToChatList()
                            }
                        }
                    } else if(res.data.code === 519) {
                        alert("用户登录认证信息已过期, 请重新登录")
                        window.location.href = "login.html"
                    }
                })
            },
            addItemToChatList() {
                let getUserMessageUrl = API.BASE_URL + API.getUserChatMessage + "?username=" + this.$route.params.toUser
                axios.get(getUserMessageUrl).then(res => {
                    if(res.data.code === 200) {
                        let userObj = JSON.parse(JSON.stringify(res.data.data))
                        this.chatUserList.unshift(userObj)
                    }
                })
            },
            getChatMessageList() {
                if(this.$route.params.toUser) {
                    let getChatMessageListUrl = API.BASE_URL + API.getChatMessageList + "?username1=" + this.userInfo.username + "&username2=" + this.$route.params.toUser + "&number=" + this.currentMessageNumber
                    axios.get(getChatMessageListUrl).then(res => {
                        if(res.data.code === 200) {
                            this.chatMessageList = JSON.parse(JSON.stringify(res.data.data.lists))
                            this.messageTotalNumber = res.data.data.count
                        }
                    })
                }
            },
            clearUnreadCount(fromUser) {
                let clearUnreadCountUrl = API.BASE_URL + API.clearUnreadCount + "?fromUser=" + fromUser + "&toUser=" + this.userInfo.username
                axios.get(clearUnreadCountUrl).then(res => {
                    if(res.data.code === 200) {
                        console.log("清除成功")
                    }
                })
            },
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
                let messageObj = JSON.parse(event.data)
                if(messageObj.fromUserVo.username == this.$route.params.toUser || 
                messageObj.fromUserVo.username == this.userInfo.username) {
                    console.log("是当前聊天的用户")
                    this.chatMessageList.push(messageObj)
                    this.messageTotalNumber++
                    this.currentMessageNumber++
                    if(messageObj.fromUserVo.username == this.$route.params.toUser) {
                        this.clearUnreadCount(messageObj.fromUserVo.username)
                    }
                }
            },
            onError() {
                
            },
            onClose() {
                this.webSocketObj && this.webSocketObj.close && this.webSocketObj.close();
            },
        },
        mounted() {
            this.initWebsocket()
            // 当页面加载时 如果路由中参数不为空 就先清除未读消息 再查询
            if(this.$route.params.toUser) {
                this.clearUnreadCount(this.$route.params.toUser)
            }
            this.getChatList()
            this.getChatMessageList()
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