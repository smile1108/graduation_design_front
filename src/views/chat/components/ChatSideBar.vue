<template>
    <div id="chatSideBar">
        <div class="chatSearch">
            <input type="text" class="chatSearchInput" placeholder="搜索联系人" v-model="searchContent" @blur="blurInput()" @focus="focusInput()">
            <div class="userListDiv" ref="userListDiv">
                <div class="noUser" v-if="userList.length == 0">没有查询结果</div>
                <div class="searchUserObj" v-else v-for="searchUserObj in userList" :key="searchUserObj.username" @mousedown="jumpTargetUser(searchUserObj)">
                    <img :src="searchUserObj.profile" alt="头像" class="userProfile">
                    <div class="userNickname">{{searchUserObj.nickname}}</div>
                </div>
            </div>
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

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "ChatSideBar",
        props: {
            chatUserList: Array,
            currentChatUser: Object,
            userInfo: Object
        },
        data() {
            return {
                searchContent: '',
                userList: []
            }
        },
        watch: {
            searchContent: function(newVal) {
                // 当搜索框中值改变时 进行搜索
                let searchUserUrl = API.BASE_URL + API.searchUser + "?keyword=" + newVal + "&username=" + this.userInfo.username
                axios.get(searchUserUrl).then(res => {
                    if(res.data.code === 200) {
                        this.userList = JSON.parse(JSON.stringify(res.data.data))
                    }
                })
            }
        },
        methods: {
            changeChatMessage(userObj) {
                userObj.unreadCount = 0
                this.$emit('getChatMessageList')
                this.$emit('clearUnreadCount', userObj.username)
            },
            blurInput() {
                let userListDivDom = this.$refs.userListDiv
                userListDivDom.style.setProperty('display', 'none')
            },
            focusInput() {
                let userListDivDom = this.$refs.userListDiv
                userListDivDom.style.setProperty('display', 'block')
            },
            jumpTargetUser(userObj) {
                this.$router.push('/chat/' + userObj.username)
                this.$router.go(0)
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

    #chatSideBar .chatSearch .userListDiv {
        position: absolute;
        width: 256px;
        border-radius: 3px;
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #ebebeb;
        z-index: 10;
        display: none;
        height: 170px;
        overflow: auto;
    }

    #chatSideBar .chatSearch .userListDiv .noUser {
        font-size: 13px;
        width: 120px;
        text-align: center;
        margin: 0 auto;
    }

    #chatSideBar .chatSearch .userListDiv .searchUserObj {
        position: relative;
        padding: 5px 10px;
        border-bottom: 1px solid #ebebeb;
    }

    #chatSideBar .chatSearch .userListDiv .searchUserObj:hover {
        background-color: #f6f6f6;
        cursor: pointer;
    }

    #chatSideBar .chatSearch .userListDiv .searchUserObj .userProfile {
        height: 38px;
        width: 38px;
        border-radius: 50%;
    }

    #chatSideBar .chatSearch .userListDiv .searchUserObj .userNickname {
        height: 30px;
        line-height: 30px;
        position: absolute;
        left: 60px;
        top: 10px;
        font-size: 18px;
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #chatSideBar .chatList .chatUser .unreadCount {
        color: #FFF;
        font-size: 10px;
        padding: 2px;
        border-radius: 50%;
        position: absolute;
        left: 230px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        top: 20px;
        background-color: red;
    }
</style>