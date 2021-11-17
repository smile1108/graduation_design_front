<template>
  <div id="loginContent">
        <input class="username" type="text" placeholder="学号">
        <input class="password" type="password" placeholder="密码">
        <button class="loginBtn">登录</button>
  </div>
</template>

<script>
    export default {
        name: 'LoginModule'
    }
</script>

<style>
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
        margin: 50px auto;
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