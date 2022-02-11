<template>
    <div id="publishBox" :class="{showPublishBox: !showPublishBox}">
        <input type="text" class="articleTitleInput" :placeholder="articleTitlePlaceholder" v-model="articleTitle"/>
        <div class="classifyDiv">
            <select class="classifySelect" v-model="classify" name="articleClassify">
                <option value="">请选择文章分类</option>
                <option v-for="classifyObj in articleClassify" :key="classifyObj.articleClassify" :value="classifyObj.articleClassify">{{classifyObj.name}}</option>
            </select>
        </div>
        <div class="bottomButton">
            <div class="boxPublishBtn">发布</div>
            <div class="cancelBtn" @click="cancel()">取消</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "PublishBox",
        props: {
            showPublishBox: Boolean
        },
        data() {
            return {
                articleTitlePlaceholder: "请输入文章标题",
                articleTitle: "",
                articleClassify: [],
                classify: "",  // 用户选中的分类 默认是计算机
            }
        },
        methods: {
            cancel() {
                this.$emit('cancelPublish')
            }
        },
        mounted() {
            this.articleClassify = JSON.parse(sessionStorage.getItem('articleClassify'))
        }
    }
</script>

<style>
    #publishBox {
        border: 1px solid rgb(110, 102, 221);
        position: absolute;
        left: 520px;
        top: 120px;
        background-color: #7a8897;
        z-index: 1700;
        height: 300px;
        width: 400px;
        border-radius: 6px;
    }

    #publishBox .articleTitleInput {
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

    #publishBox .classifyDiv {
        line-height: 18px;
        cursor: pointer;
        margin-top: 40px;
        width: 100%;
    }

    #publishBox .classifySelect {
        width: 70%;
        padding: 10px;
        display: block;
        margin: 0 auto;
        font-size: 18px;
        border: none;
        outline: none;
    }
    
    #publishBox .bottomButton {
        height: 50px;
        width: 100%;
        margin-top: 60px;
    }

    #publishBox .bottomButton .boxPublishBtn, .cancelBtn {
        display: inline-block;
        width: 90px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        border: 1px solid black;
        color: #ebebeb;
        border-radius: 6px;
        margin-left: 66px;
    }

    #publishBox .bottomButton .cancelBtn {
        background: rgb(179, 70, 70);
    }

    #publishBox .bottomButton .cancelBtn:hover {
        cursor: pointer;
        background: rgb(223, 20, 20);
    }

    #publishBox .bottomButton .boxPublishBtn {
        background: #2470b6;
    }

    #publishBox .bottomButton .boxPublishBtn:hover {
        cursor: pointer;
        background: rgb(16, 180, 185);
    }

    .showPublishBox {
        display: none;
    }
</style>