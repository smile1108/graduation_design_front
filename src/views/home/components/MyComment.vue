<template>
    <div id="myComment">
        <MyCommentItem></MyCommentItem>
    </div>
</template>

<script>

    import MyCommentItem from './MyCommentItem'

    export default {
        name: "MyComment",
        components: {
            MyCommentItem
        },
        props: {
            userInfo: Object,
            showPersonalMessage: Boolean
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