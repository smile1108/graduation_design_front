<template>
    <div id="findPassword">
        <input class="email" type="text" placeholder="请输入账号绑定的邮箱" ref="email" v-model="email" @focus="inputFocus('email')">
        <div class="errorMsg" ref="emailError">{{emailErrorMsg}}</div>
        <input class="code" type="text" placeholder="请输入验证码" v-model="code">
        <button class="getCodeBtn" @click="getCode()" ref="getCodeBtn" :disabled="gotit" :class="{getCodeDisabled: gotit}">{{this.gotit ? gotitMessage : codeBtnMessage}}</button>
        <button class="findPasswordBtn" @click="register()">找回密码</button>
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "FindPassword",
        data() {
            return {
                email: '',
                emailErrorMsg: '',
                codeBtnMessage: '获取验证码',
                gotit: false,
                code: '',
                countdown: 60,
                timer: null
            }
        },
        computed: {
            gotitMessage: function() {
                return this.countdown + "秒不能重新获取"
            }
        },
        methods: {
            inputFocus(dom) {
                let emailDom = this.$refs.email;
                let emailErrorDom = this.$refs.emailError
                if(dom === 'email') {
                    emailDom.style.setProperty('border-bottom', '1px solid #ebebeb')
                    emailErrorDom.style.setProperty('visibility', 'hidden')
                }
            },
            getCode() {
                var emailPatt = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
                if(this.email != null && this.email != "" && emailPatt.test(this.email)) {
                    // 如果填写的邮箱不为空 才发送验证码
                    let getCodeUrl = API.BASE_URL + API.getCode + "?userEmail=" + this.email
                    axios.get(getCodeUrl).then(res => {
                        alert(res.data.msg)
                    })
                    if (!this.timer) {
                        this.countdown = 60;
                        this.gotit = true
                        this.timer = setInterval(() => {
                        if (this.countdown > 0 && this.countdown <= 60) {
                            this.countdown--;
                        } else {
                            this.gotit = false;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                        }, 1000)
                    }
                } else {
                    let emailDom = this.$refs.email
                    let emailErrorDom = this.$refs.emailError
                    emailDom.style.setProperty('border-bottom', '2px solid red')
                    emailErrorDom.style.setProperty('visibility', 'visible')
                    this.email = ''
                    this.emailErrorMsg = '请检查您的邮箱格式是否正确'
                }
                
            },
        }
    }
</script>

<style>

    #findPassword .email {
        display: block;
        width: 70%;
        height: 30px;
        margin: 90px auto 5px;
        border-top: none;
        border-left: none;
        border-right: none;
        text-indent: 14px;
        font-size: 18px;
        border-bottom: 1px solid #ebebeb;
    }

    #findPassword .code {
        margin-top: 20px;
        margin-left: 55px;
        width: 36%;
        height: 30px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #ebebeb;
        text-indent: 14px;
        font-size: 18px;
    }

    #findPassword .getCodeBtn {
        display: inline-block;
        border: 1px solid black;
        width: 130px;
        height: 30px;
        line-height: 28px;
        text-align: center;
        border-radius: 3px;
        margin-left: 8px;
        background-color: rgb(0, 102, 255);
        border-color: rgb(0, 102, 255);
        color: #fff;
        font-size: 14px;
    }

    #findPassword .getCodeBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
        border-color: #005ce6;
    }

    #findPassword .findPasswordBtn {
        display: block;
        width: 272px;
        height: 36px;
        margin: 50px auto;
        color: #fff;
        border-radius: 3px;
        text-align: center;
        font-size: 18px;
        background-color: rgb(0, 102, 255);
        border-color: rgb(0, 102, 255);
    }

    #findPassword .findPasswordBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
        border-color: #005ce6;
    }
</style>