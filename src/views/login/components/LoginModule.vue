<template>
  <div id="loginContent">
        <input class="username" type="text" :placeholder="usernameHolder" v-model="username" ref="username" @focus="inputFocus('username')">
        <div class="errorMsg" ref="usernameError">{{usernameErrorMsg}}</div>
        <input class="password" type="password" :placeholder="passwordHolder" v-model="password" ref="password" @focus="inputFocus('password')">
        <div class="errorMsg" ref="passwordError">{{passwordErrorMsg}}</div>
        <button class="loginBtn" @click="login()">登录</button>
  </div>
</template>

<script>
    export default {
        name: 'LoginModule',
        components: {

        },
        data() {
            return {
                username: '',
                password: '',
                usernameHolder: '学号',
                passwordHolder: '密码',
                usernameErrorMsg: '学号长度不能超过20',
                passwordErrorMsg: '密码长度不能超过20',
            }
        },
        methods: {
            // input框获取焦点之后 将errorMsg 不可见 并且颜色恢复
            inputFocus(dom) {
                let usernameDom = this.$refs.username;
                let passwordDom = this.$refs.password;
                let usernameErrorDom = this.$refs.usernameError;
                let passwordErrorDom = this.$refs.passwordError;
                if(dom === 'username') {
                    usernameDom.style.setProperty('border-bottom', '1px solid #ebebeb')
                    usernameErrorDom.style.setProperty('visibility', 'hidden')
                } else {
                    passwordDom.style.setProperty('border-bottom', '1px solid #ebebeb')
                    passwordErrorDom.style.setProperty('visibility', 'hidden')
                }
            },
            login() {
                let username = this.username;
                let password = this.password;
                let usernameDom = this.$refs.username;
                let passwordDom = this.$refs.password;
                let usernameErrorDom = this.$refs.usernameError;
                let passwordErrorDom = this.$refs.passwordError;
                if(username.length > 20) {
                    usernameDom.style.setProperty('border-bottom', '2px solid red')
                    this.username = ''
                    this.usernameErrorMsg = '学号长度不能超过20'
                    usernameErrorDom.style.setProperty('visibility', 'visible')
                }
                if(password.length > 20) {
                    passwordDom.style.setProperty('border-bottom', '2px solid red');
                    this.password = ''
                    this.passwordErrorMsg = '密码长度不能超过20'
                    passwordErrorDom.style.setProperty('visibility', 'visible')
                }
            }
        }
    }
</script>

<style>

    .errorMsg {
        color: red;
        font-size: 14px;
        margin-left: 80px;
        visibility: hidden;
    }

    #loginContent {
        float: left;
        width: 100%;
        height: 450px;
    }

    #loginContent .username, .password {
        display: block;
        width: 70%;
        height: 30px;
        margin-top: 50px;
        margin: 40px auto 5px;
        border-top: none;
        border-left: none;
        border-right: none;
        text-indent: 14px;
        font-size: 18px;
        border-bottom: 1px solid #ebebeb;
    }

    #loginContent .loginBtn {
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

    #loginContent .loginBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
        border-color: #005ce6;
    }
</style>