<template>
  <div id="header">
      <router-link class="loginHeader" active-class="active" to="/login">登录</router-link>
      <router-link class="registryHeader" active-class="active" to="/registry">注册</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Login',
    }
</script>

<style>
    #header {
        width: 400px;
        height: 500px;
        border: 1px solid black;
        box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
        margin: 100px auto 0;
        background-color: #fff;
    }

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    .active {
        font-weight: 600;
        border-bottom: 6px solid #0066FF !important;
    }

    #header .loginHeader, .registryHeader {
        float: left;
        width: 50%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        box-sizing: border-box;
        padding-bottom: 10px;
        color: #444;
        border-bottom: none;
        display: block;
    }

    #header .content {
        width: 10px;
        height: 10px;
        background-color: green;
    }
</style>