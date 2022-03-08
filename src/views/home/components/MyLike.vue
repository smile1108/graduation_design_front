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
            // 先根据 sessionStorage中的visitUser存在与否判断访问的是谁的主页
            let visitUserObj = JSON.parse(sessionStorage.getItem('visitUser'))
            if(visitUserObj != null) {
                // 如果不为空 就获取对应用户喜欢的文章列表
                let url = "http://localhost:9527/article/getLikeListByUser?username=" + visitUserObj.username
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
            } else {
                // 代表非法请求 弹窗警告 然后跳转至 首页
                alert("非法请求")
                window.location.href = "index.html"
            }
        },
        methods: {
            changePage(page) {
                let visitUserObj = JSON.parse(sessionStorage.getItem('visitUser'))
                let url = "http://localhost:9527/article/getLikeListByUser?username=" + visitUserObj.username + "&page=" + (page - 1)
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