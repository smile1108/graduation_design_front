<template>
    <div id="modifyPasswordBox" :class="{ showModify: !showModify }" class="clearfix">
        <input class="oldPassword" type="password" placeholder="请输入旧密码" v-model="oldPassword">
        <input class="newPassword" type="password" placeholder="请输入新密码" v-model="newPassword">
        <input class="confirmNewPassword" type="password" placeholder="请再次输入新密码" v-model="confirmNewPassword">
        <div class="modifyBtn" @click="modifyPassword()">修改</div>
        <div class="closeBtn"  @click="closeBox()">关闭</div>
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "ModifyPasswordBox",
        props: {
            showModify: Boolean,
            userInfo: Object
        },
        data() {
            return {
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            }
        },
        methods: {
            closeBox() {
                this.$emit("changeShowModify", false)
            },
            modifyPassword() {
                let modifyPasswordUrl = API.BASE_URL + API.modifyPassword
                let formData = new FormData()
                formData.append('username', this.userInfo.username)
                formData.append('oldPassword', this.oldPassword)
                formData.append('newPassword', this.newPassword)
                formData.append('confirmNewPassword', this.confirmNewPassword)
                axios.post(modifyPasswordUrl, formData).then(res => {
                    if(res.data.code === 200) {
                        this.$emit("changeShowModify", false)
                        alert(res.data.msg)
                    } else {
                        alert(res.data.msg)
                    }
                })
            }
        }
    }
</script>

<style>

    .showModify {
        display: none;
    }

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    #modifyPasswordBox {
        background-color: rgb(230, 222, 222);
        position: absolute;
        left: 520px;
        top: 220px;
        z-index: 12;
        width: 450px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
    }

    #modifyPasswordBox .oldPassword, .newPassword, .confirmNewPassword {
        display: block;
        width: 70%;
        height: 30px;
        margin: 20px auto 5px;
        border-top: none;
        border-left: none;
        border-right: none;
        text-indent: 14px;
        font-size: 18px;
        border-bottom: 1px solid #ebebeb;
    }

    #modifyPasswordBox .modifyBtn {
        float: left;
        font-size: 14px;
        height: 26px;
        padding: 4px 16px;
        line-height: 26px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
        margin-left: 80px;
        margin-top: 20px;
        margin-bottom: 15px;
    }

    #modifyPasswordBox .modifyBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #modifyPasswordBox .closeBtn {
        float: left;
        font-size: 14px;
        height: 26px;
        padding: 4px 16px;
        line-height: 26px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
        margin-left: 80px;
        margin-top: 20px;
        margin-bottom: 15px;
    }

    #modifyPasswordBox .closeBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }
</style>