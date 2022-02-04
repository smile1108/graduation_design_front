<template>
  <div id="registryContent">
        <input class="username" type="text" placeholder="请输入学号" ref="username" v-model="username">
        <div class="errorMsg" ref="usernameError">{{usernameErrorMsg}}</div>
        <input class="pwd" type="password" placeholder="请输入密码" ref="password" v-model="password">
        <div class="errorMsg" ref="passwordError">{{passwordErrorMsg}}</div>
        <input class="confirmPwd" type="password" placeholder="请再次输入密码" ref="confirmPwd" v-model="confirmPwd">
        <div class="errorMsg" ref="confirmPwdError">{{confirmPwdErrorMsg}}</div>
        <button class="registryBtn">注册</button>
  </div>
</template>

<script>
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
        }
    }
</script>

<style>

    .errorMsg {
        color: red;
        font-size: 14px;
        margin-left: 70px;
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