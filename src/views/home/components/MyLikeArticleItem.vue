<template>
    <div id="likeArticleItem">
        <MyArticleHeader :articleTitle="articleObj.title"></MyArticleHeader>
        <MyArticleContent :articleContent="articleObj.textContent"></MyArticleContent>
        <MyLikeArticleFooter :articleObj="articleObj"></MyLikeArticleFooter>
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
            articleObj: Object
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