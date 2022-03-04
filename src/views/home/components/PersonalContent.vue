<template>
    <div id="personalContent">
        <ul class="contents">
            <router-link class="contentItem" to="/myArticle" active-class="active">{{this.person}}的文章<span class="articleSum">{{this.articleSum}}</span></router-link>
            <router-link class="contentItem" to="/myLike" active-class="active">{{this.person}}的喜欢<span class="articleSum">{{this.likeSum}}</span></router-link>
            <router-link class="contentItem" :class="{showPersonalMessage: !this.showPersonalMessage}" to="/myMessage" active-class="active">个人信息</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PersonalContent',
        components: {

        },
        props: {
            showPersonalMessage: Boolean,
            person: String,
            articleSum: Number,
            likeSum: Number
        }
    }
</script>

<style>

    .showPersonalMessage {
        display: none;
    }

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

    #personalContent .contents .articleSum {
        display: inline-block;
        background-color: rgb(160, 149, 149);
        margin-left: 4px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        color: rgb(15, 45, 109);
        font-size: 14px;
        font-weight: 600;
    }

    #personalContent .contents .contentItem {
        padding-bottom: 10px;
        margin-right: 15px;
        color: #8590A6;
    }
</style>