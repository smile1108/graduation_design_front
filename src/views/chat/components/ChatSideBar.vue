<template>
    <div id="chatSideBar">
        <div class="chatSearch">
            <input type="text" class="chatSearchInput" placeholder="搜索联系人">
        </div>
        <div class="chatList">
            <router-link :to="{path: '/chat/' + chatUserObj.username}" class="chatUser" v-for="chatUserObj in chatUserList" :key="chatUserObj.username" active-class="currentChat" @click.native="changeChatMessage(chatUserObj)" >
                <img :src="chatUserObj.profile" alt="头像" class="userProfile">
                <div class="userNickname">{{chatUserObj.nickname}}</div>
                <div class="unreadCount" v-if="chatUserObj.unreadCount > 0">{{chatUserObj.unreadCount > 99 ? "99+" : chatUserObj.unreadCount}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatSideBar",
        props: {
            chatUserList: Array,
            currentChatUser: Object
        },
        data() {
            return {
                
            }
        },
        methods: {
            changeChatMessage(userObj) {
                userObj.unreadCount = 0
                this.$emit('getChatMessageList')
                this.$emit('clearUnreadCount', userObj.username)
            }
        }
    }
</script>

<style>

    .currentChat {
        background-color: #f6f6f6;
    }

    #chatSideBar {
        position: relative;
        width: 286px;
        height: 100%;
        left: 0;
        top: 0;
        border-right: 1px solid #ebebeb;
    }

    #chatSideBar .chatSearch {
        width: 90%;
        margin: 0 auto;
        padding: 20px 0;
        border-bottom: 1px solid #ebebeb;
    }

    #chatSideBar .chatSearch .chatSearchInput {
        box-sizing: border-box;
        padding: 9px;
        height: 36px;
        width: 100%;
        font-size: 14px;
        border-radius: 3px;
        border: 1px solid #e7eaf1;
        background-color: #f7f8fa;
    }

    #chatSideBar .chatList .chatUser {
        display: block;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        height: 70px;
        width: 90%;
        line-height: 70px;
        margin: 0 auto;
        border-bottom: 1px solid #f7f8fa;
    }

    #chatSideBar .chatList .chatUser:hover {
        cursor: pointer;
    }

    #chatSideBar .chatList .chatUser .userProfile {
        height: 46px;
        width: 46px;
        border-radius: 50%;
    }

    #chatSideBar .chatList .chatUser .userNickname {
        height: 30px;
        line-height: 30px;
        position: absolute;
        left: 70px;
        top: 18px;
        font-size: 18px;
    }

    #chatSideBar .chatList .chatUser .unreadCount {
        color: #FFF;
        font-size: 10px;
        padding: 2px;
        border-radius: 50%;
        position: absolute;
        left: 190px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        top: 20px;
        background-color: red;
    }
</style>