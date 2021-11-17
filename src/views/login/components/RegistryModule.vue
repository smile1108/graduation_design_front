<template>
  <div id="registryContent">
        <input class="username" type="text" placeholder="请输入学号">
        <input class="pwd" type="password" placeholder="请输入密码">
        <input class="confirmPwd" type="password" placeholder="请再次输入密码">
        <button class="registryBtn">注册</button>
  </div>
</template>

<script>
    export default {
        name: 'RegistryModule'
    }
</script>

<style>
    #registryContent {
        float: left;
        width: 100%;
        height: 450px;
    }

    #registryContent .username, .pwd, .confirmPwd {
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