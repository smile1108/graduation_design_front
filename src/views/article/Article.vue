<template>
  <div id="article">
      <ArticleMessage></ArticleMessage>
  </div>
</template>

<script>

    import ArticleMessage from './components/ArticleMessage'

    export default {
        name: 'Article',
        components: {
            ArticleMessage
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style>
    #article {
        background-color: #f6f6f6;
    }
</style>