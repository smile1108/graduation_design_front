<template>
    <div id="myFollow">
        <MyFollowItem v-for="followUserObj in myFollowList" :key="followUserObj.username" :followUserObj="followUserObj"
        :userInfo="userInfo"></MyFollowItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyFollowItem from './MyFollowItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "MyFollow",
        components: {
            MyFollowItem, Page
        },
        props: {
            userInfo: Object,
            showPersonalMessage: Boolean
        },
        data() {
            return {
                myFollowList: [],
                pageMax: undefined
            }
        },
        methods: {
            changePage(page) {
                let url = API.BASE_URL + API.getFollowList + "?username=" + this.userInfo.username + "&page=" + (page - 1)
                axios.get(url).then(res => {
                if(res.data.code === 200) {
                    this.myFollowList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
                    alert("用户身份认证过期, 请重新登录")
                    window.location.href = 'login.html'
                }
            })
            }
        },
        mounted() {
            // 当页面渲染完成之后 调用获取关注列表的接口
            let url = API.BASE_URL + API.getFollowList + "?username=" + this.$route.params.username
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    this.myFollowList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
                    alert("用户身份认证过期, 请重新登录")
                    window.location.href = 'login.html'
                }
            })
        }
    }
</script>

<style>
    #myFollow {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px 50px;
        box-sizing: border-box;
    }
</style>