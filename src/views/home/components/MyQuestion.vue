<template>
    <div id="myQuestion">
        <MyQuestionItem v-for="questionObj in myQuestionList" :key="questionObj.id" :questionObj="questionObj"
        :showPersonalMessage="showPersonalMessage"></MyQuestionItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyQuestionItem from './MyQuestionItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'

    export default {
        name: "MyQuestion",
        props: {
            userInfo: Object,
            showPersonalMessage: Boolean
        },
        components: {
            MyQuestionItem, Page
        },
        data() {
            return {
                myQuestionList: [],
                pageMax: undefined,
            }
        },
        methods: {
            changePage(page) {
                let url = "http://localhost:9527/article/question/getUserQuestionList?username=" + this.userInfo.username + "&page=" + (page - 1)
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        this.myQuestionList = res.data.data.lists
                        this.pageMax = res.data.data.sumPage
                    } else if(res.data.code === 519) {
                        alert("用户身份认证过期, 请重新登录")
                        window.location.href = 'login.html'
                    }
                })
            }
        },
        mounted() {
            // 当页面渲染完成之后 调用获取自己问题列表的接口
            let getUserQuestionListUrl = "http://localhost:9527/article/question/getUserQuestionList?username=" + this.$route.params.username
            axios.get(getUserQuestionListUrl).then(res => {
                if(res.data.code === 200) {
                    this.myQuestionList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 529) {
                    alert(res.data.msg)
                    window.location.href = "login.html"
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
</script>

<style>
    #myQuestion {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px;
        box-sizing: border-box;
    }
</style>