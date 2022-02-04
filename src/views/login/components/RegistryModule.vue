<template>
  <div id="registryContent">
        <input class="username" type="text" placeholder="请输入学号" ref="username" v-model="username" @focus="inputFocus('username')">
        <div class="errorMsg" ref="usernameError">{{usernameErrorMsg}}</div>
        <input class="pwd" type="password" placeholder="请输入密码" ref="password" v-model="password" @focus="inputFocus('password')">
        <div class="errorMsg" ref="passwordError">{{passwordErrorMsg}}</div>
        <input class="confirmPwd" type="password" placeholder="请再次输入密码" ref="confirmPwd" v-model="confirmPwd" @focus="inputFocus('confirmPwd')">
        <div class="errorMsg" ref="confirmPwdError">{{confirmPwdErrorMsg}}</div>
        <button class="registryBtn" @click="register()">注册</button>
  </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'RegistryModule',
        components: {

        },
        data() {
            return {
                username: '',
                password: '',
                confirmPwd: '',
                usernameErrorMsg: '用户名不正确',
                passwordErrorMsg: '密码不正确',
                confirmPwdErrorMsg: '确认密码不正确'
            }
        },
        methods: {
            // input框获取焦点之后 将errorMsg 不可见 并且颜色恢复
            inputFocus(dom) {
                let usernameDom = this.$refs.username;
                let passwordDom = this.$refs.password;
                let confirmPwdDom = this.$refs.confirmPwd;
                let usernameErrorDom = this.$refs.usernameError;
                let passwordErrorDom = this.$refs.passwordError;
                let confirmPwdErrorDom = this.$refs.confirmPwdError;
                if(dom === 'username') {
                    usernameDom.style.setProperty('border-bottom', '1px solid #ebebeb')
                    usernameErrorDom.style.setProperty('visibility', 'hidden')
                } else if(dom === 'password'){
                    passwordDom.style.setProperty('border-bottom', '1px solid #ebebeb')
                    passwordErrorDom.style.setProperty('visibility', 'hidden')
                } else {
                    confirmPwdDom.style.setProperty('border-bottom', '1px solid #ebebeb')
                    confirmPwdErrorDom.style.setProperty('visibility', 'hidden')
                }
            },
            // 注册 function
            register() {
                let username = this.username
                let password = this.password
                let confirmPwd = this.confirmPwd
                let usernameDom = this.$refs.username
                let passwordDom = this.$refs.password
                let confirmPwdDom = this.$refs.confirmPwd
                let usernameErrorDom = this.$refs.usernameError
                let passwordErrorDom = this.$refs.passwordError
                let confirmPwdErrorDom = this.$refs.confirmPwdError
                let usernameError = false
                let passwordError = false
                let confirmPwdError = false
                // 密码验证的正则表达式
                var patt = /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
                if(username.length > 20 || username.length < 8) {
                    this.username = ''
                    this.usernameErrorMsg = '学号长度必须大于8位并且小于20位'
                    usernameError = true
                }
                if(!patt.test(password)) {
                    this.password = ''
                    this.confirmPwd = ''
                    this.passwordErrorMsg = '密码必须包含大小写字母、数字以及特殊字符,并且长度大于8位小于20位'
                    passwordError = true
                }
                if(password !== confirmPwd) {
                    this.confirmPwd = ''
                    this.confirmPwdErrorMsg = '两次输入密码不一致'
                    confirmPwdError = true
                }
                // 如果输入的学号 密码等信息有误的话 设置页面样式
                if(usernameError) {
                    usernameDom.style.setProperty('border-bottom', '2px solid red')
                    usernameErrorDom.style.setProperty('visibility', 'visible')
                }
                if(passwordError) {
                    passwordDom.style.setProperty('border-bottom', '2px solid red')
                    passwordErrorDom.style.setProperty('visibility', 'visible')
                }
                if(confirmPwdError) {
                    confirmPwdDom.style.setProperty('border-bottom', '2px solid red')
                    confirmPwdErrorDom.style.setProperty('visibility', 'visible')
                }
                // 如果所有信息都没有问题 就发送请求到后端
                if(!usernameError && !passwordError && !confirmPwdError) {
                    let formData = new FormData();
                    formData.append('username', username);
                    formData.append('password', password);
                    formData.append('confirmPwd', confirmPwd);
                    axios.post('http://localhost:9527/user/register',formData).then((response) => {
                        if(response.data.code == 200){
                            window.alert('注册成功')
                            // 跳转到登录页面
                            window.location.href = 'login.html#/login'                            
                        } else {
                            window.alert(response.data.msg)
                            this.username = ''
                            this.password = ''
                            this.confirmPwd = ''
                        }
                    })
                }
            }
        }
    }
</script>

<style>

    .errorMsg {
        color: red;
        font-size: 14px;
        margin-left: 70px;
        visibility: hidden;
    }

    #registryContent {
        float: left;
        width: 100%;
        height: 450px;
    }

    #registryContent .username, .pwd, .confirmPwd {
        display: block;
        width: 70%;
        height: 30px;
        margin: 30px auto 5px;
        border-top: none;
        border-left: none;
        border-right: none;
        text-indent: 14px;
        font-size: 18px;
        border-bottom: 1px solid #ebebeb;
    }

    #registryContent .registryBtn {
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

    #registryContent .registryBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
        border-color: #005ce6;
    }
</style>