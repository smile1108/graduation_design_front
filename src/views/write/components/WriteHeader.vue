<template>
  <div id="writeHeader">
      <div class="logo">校园信息共享系统</div>
      <div class="title">写文章</div>
      <div class="publishBtn" @click="publish()">发布</div>
      <div class="returnIndex" @click="returnIndex()">首页</div>
      <img class="userImg" :src="userInfo.profile" alt="头像">
      <div id="popLayer" :class="{showPublishBox: !showPublishBox}"></div>
      <PublishBox :showPublishBox="showPublishBox" @cancelPublish="cancelPublish" @transferDataAndPublish="transferDataAndPublish"></PublishBox>
  </div>
</template>

<script>

    import PublishBox from './PublishBox'

    export default {
        name: 'WriteHeader',
        components: {
            PublishBox
        },
        props: {
            userInfo: Object,
            showPublishBox: Boolean
        },
        data() {
            return {
                
            }
        },
        methods: {
            cancelPublish() {
                this.$emit('modifyShowPublishBox', false)
            },
            publish() {
                this.$emit('modifyShowPublishBox', true)
            },
            transferDataAndPublish(articleTitle, articleClassify) {
                this.$emit('transferDataAndPublish', articleTitle, articleClassify)
            },
            returnIndex() {
                // 返回首页
                window.location.href = 'index.html'
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

    #writeHeader .publishBtn, .returnIndex {
        float: left;
        height: 36px;
        width: 80px;
        margin-left: 500px;
        margin-top: 14px;
        font-size: 18px;
        line-height: 36px;
        text-align: center;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
    }

    #writeHeader .returnIndex {
        margin-left: 50px !important;
        background-color: #ec3413;
        border: 1px solid #ec3413;
    }

    #writeHeader .returnIndex:hover {
        cursor: pointer;
        background-color: #d98927;
    }

    #writeHeader .publishBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #writeHeader .userImg {
        margin-left: 300px;
        margin-top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    #writeHeader .userImg:hover {
        cursor: pointer;
    }

    #writeHeader #popLayer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1600;
        background-color: rgba(136, 132, 132, 0.9);
    }

    .showPublishBox {
        display: none;
    }
</style>