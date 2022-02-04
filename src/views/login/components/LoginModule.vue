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
    import axios from 'axios'

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
                usernameErrorMsg: '',
                passwordErrorMsg: '',
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
                let usernameError = false
                let passwordError = false
                // 密码验证的正则表达式
                var patt = /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
                if(username.length > 20 || username.length < 8) {
                    this.username = ''
                    this.usernameErrorMsg = '学号长度必须大于8位并且小于20位'
                    usernameError = true
                }
                if(!patt.test(password)) {
                    this.password = ''
                    this.passwordErrorMsg = '密码必须包含大小写字母、数字以及特殊字符,并且长度大于8位小于20位'
                    passwordError = true
                }
                if(usernameError) {
                    usernameDom.style.setProperty('border-bottom', '2px solid red')
                    usernameErrorDom.style.setProperty('visibility', 'visible')
                }
                if(passwordError) {
                    passwordDom.style.setProperty('border-bottom', '2px solid red')
                    passwordErrorDom.style.setProperty('visibility', 'visible')
                }

                if(!usernameError && !passwordError) {
                    // 如果用户名和密码都没有问题 然后向后端发送请求
                    let formData = new FormData();
                    formData.append('username', username);
                    formData.append('password', password);
                    axios.post('http://localhost:9527/user/login',formData).then((response) => {
                        if(response.data.code == 200){
                            // 跳转页面
                            window.location.href = 'index.html'                            
                        } else {
                            window.alert(response.data.msg)
                            this.username = ''
                            this.password = ''
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

    .errorMsg {
        color: red;
        font-size: 14px;
        margin-left: 60px;
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