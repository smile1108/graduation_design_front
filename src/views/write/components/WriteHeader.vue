<template>
  <div id="writeHeader">
      <div class="logo">校园信息共享系统</div>
      <div class="title">写文章</div>
      <div class="publishBtn">发布</div>
      <img class="userImg" :src="userInfo.img" alt="头像">
  </div>
</template>

<script>
    export default {
        name: 'WriteHeader',
        data() {
            return {
                userInfo: {
                    img: "https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727"
                }
                // userInfo: null
            }
        }
    }
</script>

<style>
    #writeHeader {
        width: 100%;
        height: 64px;
        padding: 0 120px;
        background-color: #fff;
    }

    #writeHeader .logo {
        width: 180px;
        line-height: 40px;
        margin-top: 12px;
        text-align: center;
        font-size: 18px;
        float: left;
        border-right: 1px solid rgb(201, 195, 195);
    }

    #writeHeader .title {
        float: left;
        height: 100%;
        width: 100px;
        line-height: 64px;
        text-align: center;
        font-weight: 600;
        font-size: 22px;
    }

    #writeHeader .publishBtn {
        float: left;
        height: 36px;
        width: 80px;
        margin-left: 500px;
        margin-top: 14px;
        font-size: 18px;
        line-height: 36px;
        text-align: center;
        border-radius: 12px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
    }

    #writeHeader .publishBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #writeHeader .userImg {
        margin-left: 400px;
        margin-top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    #writeHeader .userImg:hover {
        cursor: pointer;
    }
</style>