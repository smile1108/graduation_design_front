<template>
    <div id="chatArea">
        <ChatSideBar :chatUserList="chatUserList" :currentChatUser="currentChatUser"></ChatSideBar>
        <ChatBox :currentChatUser="currentChatUser"></ChatBox>
    </div>
</template>

<script>

    import ChatSideBar from './ChatSideBar'
    import ChatBox from './ChatBox'
    import {API} from '../../api'
    import axios from 'axios'

    export default {
        name: "ChatArea",
        components: {
            ChatSideBar, ChatBox
        },
        data() {
            return {
                chatUserList: [],
                currentChatUser: null
            }
        },
        mounted() {
            let getUserMessageUrl = API.BASE_URL + API.getUserByUsername + "?username=" + this.$route.params.toUser
            axios.get(getUserMessageUrl).then(res => {
                if(res.data.code === 200) {
                    let userObj = JSON.parse(JSON.stringify(res.data.data))
                    this.chatUserList.unshift(userObj)
                    this.currentChatUser = userObj
                }
            })
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