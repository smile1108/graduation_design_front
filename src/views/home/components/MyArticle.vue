<template>
    <div id="myArticle">
        <MyArticleItem v-for="article in myArticleList" :key="article.id" :articleObj="article" @deleteArticle="deleteArticle"
        :showPersonalMessage="showPersonalMessage"></MyArticleItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyArticleItem from './MyArticleItem'
    import Page from '../../index/components/pageComponent'
    import axios from 'axios'

    export default {
        name: 'MyArticle',
        components: {
            MyArticleItem, Page
        },
        props: {
            userInfo: Object,
            showPersonalMessage: Boolean
        },
        data() {
            return {
                myArticleList: [],
                pageMax: undefined,
            }
        },
        methods: {
            deleteArticle(article) {
                console.log(article)
                if(confirm("您确定要删除吗?")) {
                    // 调用后端删除文章的接口
                    if(this.userInfo == null || this.userInfo == undefined) {
                        // 如果当前userInfo 为null  代表没有登录 此时不能进行喜欢操作 要跳转到登录页面
                        alert("进行此操作,需要您先登录")
                        window.location.href = 'login.html'
                    } else {
                        let url = "http://localhost:9527/article/deleteArticle"
                        let formData = new FormData()
                        formData.append("id", article.id)
                        formData.append("username", this.userInfo.username)
                        axios.post(url, formData).then(res => {
                            if(res.data.code === 200) {
                                // 如果成功 刷新当前页面
                                this.$router.go(0)
                            } else if(res.data.code === 519) {
                                // 表示用户身份认证信息 过期 跳转到登录页面
                                alert('用户身份认证信息过期, 请重新登录')
                                window.location.href = 'login.html#/login'
                            }
                        })
                    }
                }
            },
            changePage(page) {
                let url = "http://localhost:9527/article/getArticleListByUsername?username=" + this.userInfo.username + "&page=" + (page - 1)
                axios.get(url).then(res => {
                if(res.data.code === 200) {
                    this.myArticleList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
                    alert("用户身份认证过期, 请重新登录")
                    window.location.href = 'login.html'
                }
            })
            }
        },
        mounted() {
            // 当页面渲染完成之后 请求获取自己文章的接口
            let url = "http://localhost:9527/article/getArticleListByUsername?username=" + this.userInfo.username
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    this.myArticleList = res.data.data.lists
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
    #myArticle {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px;
        box-sizing: border-box;
    }
</style>