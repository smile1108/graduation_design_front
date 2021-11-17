<template>
  <div id="content">
      <MySelector></MySelector>
      <MyArticleList></MyArticleList>
  </div>
</template>

<script>
    import MySelector from './MySelector'
    import MyArticleList from './MyArticleList'

    export default {
        name: 'MyContent',
        components: {
            MySelector, MyArticleList
        }
    }
</script>

<style>
    #content {
        width: 100%;
        height: calc(100vh - 52px);
        background-color: #f6f6f6;
    }
</style>