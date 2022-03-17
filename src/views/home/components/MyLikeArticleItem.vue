<template>
    <div id="likeArticleItem" @click="jumpArticle()">
        <MyArticleHeader :articleTitle="articleObj.title"></MyArticleHeader>
        <MyArticleContent :articleContent="articleObj.textContent"></MyArticleContent>
        <MyLikeArticleFooter :articleObj="articleObj" :userInfo="userInfo"></MyLikeArticleFooter>
    </div>
</template>

<script>

    import MyArticleHeader from './MyArticleHeader'
    import MyArticleContent from './MyArticleContent'
    import MyLikeArticleFooter from './MyLikeArticleFooter'

    export default {
        name: "MyLikeArticleItem",
        components: {
            MyArticleHeader, MyArticleContent, MyLikeArticleFooter
        },
        props: {
            articleObj: Object,
            userInfo: Object
        },
        methods: {
            jumpArticle() {
                let href = "article.html#/" + this.articleObj.id
                window.open(href, "_blank")
            }
        }
    }
</script>

<style>
    #likeArticleItem {
        height: 110px;
        width: 70%;
        padding: 6px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #likeArticleItem:hover {
        cursor: pointer;
        background-color: rgb(233, 232, 232);
    }
</style>