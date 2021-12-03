<template>
  <div id="problem">
      <MyArticleList></MyArticleList>
      <RightFunction></RightFunction>
  </div>
</template>

<script>
    import RightFunction from './RightFunction'
    import MyArticleList from './MyArticleList'

    export default {
        name: 'MyProblem',
        components: {
            RightFunction, MyArticleList
        }
    }
</script>

<style>
    #problem {
        width: 100%;
        height: calc(100vh - 52px);
        padding-left: 200px;
        background-color: #f6f6f6;
    }
</style>