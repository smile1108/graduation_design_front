<template>
    <div id="personalContent">
        <ul class="contents">
            <router-link class="contentItem" :to="{path: '/myArticle/' + this.$route.params.username}" active-class="active">{{this.person}}的文章<span class="sumStatistics">{{this.articleSum}}</span></router-link>
            <router-link class="contentItem" :to="{path: '/myLike/' + this.$route.params.username}" active-class="active">{{this.person}}的喜欢<span class="sumStatistics">{{this.likeSum}}</span></router-link>
            <router-link class="contentItem" :to="{path: '/myFollow/' + this.$route.params.username}" active-class="active">{{this.person}}的关注<span class="sumStatistics">{{this.followSum}}</span></router-link>
            <router-link class="contentItem" :to="{path: '/myComment/' + this.$route.params.username}" active-class="active">{{this.person}}的评论<span class="sumStatistics">{{this.commentSum}}</span></router-link>
            <router-link class="contentItem" :to="{path: '/myQuestion/' + this.$route.params.username}" active-class="active">{{this.person}}的问题<span class="sumStatistics">{{this.questionSum}}</span></router-link>
            <router-link class="contentItem" :class="{showPersonalMessage: !this.showPersonalMessage}" :to="{path: '/myMessage/' + this.$route.params.username}" active-class="active">个人信息</router-link>
        </ul>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'PersonalContent',
        components: {

        },
        props: {
            showPersonalMessage: Boolean,
            person: String
        },
        data() {
            return {
                articleSum: undefined,
                likeSum: undefined,
                followSum: undefined,
                commentSum: undefined,
                questionSum: undefined
            }
        },
        mounted() {
            // 当这个组件渲染完成之后调用统计 用户文章以及喜欢文章数量的接口
            let countArticleUrl = "http://localhost:9527/article/countArticleByUser?username=" + this.$route.params.username
            let countLikeUrl = "http://localhost:9527/article/countLikeByUser?username=" + this.$route.params.username
            let countFollowUrl = "http://localhost:9527/user/countFollow?username=" + this.$route.params.username
            let countCommentUrl = "http://localhost:9527/comment/countCommentByUser?username=" + this.$route.params.username
            let countQuestionUrl = "http://localhost:9527/article/question/countQuestionByUser?username=" + this.$route.params.username
            axios.get(countArticleUrl).then(res => {
                if(res.data.code === 200) {
                    // 代表请求成功
                    this.articleSum = res.data.data
                }
            })
            axios.get(countLikeUrl).then(res => {
                if(res.data.code === 200) {
                    this.likeSum = res.data.data
                }
            })
            axios.get(countFollowUrl).then(res => {
                if(res.data.code === 200) {
                    this.followSum = res.data.data
                }
            })
            axios.get(countCommentUrl).then(res => {
                if(res.data.code === 200) {
                    this.commentSum = res.data.data
                }
            })
            axios.get(countQuestionUrl).then(res => {
                if(res.data.code === 200) {
                    this.questionSum = res.data.data
                }
            })
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

    #personalContent .contents .sumStatistics {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: rgb(213, 92, 48);
        font-size: 14px;
        font-weight: 600;
    }

    #personalContent .contents .contentItem {
        padding-bottom: 10px;
        margin-right: 15px;
        color: #8590A6;
    }
</style>