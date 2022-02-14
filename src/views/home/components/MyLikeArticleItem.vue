<template>
    <div id="likeArticleItem">
        <MyArticleHeader></MyArticleHeader>
        <MyArticleContent></MyArticleContent>
        <MyLikeArticleFooter></MyLikeArticleFooter>
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