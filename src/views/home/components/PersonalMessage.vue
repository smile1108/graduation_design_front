<template>
    <div id="personalMsg">
        <div class="topDiv">
            <div class="returnIndex" @click="returnIndex()">&lt; 返回首页</div>
            <div class="returnHome" v-if="this.loginUser.username != this.userInfo.username"
            @click="returnHome()">我的主页</div>
        </div>
        <div class="bottomDiv">
            <img :src="userInfo.profile" alt="头像" class="personalAvatar">
            <div class="message">
                <span class="nickName">{{userInfo.nickname}}</span>
                <span class="school">{{userInfo.school}}</span>
            </div>
            <div class="functionalButton">
                <div class="modifyPassword" :class="{showPersonalMessage: !this.showPersonalMessage}" @click="showModifyBox()">修改密码</div>
                <div class="modifyAvatar" :class="{showPersonalMessage: !this.showPersonalMessage}" @click="showAvatarBox()">修改头像</div>
            </div>
        </div>
        <div id="popLayer" :class="{active: !this.showAvatar && !showModify}"></div>
        <AvatarCutterBox :showAvatar="showAvatar" @changeShowAvatar="changeShowAvatar" :userInfo="userInfo"></AvatarCutterBox>
        <ModifyPasswordBox :showModify="showModify" @changeShowModify="changeShowModify" :userInfo="userInfo"></ModifyPasswordBox>
    </div>
</template>

<script>
    import AvatarCutterBox from './AvatarCutterBox'
    import ModifyPasswordBox from './ModifyPasswordBox'

    export default {
        name: 'PersonalMessage',
        components: {
            AvatarCutterBox, ModifyPasswordBox
        },  
        props: {
            userInfo: Object,
            showPersonalMessage: Boolean
        },
        data() {
            return {
                showAvatar: false,
                showModify: false,
                loginUser: Object
            }
        },
        methods: {
            showAvatarBox() {
                this.showAvatar= true
            },
            showModifyBox() {
                this.showModify = true
            },
            changeShowAvatar(param) {
                this.showAvatar = param
            },
            changeShowModify(param) {
                this.showModify = param
            },
            returnIndex() {
                window.location.href = 'index.html'
            },
            returnHome() {
                window.location.href = 'home.html#/' + JSON.parse(sessionStorage.getItem('userInfo')).username
                this.$router.go(0)
            }
        },
        mounted() {
            this.loginUser = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style scoped>

    .showPersonalMessage {
        display: none !important;
    }

    .active {
        display: none;
    }

    #personalMsg {
        height: 250px;
        width: 70%;
        margin: 10px auto 0;
    }

    #personalMsg #popLayer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        background-color: rgba(136, 132, 132, 0.9);
    }

    #personalMsg .topDiv {
        width: 100%;
        height: 50%;
        background-color: royalblue;
    }

    #personalMsg .topDiv .returnIndex {
        display: inline-block;
        height: 30px;
        padding: 4px 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #f01a1a;
        margin-left: 10px;
        margin-top: 10px;
    }

    #personalMsg .topDiv .returnHome {
        display: inline-block;
        height: 30px;
        padding: 4px 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #f01a1a;
        margin-left: 800px;
        margin-top: 10px;
    }

    #personalMsg .topDiv .returnHome:hover {
        cursor: pointer;
        background-color: #991717;
    }

    #personalMsg .topDiv .returnIndex:hover {
        cursor: pointer;
        background-color: #991717;
    }

    #personalMsg .bottomDiv {
        width: 100%;
        height: 50%;
        background-color: #fff;
        position: relative;
    }

    #personalMsg .bottomDiv .personalAvatar {
        width: 120px;
        height: 120px;
        position: absolute;
        left: 40px;
        top: -40px;
        border-radius: 10px;
        border: 5px solid #fff;
    }

    #personalMsg .bottomDiv .message {
        width: 80%;
        height: 60%;
        margin-left: 180px;
    }

    #personalMsg .bottomDiv .functionalButton {
        width: 80%;
        height: 40%;
        margin-left: 180px;
    }

    #personalMsg .bottomDiv .message .nickName {
        font-size: 24px;
        font-weight: 700;
        display: inline-block;
        margin-top: 20px;
        margin-left: 10px;
    }

    #personalMsg .bottomDiv .message .school {
        font-size: 18px;
        font-weight: 500;
        display: inline-block;
        margin-top: 20px;
        margin-left: 20px;
    }

    #personalMsg .bottomDiv .functionalButton div {
        display: inline-block;
        height: 30px;
        padding: 4px 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
    }

    #personalMsg .bottomDiv .functionalButton div:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #personalMsg .bottomDiv .functionalButton .modifyPassword {
        margin-left: 500px;
        margin-right: 50px;
    }

    /* #personalMsg .bottomDiv .functionalButton .modifyAvatar {
        
    } */
</style>