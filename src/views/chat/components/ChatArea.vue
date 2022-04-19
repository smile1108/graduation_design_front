<template>
    <div id="chatArea">
        <ChatSideBar :chatUserList="chatUserList" @getChatMessageList="getChatMessageList"
        @clearUnreadCount="clearUnreadCount" :userInfo="userInfo" :bulingUsername="bulingUsername"
        @resetBulineUsername="resetBulineUsername"></ChatSideBar>
        <router-view :webSocketObj="webSocketObj" :userInfo="userInfo"
        :chatMessageList="chatMessageList" :messageTotalNumber="messageTotalNumber"
        @getChatMessageList="getChatMessageList" @showMoreMessage="showMoreMessage" :isShowMore="isShowMore"
        @changeIsShowMore="changeIsShowMore" @changeEnlargeImage="changeEnlargeImage"
        @changeImageSrc="changeImageSrc" :showImageSrc="showImageSrc"></router-view>
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
            userInfo: Object,
            showImageSrc: String
        },
        data() {
            return {
                chatUserList: [],
                chatMessageList: [],
                currentMessageNumber: 5,
                messageTotalNumber: null,
                webSocketObj: null,
                bulingUsername: null,
                isShowMore: false
            }
        },
        methods: {
            changeImageSrc(src) {
                this.$emit('changeImageSrc', src)
            },
            changeEnlargeImage(show) {
                this.$emit('changeEnlargeImage', show)
            },
            changeIsShowMore(isShowMore) {
                this.isShowMore = isShowMore
            },
            showMoreMessage() {
                this.currentMessageNumber += 5
                this.getChatMessageList()
            },
            resetBulineUsername() {
                this.bulingUsername = null
            },
            changeUnreadCount(fromUser) {
                let fromUserObj = null
                let changeIndex = 0
                for(let index = 0; index < this.chatUserList.length; index++) {
                    if(this.chatUserList[index].username == fromUser) {
                        fromUserObj = this.chatUserList[index]
                        changeIndex = index
                    }
                }
                fromUserObj.unreadCount++
                this.chatUserList.splice(changeIndex, 1, fromUserObj)
            },
            addItemAndUnreadCountToChatList(username) {
                let getUserMessageUrl = API.BASE_URL + API.getUserChatMessage + "?username=" + username
                axios.get(getUserMessageUrl).then(res => {
                    if(res.data.code === 200) {
                        let userObj = JSON.parse(JSON.stringify(res.data.data))
                        userObj.unreadCount++
                        this.chatUserList.unshift(userObj)
                    }
                })
            },
            judgeUserExistInChatList(username) {
                let exist = false
                this.chatUserList.forEach(chatUserObj => {
                    if(chatUserObj.username == username) {
                        exist = true
                    }
                })
                return exist
            },
            getChatList() {
                let getChatListUrl = API.BASE_URL + API.getChatList + "?username=" + this.userInfo.username
                axios.get(getChatListUrl).then(res => {
                    if(res.data.code === 200) {
                        this.chatUserList = JSON.parse(JSON.stringify(res.data.data))
                        // 然后判断当前路由中有没有正在聊天的用户
                        if(this.$route.params.toUser) {
                            // 代表路由中有对应的用户 此时需要判断 chatList中有没有该用户 如果没有需要添加
                            let exist = this.judgeUserExistInChatList(this.$route.params.toUser)
                            if(!exist) {
                                // 如果遍历完数组都没有找到 就需要添加这个聊天用户到列表中
                                this.addItemToChatList(this.$route.params.toUser)
                            }
                        }
                    } else if(res.data.code === 519) {
                        alert("用户登录认证信息已过期, 请重新登录")
                        window.location.href = "login.html"
                    }
                })
            },
            addItemToChatList(username) {
                let getUserMessageUrl = API.BASE_URL + API.getUserChatMessage + "?username=" + username
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
                this.isShowMore = false
                let messageObj = JSON.parse(event.data)
                // this.userInfo代表当前这个客户端正在登录的用户
                if(messageObj.fromUserVo.username == this.userInfo.username) {
                    // 代表这个客户端是发送消息的客户端
                    // 这时只需要在聊天消息列表中添加一条新的消息即可
                    this.chatMessageList.push(messageObj)
                    this.messageTotalNumber++
                    this.currentMessageNumber++
                } else {
                    // 代表是接受消息的客户端
                    // 然后要判断接受消息的客户端中有没有该用户的聊天项
                    if(this.judgeUserExistInChatList(messageObj.fromUserVo.username)) {
                        // 代表存在 该用户
                        if(messageObj.fromUserVo.username == this.$route.params.toUser) {
                            // 存在的话判断是不是当前聊天的用户 如果是的话 要添加消息 并且清除未读消息
                            this.chatMessageList.push(messageObj)
                            this.messageTotalNumber++
                            this.currentMessageNumber++
                            this.clearUnreadCount(messageObj.fromUserVo.username)
                        } else {
                            // 代表不是正在聊天的用户 此时只需要改变未读消息总数 并闪烁提示
                            this.changeUnreadCount(messageObj.fromUserVo.username)
                            // 闪烁
                            this.bulingUsername = messageObj.fromUserVo.username
                        }
                    } else {
                        // 聊天列表中不存在该用户 就添加
                        this.addItemAndUnreadCountToChatList(messageObj.fromUserVo.username)
                        if(!this.$route.params.toUser) {
                            // 如果当前没有正在聊天的用户 直接跳转到新发消息的用户
                            this.$router.push('/chat/' + messageObj.fromUserVo.username)
                            this.$router.go(0)
                        }
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