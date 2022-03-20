<template>
    <div id="myComment">
        <MyCommentItem v-for="commentObj in commentList" :key="commentObj.id" :commentObj="commentObj"
        :userInfo="userInfo"></MyCommentItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyCommentItem from './MyCommentItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "MyComment",
        components: {
            MyCommentItem, Page
        },
        props: {
            userInfo: Object,
            showPersonalMessage: Boolean
        },
        data() {
            return {
                commentList: [],
                pageMax: undefined
            }
        },
        methods: {
            changePage(page) {
                let url = API.BASE_URL + API.getCommentListByUser + "?username=" + this.$route.params.username + "&page=" + (page - 1)
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        this.commentList = res.data.data.lists
                        this.pageMax = res.data.data.sumPage
                    } else if(res.data.code === 519) {
                        alert("用户身份认证过期, 请重新登录")
                        window.location.href = 'login.html'
                    }
                })
            }
        },
        mounted() {
            // 当页面渲染完成之后调用获取用户评论的接口
            let getUserCommentListUrl = API.BASE_URL + API.getCommentListByUser + "r?username=" + this.$route.params.username
            axios.get(getUserCommentListUrl).then(res => {
                if(res.data.code === 200) {
                    this.commentList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
                    alert("用户身份认证过期, 请重新登录")
                    window.location.href = 'login.html'
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
</script>

<style>
    #myComment {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px 50px;
        box-sizing: border-box;
    }
</style>