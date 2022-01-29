<template>
    <div id="personalContent">
        <ul class="contents">
            <router-link class="contentItem" to="/myArticle" active-class="active">我的文章</router-link>
            <router-link class="contentItem" to="/myLike" active-class="active">我的喜欢</router-link>
            <router-link class="contentItem" to="/myMessage" active-class="active">个人信息</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PersonalContent',
        components: {

        }
    }
</script>

<style>

    .active {
        font-weight: 600;
        color: #121212 !important;
        border-bottom: 4px solid #0066FF;
    }

    #personalContent {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        border-bottom: 1px solid rgb(240, 242, 247);
        padding-bottom: 5px;
    }

    #personalContent .contents {
        padding: 10px;
    }

    #personalContent .contents .contentItem {
        padding-bottom: 10px;
        margin-right: 15px;
        color: #8590A6;
    }
</style>