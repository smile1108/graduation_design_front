<template>
    <div id="myAnswer">
        <MyAnswerItem v-for="answerObj in myAnswerList" :key="answerObj.id" :answerObj="answerObj" :userInfo="userInfo"></MyAnswerItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyAnswerItem from './MyAnswerItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "MyAnswer",
        props: {
            userInfo: Object
        },
        components: {
            MyAnswerItem, Page
        },
        data() {
            return {
                myAnswerList: [],
                pageMax: undefined
            }
        },
        methods: {
            changePage(page) {
                let url = API.BASE_URL + API.getUserAnswerList + "?username=" + this.$route.params.username + "&page=" + (page - 1)
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        this.myAnswerList = res.data.data.lists
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
            let getUserAnswerListUrl = API.BASE_URL + API.getUserAnswerList + "?username=" + this.$route.params.username
            axios.get(getUserAnswerListUrl).then(res => {
                if(res.data.code === 200) {
                    this.myAnswerList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
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
    #myAnswer {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px;
        box-sizing: border-box;
    }
</style>