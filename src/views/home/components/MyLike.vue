<template>
    <div id="myLike">
        <MyArticleItem></MyArticleItem>
        <Page></Page>
    </div>
</template>

<script>

    import MyArticleItem from './MyArticleItem'
    import Page from '../../index/components/pageComponent'

    export default {
        name: 'MyLike',
        components: {
            MyArticleItem, Page
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