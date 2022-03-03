<template>
    <div id="articleItem">
        <MyArticleHeader :articleTitle="articleObj.title"></MyArticleHeader>
        <MyArticleContent :articleContent="articleObj.textContent"></MyArticleContent>
        <MyArticleFooter :articleObj="articleObj" @deleteArticle="deleteArticle"></MyArticleFooter>
    </div>
</template>

<script>

    import MyArticleHeader from './MyArticleHeader'
    import MyArticleContent from './MyArticleContent'
    import MyArticleFooter from './MyArticleFooter'

    export default {
        name: "MyArticleItem",
        components: {
            MyArticleHeader, MyArticleContent, MyArticleFooter
        },
        props: {
            articleObj: Object
        },
        methods: {
            deleteArticle() {
                this.$emit('deleteArticle', this.articleObj)
            }
        }
    }
</script>

<style>
    #articleItem {
        height: 110px;
        width: 70%;
        padding: 6px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #articleItem:hover {
        cursor: pointer;
        background-color: rgb(233, 232, 232);
    }

</style>