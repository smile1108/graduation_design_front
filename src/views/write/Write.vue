<template>
  <div id="writeArea">
      <WriteHeader></WriteHeader>
      <WriteArticle></WriteArticle>
  </div>
</template>

<script>
    import WriteArticle from './components/WriteArticle'
    import WriteHeader from './components/WriteHeader'

    export default {
        name: 'Write',
        components: {
            WriteArticle, WriteHeader
        },
        data() {
            return {
                userInfo: {
                    img: "https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727"
                }
                // userInfo: null
            }
        }
    }
</script>

<style>
</style>