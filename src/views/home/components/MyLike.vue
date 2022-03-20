<template>
    <div id="myLike">
        <MyLikeArticleItem v-for="articleObj in likeArticles" :key="articleObj.id" :articleObj="articleObj"
        :userInfo="userInfo"></MyLikeArticleItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyLikeArticleItem from './MyLikeArticleItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: 'MyLike',
        components: {
            MyLikeArticleItem, Page
        },
        data() {
            return {
                likeArticles: [],
                pageMax: undefined,
            }
        },
        props: {
            userInfo: Object
        },
        mounted() {
            // 获取对应用户喜欢的文章列表
            let url = API.BASE_URL + API.getLikeListByUser + "?username=" + this.$route.params.username
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    // 代表请求成功 然后赋值给当前页面的data数据
                    this.likeArticles = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
                    alert("用户身份认证过期, 请重新登录")
                    window.location.href = 'login.html'
                }
            })
        },
        methods: {
            changePage(page) {
                let url = API.BASE_URL + API.getLikeListByUser + "?username=" + this.$route.params.username + "&page=" + (page - 1)
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        this.likeArticles = res.data.data.lists
                        this.pageMax = res.data.data.sumPage
                        this.articleSum = res.data.data.count
                        this.$emit('changeArticleSum', this.articleSum)
                    } else if(res.data.code === 519) {
                        alert("用户身份认证过期, 请重新登录")
                        window.location.href = 'login.html'
                    }
                })
            }
        }
    }
</script>

<style>
    #myLike {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px;
        box-sizing: border-box;
    }
</style>